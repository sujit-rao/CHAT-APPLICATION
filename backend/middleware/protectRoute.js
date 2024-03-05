import  jwt  from "jsonwebtoken";
import User from "../models/user.model.js";


const protectRoute = async (req, res, next) => {
    try {
     const token = req.cookies.jwt;
     if(!token){
        return res.status(400).json({error: "Unauthrized - No token provided"})
     } 

     const decoded = jwt.verify(token, process.env.JWT_SECRET);

     if(!decoded){
        return res.status(401).json({error: "Unautorized- Invalid token"});
     }

     const user = await User.findById(decoded.userId).select("-password");

     if(!user){
        return res.status(404).json({error: "User not found"})
     }

     req.user = user;
     next();

    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(200).json({error: "internal server error"});
        
    }
};

export default protectRoute;