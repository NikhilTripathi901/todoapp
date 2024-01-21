import express from "express";
import { getalluser, getprofile, login, logout, register } from "../controllers/user.js";
import { isauthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall",getalluser)

router.post("/register",register)

router.post("/login",login)
router.get("/logout",logout)

router.post("/me",isauthenticated,getprofile)

export default router