import mongoose from "mongoose";
import Teacher from "../models/Teacher.js"

export const getAllTeachers = async(req,res,next)=> {
    try {
        const teachers = await Teacher.find();
        return res.status(200).json(teachers);
    } catch (error) {
        return res.status(400).json(`An error was occured:${error}`);
    }
}

export const getTeacherById = async(req,res,next)=>{
    const id = req.params.id
    try {
        const teacher = await Teacher.findById(id);
        return res.status(200).json(teacher);
    } catch (error) {
        return res.status(400).json(`An error was occured:${error}`);
    }
}

export const addTeacher = async(req,res,next)=>{
    const { firstname, lastname,phone,email } = req.body;
    try {
        const newTeacher = new Teacher({
            firstname, lastname, phone, email
        })
        await newTeacher.save();
        return res.status(201).json(newTeacher);
    } catch (error) {
        return res.status(400).json(`An error was occured:${error}`);
    }
}

export const deleteTeacher = async(req,res,next) => {
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json(`unable to delete teacher by this id`);
        }
        await Teacher.findByIdAndRemove(id);
        return res.status(400).json("Teacher deleted");
    } catch (error) {
        return res.status(400).json(`An error was occured:${error}`);
    }
}

export const editTeacher = async(req, res, next)=>{
    const id = req.params.id;
    const { firstname, lastname, phone, email } = req.body;
    try {

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json(`Unable to update teacher by this id`);
        }

        const teacher = await Teacher.findByIdAndUpdate(id,{
            firstname, lastname, phone, email
        })

        return res.status(202).json(teacher);

    } catch (error) {
        return res.status(400).json(`An error was occured:${error}`);
    }
}