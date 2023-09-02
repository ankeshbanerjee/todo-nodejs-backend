import express from 'express'
import {config} from 'dotenv'
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlwares/error.js';
import cors from 'cors'

// to use env variables
config({
    path: './data/config.env'
})

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],  // array -> mentione all the domains you want to allow to access
    methods : ["GET", "POST", "PUT", "DELETE"], 
    credentials: true   // this will allow frontend to access the headers and cookies
}))


// routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

app.get('/', (req, res)=>{
    res.status(200).send("nice")
})

// using global error handler middlware
app.use(errorMiddleware);

export default app;