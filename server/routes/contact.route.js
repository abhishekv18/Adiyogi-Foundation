import express from "express";
import { addContact } from "../controllers/contact.controller.js";

const router = express.Router();

router.route("/add").post(addContact);



export default router;