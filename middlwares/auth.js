import jwt from "jsonwebtoken";
import User from "../models/user.js";
import ErrorHandler from "./error.js";

const isAuthenticated = async (req, res, next)=>{
    const token = req.cookies.token;

    if (!token)
        return next(new ErrorHandler("login first!", 400))

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne({_id: decoded._id});
    next();
}

export default isAuthenticated