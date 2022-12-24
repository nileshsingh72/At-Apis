const jwt = require("jsonwebtoken");
const authMiddle = (req,res,next)=>{
    try {
        const token = req.headers["token"];
        jwt.verify(token , process.env.SECRET_KEY , (error ,check)=>{
            if(error){ 
                return res.status(401).json({
                    message:"invalid token"
                })
            }
            else{
                req.body.userID = check.id
                next();
            }
        });
        
    } catch (error) {
        return res.status(401).json({
            message:"invalid token"
        })
    }
}

module.exports = authMiddle;