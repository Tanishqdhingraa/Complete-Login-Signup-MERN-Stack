import { Router } from "express";
import { signupValidation } from "../Middlewares/AuthValidation.js";
import { signup } from "../Controllers/AuthController.js";

const router = Router();

router.post("/login", (req, res) => {
    res.send("login success");
});

router.post("/signup",signupValidation,signup);

export default router;
 