import express from "express";
import home from "./routes/home.js";
import activitygroups from "./routes/activity-groups.js";
import todoitems from "./routes/todo-items.js";
import cors from "cors";
import http from 'http'; 

const app = express();
 
app.use(cors());
app.use(express.json());
app.use('/', home);
app.use('/activity-groups', activitygroups);
app.use('/todo-items', todoitems);
 
var httpServer = http.createServer(app);
httpServer.listen(8090);
// app.listen(8090, () => console.log('Server running'));