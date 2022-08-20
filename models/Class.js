import mongoose from "mongoose";

const Schema = mongoose.Schema

const classSchema = new Schema({
    title: { type: String },
    courses: { type: [mongoose.Types.ObjectId], ref:"Course" },
})

const Class = mongoose.model("Class", classSchema);

export default Class;