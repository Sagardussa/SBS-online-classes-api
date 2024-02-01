const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    try {
        const token = req.headers.authorization
        // console.log(token);
        const verfy = jwt.verify(token,'this is dummy text');
        // console.log(verfy);

        if (verfy.userType == 'admin'){
            next();
        } else {
            res.status(401).json({
                msg:'not an admin'
            })
        }
        
    }
    catch(error){
        return res.status(401).json({
            msg:"invalid token"
        })

    }

}