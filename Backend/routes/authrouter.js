import { Router } from "express";
import { signupValidation,loginValidation } from "../Middlewares/AuthValidation.js";
import { signup,login,getuser } from "../Controllers/AuthController.js";

const router = Router();

router.post("/login", loginValidation,login);

router.post("/signup",signupValidation,signup);

router.get("/user",getuser)

export default router;
 