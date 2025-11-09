import express from "express";

import { upload } from "../helpers/cloudinary.js";
import { addProduct, deleteProduct, editProduct, getProductById, getProducts, getProductsByCategory, handleProductImageUpload } from "../controllers/ecommerece.controller.js";

const router = express.Router();

// Product Image Upload
router.route("/upload-image").post(upload.single("my_file"),handleProductImageUpload);

// Product Routes
router.route("/add").post(addProduct);
           // Add new product
  router.route("/get").get(getProducts);         // Get all products

router.route("/category/:category").get(getProductsByCategory); // Get products by category

router.route("/edit/:id").put(editProduct);
            // Edit product
  router.route("/get/:id").get(getProductById);       // Get single product
  router.route("/delete/:id").delete(deleteProduct);    // Delete product


export default router;