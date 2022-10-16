// import models
import Todoitems from "../models/todoitems-model.js";
import { check, validationResult } from "express-validator";
 

// function get All
export const getAll = async (req, res) => {
    const filters = req.query;
    console.log(filters);
    try {
        var data;
        if(JSON.stringify(filters) !== '{}'){
            data = await Todoitems.findAll({
                where: {
                    activity_group_id: filters.activity_group_id
                }
            });
        } else {
            data = await Todoitems.findAll();
        }
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
        const data = await Todoitems.findOne({
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
                return res.status(200).json(response);
            } else {
                response = {
                    "status":"Not Found",
                    "message":`Todo with ID ${req.params.id} Not Found`,
                    "data": {}
                };
                return res.status(404).json(response);
            }
        }).catch((err) => {
            console.log(err);
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
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
        return res.status(400).json(response);
    }

    try {
        const data = await Todoitems.create(req.body);
        const response = {
            "status":"Success",
            "message":"Success",
            "data": data
        };
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({message: error.message});
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
        return res.status(404).json(response);
    }
    
    try {
        const data = await Todoitems.findOne({
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
                return res.status(200).json(response);
            } else {
                response = {
                    "status":"Not Found",
                    "message":`Todo with ID ${req.params.id} Not Found`,
                    "data": {}
                };
                return res.status(404).json(response);
            }
         }).catch((err) => {
            console.log(err);
         });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
 

// function Delete data
export const deleteData = async (req, res) => {
    var response;
    try {
        const data = await Todoitems.destroy({
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
                return res.status(200).json(response);
            } else {
                response = {
                    "status":"Not Found",
                    "message":`Todo with ID ${req.params.id} Not Found`,
                    "data": {}
                };
                return res.status(404).json(response);
            }
        }).catch(function (error){
            console.log(err);
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


//validate data
export const validateData = (method) => {
    switch (method) {
        case 'saveData': {
            return [ 
                check('title', 'title cannot be null').notEmpty(),
                check('activity_group_id', 'activity_group_id cannot be null').notEmpty(),
            ]   
        }
        // case 'updateData': {
        //     return [ 
        //         check('title', 'title cannot be null').notEmpty(),
        //     ]   
        // }
    }
}