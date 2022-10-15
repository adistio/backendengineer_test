import express from "express";
import home from "./routes/home.js";
import activitygroups from "./routes/activity-groups.js";
import todoitems from "./routes/todo-items.js";
import cors from "cors";
import timeout from 'connect-timeout';
 
const app = express();
app.use(timeout('400s'))
app.use(haltOnTimedout)
 
app.use(cors());
app.use(express.json());
app.use('/', home);
app.use('/activity-groups', activitygroups);
app.use('/todo-items', todoitems);
 
function haltOnTimedout (req, res, next) {
    if (!req.timedout) next()
}
  
app.listen(8090, () => console.log('Server running'));