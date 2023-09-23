import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
// import cors from "cors";
const app = express();
// app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.connect("mongodb+srv://admin:9dk4C4AVd8uKjyj3@cluster0.mbu7jw6.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(5000))
.then(()=>
console.log("Connected TO Database and Listening TO LocalHost 5000"))
.catch((err)=>console.log(err));