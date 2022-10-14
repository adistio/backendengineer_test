import express from "express";
// import db from "./config/database.js";
import home from "./routes/home.js";
import activitygroups from "./routes/activity-groups.js";
import cors from "cors";
 

const app = express();
//cek db mongo
// db.on('error', (error) => logError(error));
// db.once('open', () => console.log('Database Connected'));
 
app.use(cors());
app.use(express.json());
app.use('/', home);
app.use('/activity-groups', activitygroups);
 

app.listen(3000, () => console.log('Server running at port 3000'));