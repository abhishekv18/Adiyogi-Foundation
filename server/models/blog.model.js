import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl:{
        type:String, 
        required: true,
    },  
    content:{
        type:String,
        required:true
    } 
    },
{timestamps:true});
export const Blog = mongoose.model('Blog', blogSchema);
