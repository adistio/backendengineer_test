// import express
import express from "express";

// import controllers
import { getAll, getDataById, saveData, deleteData, updateData } from "../controllers/activitygroups-controller.js";
 
// express router
const router = express.Router();
 
// Route get All
router.get('/', getAll);
// Route get single Data
router.get('/:id', getDataById);
// Route CREATE Data
router.post('/', saveData);
// Route DELETE
router.delete('/:id', deleteData);
// Route UPDATE User
router.patch('/:id', updateData);

// export router
export default router;