import { Router } from "express";

const router = Router();


router.get("/",(req , res)=>{
    res.status(200).json([
        {
            name:"tanishq dhingra"
        },
        {
            name:"yash singhal"
        },
        {
            name:"divya aggarwal"
        },
    ])
})

export default router;
 