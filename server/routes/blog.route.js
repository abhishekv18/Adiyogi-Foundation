import express from "express";
import { addBlog, deleteBlogs, editBlog, getBlogById, getBlogs, handleImageUpload } from "../controllers/blog.controller.js";
import { upload } from "../helpers/cloudinary.js";


const router = express.Router();




router
  .route("/upload-image")
  .post(upload.single("my_file"), handleImageUpload); // "my_file" must match exactly
 

router.route("/add").post(addBlog);
router.route("/get").get(getBlogs);
router.route("/update/:id").put(editBlog);
router.route("/delete/:id").delete(deleteBlogs);
router.route("/:id").get(getBlogById);
export default router;