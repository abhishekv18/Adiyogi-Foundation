import { imageUploadUtil } from "../helpers/cloudinary.js";
import { Blog } from "../models/blog.model.js";

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



export const addBlog = async(req,res)=>{
    try {
        const{title,imageUrl,content}=req.body;


        if ( !title || !imageUrl || !content ) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
     
        const newBlog = new Blog({title,imageUrl,content});
        await newBlog.save();
        return res.status(201).json({
            message:"Blog Post Successfully",
            success:true,
            newBlog
        });

    } catch (error) {
         console.log(error);
    }
}




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
