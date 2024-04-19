import express from "express";
import {User} from "../model/userModel.js";
import multer from 'multer';
import path  from 'path';
import fs  from 'fs';

const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname) );
    }
});


const upload = multer({ storage: storage });

router.post("/create-user", async (req, res)=> {
    try {
        const user = req.body;
        console.log(user);

        if(!user.name || !user.username || !user.email || !user.password) {
            return res.status(400).send("enter all required fields");
        }
        User.create({
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password
        })
        .then((userAdded)=>{
            return res.status(200).send(userAdded);
        })
    } catch (error) {
        res.status(500).send(error.messege);
    } 
});

router.post('/upload-avatar', upload.single('avatar'), (req, res) => {
    const file = req.file;

    console.log(file);
  
    if (!file) {
      return res.status(400).send('No file uploaded');
    }
  
    // Do something with the uploaded file
    console.log('File uploaded:', file.filename);
    res.send('File uploaded');
});
  

export default router;