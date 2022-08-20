import express from "express";
import { getAllCourses, addCourse, deleteCourse, editCourse, getCourseById } from "../controllers/courseController.js";

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById)
router.post("/", addCourse);
router.delete("/:id", deleteCourse);
router.put("/:id", editCourse);

export default router;