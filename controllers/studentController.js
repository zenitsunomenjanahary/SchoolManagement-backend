import Note from "../models/Note.js";
import Student from "../models/Student.js"

export const getAllStudents = async(req,res,next)=>{
    try {
        const students = await Student.find().populate("classe");
        return res.status(200).json(students);
    } catch (error) {
        return res.status(400).json(`An error was occured:${error}`)
    }
}

export const getStudentById = async(req,res,next)=>{
    const id = req.params.id
    try {
        const student = await Student.findById(id).populate("classe");
        return res.status(200).json(student);
    } catch (error) {
        return res.status(404).json(`Unable to find student for this id`);
    }
}

export const addStudent = async(req,res,next)=>{
    const { numero,firstname, lastname, adress,level,years,dateOfBirth, sexe, email, photo, phone, classe } = req.body
    try {
        const newStudent = new Student({
            numero,firstname, lastname, adress,level,years,dateOfBirth, sexe, email, photo, phone, classe
        });
        await newStudent.save();
        return res.status(201).json(newStudent);
    } catch (error) {
        return res.status(400).json(`Unable to add new student : ${error}`)
    }
}

export const deleteStudent = async(req,res,next)=>{
    const id = req.params.id;
    try {
        await Student.findByIdAndRemove(id);
        return res.status(200).json('Student successfully deleted')
    } catch (error) {
        return res.status(400).json('Unable to delete student for this id')
    }
}

export const editStudent = async(req,res,next)=> {
    const id = req.params.id
    const {numero,firstname, lastname, adress,level,years,dateOfBirth, sexe, email, photo, phone, classe } = req.body
    try {
        const student = await Student.findByIdAndUpdate(id,{
            numero,firstname, lastname, adress,level,years,dateOfBirth, sexe, email, photo, phone, classe
        });
        return res.status(202).json(student);
    } catch (error) {
        return res.status(400).json("Unable to update student for this id")
    }
}

export const getStudentNotes = async(req,res,next)=> {
    const id = req.params.id;
    try {
        const notes = await Note.find({student:id}).populate("course");
        return res.status(200).json(notes);
    } catch (error) {
        return res.status(400).json("Unable to get notes for this student id");
    }
}