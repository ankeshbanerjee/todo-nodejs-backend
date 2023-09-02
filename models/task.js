import mongoose from "mongoose";
import {Schema} from 'mongoose'

const taskSchema = new Schema({
    title : {
        type: String, 
        required: true
    },
    description : {
        type: String,
        required : true
    },
    isCompleted: {
        type: Boolean, 
        default : false
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, // population
        ref : "users", // ref should be name of the collection, whose id is supposed to be provided above
        required: true
    },
    createAt : {
        type : Date,
        default : Date.now
    }
})

const Task = mongoose.model("tasks", taskSchema);
export default Task;