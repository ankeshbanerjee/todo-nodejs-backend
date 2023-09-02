import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "todo_backend",
    })
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
};

export default connectDB;