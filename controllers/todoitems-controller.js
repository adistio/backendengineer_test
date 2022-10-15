// import models
import Todoitems from "../models/todoitems-model.js";
 

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
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }     
}
 

// function get single data
export const getDataById = async (req, res) => {
    try {
        const data = await Todoitems.findOne({
            where: {
                id: req.params.id
            }
        });
        const response = {
            "status":"Success",
            "message":"Success",
            "data": data
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 

// function save data
export const saveData = async (req, res) => {
    try {
        const data = await Todoitems.create(req.body);
        const response = {
            "status":"Success",
            "message":"Success",
            "data": data
        };
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 

// function Update data
export const updateData = async (req, res) => {
    try {
        const data = await Todoitems.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        const response = {
            "status":"Success",
            "message":"Success",
            "data": data
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({message: error.message});
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
                    "data": deletedRecord
                }; 
            } else {
                response = {
                    "status":"Not Found",
                    "message":"Activity with ID 1381738 Not Found",
                    "data": {}
                };
            }
        }).catch(function (error){
            res.status(400).json({message: error.message});
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}