import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    },  
    role:{
        type:String,
        default:'admin',
        enum:['admin','super-admin'],
    } 
    },
{timestamps:true});
export const User = mongoose.model('User', userSchema);