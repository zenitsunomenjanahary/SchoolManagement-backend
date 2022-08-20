import mongoose from "mongoose";

const Schema = mongoose.Schema

const studentSchema = new Schema({
    numero: { type: String, unique: true },
    firstname: { type: String },
    lastname: { type: String},
    adress: { type: String },
    years: { type: String },
    dateOfBirth: { type: String},
    sexe: { type: String},
    email: { type: String },
    phone: { type: String },
    photo : { type: String },
    classe: { type: mongoose.Types.ObjectId, ref:"Class" }
});

const Student = mongoose.model('Student', studentSchema);

export default Student;