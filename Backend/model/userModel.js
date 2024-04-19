import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { 
        type: String, 
        required: true,
        unique: true,
    },
    password: { type: String, required: true },
    imgUrl: { type: String,},
    location: { type: String,},
    theirWhat: { type: Array,}
});


export const User = mongoose.model("User", userSchema);