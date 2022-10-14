// import models
import Activitygroups from "../models/activitygroups-model.js";
 
// function get All
export const getAll = async (req, res) => {
    try {
        const activitygroups = await Activitygroups.findAll();
        // console.log(activitygroups);
        res.status(200).json(activitygroups);
    } catch (error) {
        res.status(500).json({message: error.message});
    }     
}
 

// function get single data
export const getDataById = async (req, res) => {
    try {
        const activitygroups = await Activitygroups.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(activitygroups);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}
 
// function Create User
export const saveData = async (req, res) => {
    const data = new Activitygroups(req.body);
    try {
        const savedData = data.save();
        res.status(201).json({msg: "User Created",});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 

// function Update
export const updateData = async (req, res) => {
    try {
        await Activitygroups.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// // function Delete
export const deleteData = async (req, res) => {
    try {
        await Activitygroups.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}