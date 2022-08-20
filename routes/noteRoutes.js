import express from "express";
import { getAllNotes, addNote, deleteNote, editNote, getNoteById } from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById)
router.post("/", addNote);
router.delete("/:id", deleteNote);
router.put("/:id", editNote);

export default router;