import express from "express";
import home from "./routes/home.js";
import activitygroups from "./routes/activity-groups.js";
import todoitems from "./routes/todo-items.js";
import cors from "cors";
import http from "http"; 
import throttle from "express-throttle";

const app = express();
 
app.use(cors());
app.use(express.json());

app.use('/', throttle({ "rate": "5/s" }), home);
app.use('/activity-groups', throttle({ "rate": "5/s" }), activitygroups);
app.use('/todo-items', throttle({ "rate": "5/s" }), todoitems);
 
var httpServer = http.createServer(app);
// httpServer.listen(8090);
httpServer.listen(3030);
// app.listen(8090, () => console.log('Server running'));