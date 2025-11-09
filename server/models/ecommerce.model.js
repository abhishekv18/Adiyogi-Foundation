

import mongoose from "mongoose";

const ecommerceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl:{
        type:String, 
        required: true,
    },  
    description:{
        type:String,
        required:true
    } ,
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        enum:['Ghee','Oil','Masala','Pooja Items','Others'],
        default:'others'
    },
    status:{
        type:String,
        enum:['inStock','outOfStock'],
        default:'inStock'
    }
      
    },
{timestamps:true});
export const Ecommerce = mongoose.model('Ecommerce', ecommerceSchema);
