import express from "express";
import home from "./routes/home.js";
import activitygroups from "./routes/activity-groups.js";
import todoitems from "./routes/todo-items.js";
import cors from "cors";
import http from "http";

const app = express();
 
app.use(cors());
app.use(express.json());

app.use('/', home);
app.use('/activity-groups', activitygroups);
app.use('/todo-items', todoitems);
 
var httpServer = http.createServer((request, response) => {
    request.on('error', (error) => {
        console.error('> THERE WAS AN ERROR', error)
    })

    request.on('close', () => {
        if(request.readableEnded) {
          console.log('> REQUEST GOT CLOSED')
          response.end('CLOSED');
        } else {
          console.log('> REQUEST GOT ABORTED')
        }
    })

    request.resume(); // CONSUME ALL DATA
},app);
httpServer.on('listening', () => console.log('HTTP-Server is running.'));
httpServer.listen(8090, '127.0.0.1');
// httpServer.listen(3030, '127.0.0.1');
// httpServer.listen(3030);
// app.listen(8090, () => console.log('Server running'));