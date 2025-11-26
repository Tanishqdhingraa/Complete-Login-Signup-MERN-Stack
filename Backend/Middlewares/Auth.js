


const ensureAuthenticated =  (req , res, next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403)
        .json({
            message:`Unauthorizaes , jwt token is required`
        })
    }
    try {
        
    } catch (error) {
        
    }
}
