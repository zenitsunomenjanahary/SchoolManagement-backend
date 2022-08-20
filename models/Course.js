import mongoose from "mongoose";

const Schema = mongoose.Schema

const courseSchema = new Schema({
    title: { type: String },
    teacher: { type: mongoose.Types.ObjectId, ref:"Teacher", required: true},
    coefficient: { type: String },
    classe: { type: mongoose.Types.ObjectId, ref:"Class", required: true }
})

const Course = mongoose.model("Course", courseSchema);

export default Course;