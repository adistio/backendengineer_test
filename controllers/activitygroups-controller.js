// import models
import Activitygroups from "../models/activitygroups-model.js";
import { check, validationResult } from "express-validator";


// function get All
export const getAll = async (req, res) => {
    try {
        const data = await Activitygroups.findAll();
        const response = {
            "status":"Success",
            "message":"Success",
            "data": data
        };
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }     
}
 

// function get single data
export const getDataById = async (req, res) => {
    var response;
    try {
        const data = await Activitygroups.findOne({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            if(result){
                response = {
                    "status":"Success",
                    "message":"Success",
                    "data": result
                };
            } else {
                response = {
                    "status":"Not Found",
                    "message":`Activity with ID ${req.params.id} Not Found`,
                    "data": {}
                };
            }
         }).catch((err) => {
            console.log(err);
         });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
}
 

// function save data
export const saveData = async (req, res) => {
    var response;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        response = {
            "status":"Bad Request",
            "message":errors.array()[0].msg,
            "data": {}
        };
        return res.json(response);
    }

    try {
        const data = await Activitygroups.create(req.body);
        response = {
            "status":"Success",
            "message":"Success",
            "data": data
        };
        return res.status(201).json(response);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}
 

// function Update data
export const updateData = async (req, res) => {
    var response;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        response = {
            "status":"Bad Request",
            "message":errors.array()[0].msg,
            "data": {}
        };
        return res.json(response);
    }
    
    try {
        const data = await Activitygroups.findOne({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            if(result){
                result.update(req.body);
                response = {
                    "status":"Success",
                    "message":"Success",
                    "data": result
                };
            } else {
                response = {
                    "status":"Not Found",
                    "message":`Activity with ID ${req.params.id} Not Found`,
                    "data": {}
                };
            }
         }).catch((err) => {
            console.log(err);
         });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}
 

// function Delete data
export const deleteData = async (req, res) => {
    var response;
    try {
        const data = await Activitygroups.destroy({
            where:{
                id: req.params.id
            }
        }).then(function (deletedRecord) {
            if(deletedRecord === 1){
                response = {
                    "status":"Success",
                    "message":"Success",
                    "data": {}
                }; 
            } else {
                response = {
                    "status":"Not Found",
                    "message":`Activity with ID ${req.params.id} Not Found`,
                    "data": {}
                };
            }
        }).catch(function (error){
           return res.status(400).json({message: error.message});
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}


//validate data
export const validateData = (method) => {
    switch (method) {
        case 'saveData': {
            return [ 
                check('title', 'title cannot be null').notEmpty(),
            ]   
        }
        case 'updateData': {
            return [ 
                check('title', 'title cannot be null').notEmpty(),
            ]   
        }
    }
}