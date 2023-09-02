import mongoose from "mongoose";
import {Schema} from 'mongoose'

const userSchema = new Schema({
    name : {
        type: String, 
        required: true
    },
    email : {
        type: String,
        required : true
    },
    password: {
        type: String,
        required: true,
        select: false // by using this, when we try to find a user, then all the user info is got except password.
    },
    createAt : {
        type : Date,
        default : Date.now()
    }
})

const User = mongoose.model("users", userSchema);
export default User;