import mongoose from "mongoose";

const Schema = mongoose.Schema

const noteSchema = new Schema({
    student: { type: mongoose.Types.ObjectId, ref:"Student"},
    course: { type: mongoose.Types.ObjectId, ref:"Course" },
    note: { type: String },
    classe: { type: mongoose.Types.ObjectId, ref:"Class"}
})

const Note = mongoose.model("Note", noteSchema);

export default Note;