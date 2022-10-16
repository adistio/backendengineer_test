// import express
import express from "express";

// import controllers
import { getAll, getDataById, saveData, deleteData, updateData, validateData } from "../controllers/todoitems-controller.js";
 
// express router
const router = express.Router();
 
// Route get All
router.get('/', getAll);
// Route get single Data
router.get('/:id', getDataById);
// Route create Data
router.post('/', validateData('saveData'), saveData);
// Route delete Data
router.delete('/:id', deleteData);
// Route update Data
router.patch('/:id', updateData);

// export router
export default router;