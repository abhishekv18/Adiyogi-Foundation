import express from "express";
import { login, logout, register, getAllUsers, deleteUser,adminRegister} from "../controllers/user.controller.js";
// import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

// router.route("/register").post(register);
// router.route("/admin-register").post(isAuthenticated,adminRegister);
// router.route("/login").post(login);
// router.route("/logout").post(logout);
// router.route("/getAllUsers").get(isAuthenticated,getAllUsers);
// router.route("/deleteUser/:id").delete(isAuthenticated,deleteUser);

router.route("/register").post(register);
router.route("/admin-register").post(adminRegister);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/getAllUsers").get(getAllUsers);
router.route("/deleteUser/:id").delete(deleteUser);

export default router;