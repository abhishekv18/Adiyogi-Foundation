import express from "express";
import { addBlog, deleteBlogs, editBlog, getBlogs, handleImageUpload } from "../controllers/blog.controller.js";
import { upload } from "../helpers/cloudinary.js";
// import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();




router
  .route("/upload-image")
  .post(upload.single("my_file"), handleImageUpload); // "my_file" must match exactly
 

// router.route("/add").post(isAuthenticated,addBlog);
// router.route("/get").get(getBlogs);
// router.route("/update/:id").put(isAuthenticated,editBlog);
// router.route("/delete/:id").delete(isAuthenticated,deleteBlogs);


router.route("/add").post(addBlog);
router.route("/get").get(getBlogs);
router.route("/update/:id").put(editBlog);
router.route("/delete/:id").delete(deleteBlogs);

export default router;