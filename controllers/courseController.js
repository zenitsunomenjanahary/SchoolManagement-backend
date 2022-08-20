import Class from "../models/Class.js";
import Course from "../models/Course.js"
import Teacher from "../models/Teacher.js";

export const getAllCourses = async(req,res,next)=>{
    try {
        const courses = await Course.find().populate("teacher").populate("classe");
        return res.status(200).json(courses);
    } catch (error) {
        return res.status(400).json("Unable to find courses");
    }
}

export const getCourseById = async(req,res,next)=>{
    const id = req.params.id
    try {
        const course = await Course.findById(id);
        return res.status(200).json(course);
    } catch (error) {
        return res.status(400).json("Unable to get course by this id")
    }
}

export const addCourse = async(req,res,next)=>{

    const { title, teacher, coefficient,classe } = req.body;

    try {
        //get class who learn the course
        const classCourse = await Class.findById(classe);
        const teacherCourse = await Teacher.findById(teacher);
        //Create new course
        const newCourse = new Course({
            title, teacher, coefficient, classe
        });

        //add new course to class
        classCourse.courses.push(newCourse);
        teacherCourse.courses.push(newCourse);

        //Save data
        await classCourse.save();
        await teacherCourse.save();
        await newCourse.save();

        return res.status(201).json(newCourse);

    } catch (error) {
        return res.status(400).json("Unable to add new course");
    }
}

export const deleteCourse = async(req,res,next)=>{
    const id = req.params.id;
    try {
        const course = await Course.findById(id);
        const classe = await Class.findById(course.classe);
        const teacher = await Teacher.findById(teacher.classe);

        classe.courses.pull(course);
        teacher.courses.pull(course);

        await classe.save();
        await teacher.save();

        await Course.findByIdAndRemove(id);

        return res.status(200).json("Course deleted");

    } catch (error) {
        return res.status(400).json("Unable to delete course")
    }
}

export const editCourse = async(req,res,next)=>{
    const id = req.params.id
    const { title, teacher, coefficient } = req.body
    try {
        const course = await Course.findByIdAndUpdate(id,{
            title, teacher, coefficient
        })
        return res.status(202).json("Course updated")
    } catch (error) {
        return res.status(400).json('Unable to update course')
    }
}