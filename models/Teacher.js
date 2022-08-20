import mongoose from "mongoose";

const Schema = mongoose.Schema

const teacherSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    adress: { type: String },
    dateOfBirth: { type: String },
    sexe: { type: String },
    phone: { type: String },
    email: { type: String },
    courses: { type: [mongoose.Types.ObjectId], ref:"Course"},
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;