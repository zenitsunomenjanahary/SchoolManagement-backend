import express from "express";
import { getAllStudents, addStudent, deleteStudent, editStudent, getStudentById } from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentById)
router.post("/", addStudent);
router.delete("/:id", deleteStudent);
router.put("/:id", editStudent);

export default router;