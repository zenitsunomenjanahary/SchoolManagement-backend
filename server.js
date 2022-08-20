import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Routes Import
import studentRoutes from "./routes/studentRoutes.js"
import classesRoutes from "./routes/classRoutes.js"
import courseRoutes from "./routes/courseRoutes.js"
import noteRoutes from "./routes/noteRoutes.js"
import teacherRoutes from "./routes/teacherRoutes.js"

dotenv.config();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Configuration
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

//Database connection
mongoose.connect(MONGO_URI).then(()=> console.log("database connected"));

app.listen(PORT, ()=>{ console.log(` server running on ${PORT}`) });

//Routes
app.use("/students",studentRoutes ) // https://localhost:5000/students
app.use("/classes", classesRoutes)
app.use("/courses", courseRoutes)
app.use("/notes", noteRoutes)
app.use("/teachers", teacherRoutes)