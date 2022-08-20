import express from "express";
import { getAllClasses, addClass, deleteClass, editClass, getClassById } from "../controllers/classController.js";

const router = express.Router();

router.get("/", getAllClasses);
router.get("/:id", getClassById)
router.post("/", addClass);
router.delete("/:id", deleteClass);
router.put("/:id", editClass);

export default router;