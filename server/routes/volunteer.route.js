import express from "express";

import { addVolunteer } from "../controllers/volunteer.controller.js";

const router = express.Router();

router.route("/add").post(addVolunteer);



export default router;