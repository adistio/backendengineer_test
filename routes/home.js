import express from "express";

const router = express.Router();

var home = {
    "message" : "Welcome to API TODO"
};

router.get('/', function(req, res, next){
    res.json(home);
});

export default router;