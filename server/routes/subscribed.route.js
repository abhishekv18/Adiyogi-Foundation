import express from "express";

import { addSubscribed } from "../controllers/subscribe.controller.js";

const router = express.Router();

router.route("/add").post(addSubscribed);



export default router;