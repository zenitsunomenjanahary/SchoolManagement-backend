import Class from "../models/Class.js"

export const getAllClasses = async(req,res,next)=>{
    try {
        const classes = await Class.find();
        return res.status(200).json(classes);
    } catch (error) {
        return res.status(400).json("Unable to get classes");
    }
}

export const getClassById = async(req,res,next)=>{
    const id = req.params.id;
    try {
        const classe = await Class.findById(id).populate('courses');
        return res.status(200).json(classe);
    } catch (error) {
        return res.status(400).json("Unable to get classe by this id")
    }
}

export const addClass = async(req,res,next) =>{
    const { title } = req.body;
    try {
        const classe = new Class({ title });
        await classe.save();
        return res.status(201).json(classe);
    } catch (error) {
        return res.status(400).json(`Unable to add new classe ${error}`)
    }
}

export const deleteClass = async(req,res,next)=>{
    const id = req.params.id
    try {
        await Class.findByIdAndRemove(id);
        return res.status(200).json("Classe deleted")
    } catch (error) {
        return res.status(400).json(`Unable to delete classe for this id ${error}`)
    }
}

export const editClass = async(req,res,next)=>{
    const id = req.params.id;
    const { title } = req.body;
    try {
        const classe = await Class.findByIdAndUpdate(id,{title});
        return res.status(202).json(classe);
    } catch (error) {
        return res.status(400).json(`Unable to update classe`)
    }
}
