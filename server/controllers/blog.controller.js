import { imageUploadUtil } from "../helpers/cloudinary.js";
import { Blog } from "../models/blog.model.js";

import nodemailer from "nodemailer";
import { Subscribe } from "../models/subscribe.model.js";
export const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = `data:${req.file.mimetype};base64,${b64}`;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("🔴 Upload Error:", error); // ✅ this shows exact issue in terminal

    res.status(500).json({
      success: false,
      message: error.message || "Some error occurred", // ✅ send actual error message
    });
  }
};



// export const addBlog = async(req,res)=>{
//     try {
//         const{title,imageUrl,content}=req.body;


//         if ( !title || !imageUrl || !content ) {
//             return res.status(400).json({
//                 message: "Something is missing",
//                 success: false
//             });
//         };
     
//         const newBlog = new Blog({title,imageUrl,content});
//         await newBlog.save();
//         return res.status(201).json({
//             message:"Blog Post Successfully",
//             success:true,
//             newBlog
//         });

//     } catch (error) {
//          console.log(error);
//     }
// }

export const addBlog = async (req, res) => {
  try {
    const { title, imageUrl, content } = req.body;

    if (!title || !imageUrl || !content) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
 const newBlog = new Blog({ title, imageUrl, content });
    await newBlog.save();
   
    const subscribers = await Subscribe.find({});
    const emailList = subscribers.map((sub) => sub.email);

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "join.adiyogifoundation@gmail.com", // your Gmail
        pass: "rajhtxxdaqccsacc" // your App Password
      },
    });

const blogMail = {
  from: "join.adiyogifoundation@gmail.com",
  to: emailList, // or bcc: emailList
  subject: `📝 New Blog Posted: ${title}`,
  html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; color: #333;">
      <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 20px;">

        <h2 style="color: #C41E3A; text-align: center; font-weight: 600;">New Blog Alert</h2>
        <h3 style="text-align: center; margin: 10px 0 20px;">"${title}"</h3>

        <img src="${imageUrl}" alt="Blog Image" style="width: 100%; max-height: 280px; object-fit: cover; border-radius: 4px;" />

        <p style="font-size: 15px; line-height: 1.6; margin: 20px 0;">
          ${content.slice(0, 180)}...
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://adiyogifoundation.org.in/" 
             style="background-color: #C41E3A; color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 500;">
            Read Full Blog
          </a>
        </div>

        <hr style="border: none; border-top: 1px solid #e0e0e0;" />

        <p style="font-size: 13px; color: #777; margin-top: 25px;">
          You are receiving this email because you subscribed to updates from Adiyogi Foundation.
        </p>

        <p style="font-size: 13px; color: #555; margin-bottom: 10px;">Connect with us:</p>

        <div style="margin-bottom: 20px;">
          <a href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" target="_blank" title="Instagram" style="margin-right: 12px;">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" width="24" alt="Instagram" style="filter: grayscale(1);" />
          </a>
          <a href="https://www.facebook.com/share/19wQKAWb1b/" target="_blank" title="Facebook" style="margin-right: 12px;">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" width="24" alt="Facebook" style="filter: grayscale(1);" />
          </a>
          <a href="https://youtube.com/@adiyogifoundation.b?si=hHJk8UzEA1spKAx3" target="_blank" title="YouTube" style="margin-right: 12px;">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" width="24" alt="YouTube" style="filter: grayscale(1);" />
          </a>
          <a href="https://www.linkedin.com/company/adiyogi-foundation" target="_blank" title="LinkedIn">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" width="24" alt="LinkedIn" style="filter: grayscale(1);" />
          </a>
        </div>

        <p style="font-size: 12px; color: #aaa; text-align: center;">
          Adiyogi Foundation | <a href="mailto:social.adiyogifoundation@gmail.com" style="color: #C41E3A; text-decoration: none;">Contact Us</a>
        </p>

      </div>
    </div>
  `
};

 const adminMail = {
      from: "join.adiyogifoundation@gmail.com",
      to: "join.adiyogifoundation@gmail.com", // admin email
      subject: `🔔 New Blog Posted by System`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h3>New blog has been posted on the website:</h3>
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Image URL:</strong> ${imageUrl}</p>
          <p><strong>Content Preview:</strong></p>
          <p>${content.slice(0, 250)}...</p>
          <p>Visit: <a href="https://adiyogifoundation.org.in/">View Blog</a></p>
        </div>
      `
    };

    // Send emails
    // to subscribers
    await transporter.sendMail(adminMail);  //

    // Send email
    await transporter.sendMail(blogMail);

    return res.status(201).json({
      message: "Blog posted and subscribers notified",
      success: true,
      newBlog,
    });
  } catch (error) {
    console.log("Error posting blog or sending mail:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};



export const editBlog = async(req,res)=>{
    try {
         const blogId = req.params.id;
        const{title,imageUrl,content}=req.body;


   const updatedData={
    title,imageUrl,content
   }
     
     const updatedBlog=await Blog.findByIdAndUpdate(blogId,updatedData,{new:true})
    if(!updatedBlog){
        res.status(500).json({
          success: false,
          message: "Blog not found",
        });
      }
        res.status(200).json({
          success: true,
         message:"Blog edited successfully",
         updatedBlog
        });

    } catch (error) {
         console.log(error);
    }
}



export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        return res.status(200).json({
            message: "Blogs fetched successfully",
            success: true,
            blogs
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


export const deleteBlogs = async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findByIdAndDelete({ _id: blogId });
        if (!blog) {
            return res.status(404).json({
                message: "Blog not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Blog deleted successfully",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}
