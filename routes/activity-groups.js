// import express
import express from "express";

// import controllers
import { getAll } from "../controllers/activitygroups-controller.js";
 
// express router
const router = express.Router();
 
// Route get All Users
router.get('/', getAll);
// // Route get single User
// router.get('/:id', getuserById);
// // Route CREATE User
// router.post('/', saveUser);
// // Route UPDATE User
// router.patch('/:id', updateUser);
// // Route DELETE User
// router.delete('/:id', deleteUser);
 
// export router
export default router;