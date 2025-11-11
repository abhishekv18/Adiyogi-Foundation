

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
    size:{
      type: String,
      enum: [
        '200gm', '250gm', '300gm', '400gm', '500gm', '750gm', '900gm', '1kg',
        '2kg', '5kg', '10kg', '15kg', '20kg', '50kg', '100kg',
        '1L', '2L', '5L', '10L', '15L', '20L', '50L', '100L'
      ],
      required: true,
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
    },
    
      
    },
{timestamps:true});
export const Ecommerce = mongoose.model('Ecommerce', ecommerceSchema);
