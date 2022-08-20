import Note from "../models/Note.js"

export const getAllNotes = async(req,res,next)=>{
    try {
        const notes = await Note.find();
        return res.status(200).json(notes);
    } catch (error) {
        return res.status(400).json("unable to find notes")
    }
}

export const getNoteById = async(req,res,next)=>{
    const id = req.params.id;
    try {
        const note = await Note.findById(id).populate("Student").populate("Course");
        return res.status(200).json(note);
    } catch (error) {
        return res.status(400).json("unable to find note for this id")
    }
}

export const addNote = async(req,res,next)=>{
    const { student, course, note,classe } = req.body;
    try {
        const note = new Note({ student, course, note, classe });
        await note.save();
        return res.status(201).json(note)
    } catch (error) {
        return res.status(400).json("unable to add note")
    }
}

export const deleteNote = async(req,res,next)=>{
    const id = req.params.id
    try {
        await Note.findByIdAndRemove(id);
        return res.status(200).json("Note deleted");
    } catch (error) {
        return res.status(400).json("Unable to delete note")
    }
}

export const editNote = async(req,res,next)=>{
    const id = req.params.id
    const { student, course,note,classe } = req.body
    try {
        const noteToUpdate = await Note.findByIdAndUpdate(id,{
            student,course, note,classe
        });
        return res.status(202).json("Note updated");
    } catch (error) {
        return res.status(400).json("unable to update note for this id")
    }
}