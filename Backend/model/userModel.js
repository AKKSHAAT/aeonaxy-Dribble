import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { 
        type: String, 
        required: true,
        
    },
    password: { type: String},
    imgUrl: { type: String},
    location: { type: String},
    theirWhat: { type: Array},
    isVerified: Boolean
});


export const User = mongoose.model("User", userSchema);