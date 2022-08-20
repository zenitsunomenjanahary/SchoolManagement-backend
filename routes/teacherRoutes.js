import express from "express";
import { getAllTeachers, addTeacher, deleteTeacher, editTeacher, getTeacherById } from "../controllers/teacherController.js";

const router = express.Router();

router.get("/", getAllTeachers);
router.get("/:id", getTeacherById)
router.post("/", addTeacher);
router.delete("/:id", deleteTeacher);
router.put("/:id", editTeacher);

export default router;