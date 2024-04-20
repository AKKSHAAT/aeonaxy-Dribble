import express, { response } from "express";
import {User} from "../model/userModel.js";
import multer from 'multer';
import path  from 'path';

import cloudinary from '../utils/cloudinary.js';
const image = '../uploads/1713558479561.jpg';

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

router.post("/create-user", async (req, res)=> {
    try {
        const user = req.body;

        if(!user.name || !user.username || !user.email || !user.password || !user.imgUrl || !user.location) {
            return res.status(400).send("enter all required fields");
        }

        console.log(":::::::user::::" + user);
        User.create({
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password,
            imgUrl: user.imgUrl,
            location: user.location
        })
        .then((userAdded)=>{
            return res.status(200).send(userAdded);
        })
    } catch (error) {
        res.status(500).send({messege: error.messege});
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

        //TODO:fetch user email and add this to profile img url
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

export default router;