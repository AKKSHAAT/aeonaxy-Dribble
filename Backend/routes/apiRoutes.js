import express, { response } from "express";
import {User} from "../model/userModel.js";
import multer from 'multer';
import path  from 'path';
import jwt from 'jsonwebtoken';

import cloudinary from '../utils/cloudinary.js';

import { Resend } from "resend";

const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      console.log("Uploading..");
      cb(null, Date.now() + path.extname(file.originalname) );
    }
});


const upload = multer({ storage: storage });

router.post("/create-user", async (req, res) => {
    try {
        const user = req.body;

        if (!user.name || !user.username || !user.email || !user.password || !user.imgUrl || !user.location) {
            return res.status(400).send("enter all required fields");
        }

        console.log(":::::::user::::" + user);

        const emailExists = await User.findOne({ email: user.email });

        if (emailExists) {
            console.log(":::::::::email exist:::::::::" + emailExists);
            return res.status(400).json({
                error: "email already exists"
            });
        }

        User.create({
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password,
            imgUrl: user.imgUrl,
            location: user.location
        })
        .then((userAdded) => {
            return res.status(200).send(userAdded);
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


router.post('/upload-avatar', upload.single('avatar'), (req, res) => {

    cloudinary.uploader.upload(req.file.path, (err, result)=>{
        if(err) {
            console.log(err);
            return res.status(500).json({
                success:false,
                messege:"Error"
            })
        }

        
        console.log(result.secure_url);
        res.status(200).json({
            success: true,
            url: result.secure_url,
            data: result
        })
    })
});


router.post('/what', async (req, res)=>{
    try {
        
        const selection = req.body.selectedOptions;
        const userEmail = req.body.email;
    
        const userWhatAdded = await User.findOneAndUpdate(
            {email: userEmail},
            {theirWhat: selection}
        )
    
        if(userWhatAdded){
            res.status(200).json({
                success: true
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            messege: error
        });
    }
})

router.post("/login", async (req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({username: userName});

    if(!user){
        return res.status(403).json({
            error: "wrong email"
        })
    }
    if(user.password !== password) {
        return res.status(403).json({
            error: "wrong passowrd"
        })
    }

    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: "1d"});

    res.cookie("token", token, {
        httpOnly: true
    })


})

router.get("/mail", async (req, res)=>{
    const{ token } = req.query;
    const resend = new Resend(process.env.RESEND_KEY);

    const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: [token],
        subject: "Verify your email -Dribbble",
        html: `
            <h1>Discover Your Next Design Inspiration on Dribbble</h1>
            <p>Hi there,</p>
            <p>Get ready to explore the latest trends and creative designs on Dribbble.</p>
            <p>Don't miss out on the amazing artwork shared by talented designers from around the world.</p>
            <p>Start exploring now and unleash your creativity!</p>
            <a href="https://aeonaxy-dribble.onrender.com/user/verify/?email=${token}">Visit Dribbble</a>
        `,
      });
    
      if (error) {
        return res.status(400).json({ error });
      }
    
      res.status(200).json({ data });    

})


router.get("/verify", async (req, res) => {
    const email = req.query.email;

    const userVerified = await User.findOneAndUpdate(
        { email: email },
        { isVerified: true }
    );

    if (!userVerified) {
        return res.status(404).json({
            success: false,
            error: 'userNotFound',
        });
    }

    res.redirect('https://main--relaxed-semifreddo-e33153.netlify.app/Verifed');
});

export default router;