const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const socketio = require("socket.io");

const app = express();
const port = process.env.PORT || 3002;
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => res.send("Hello World"));
require("./Config/config");
// var routes = require("../Routes/routes");
var routes = require("../server/Routes/routes");
routes(app);

const io=socketIO(server);

io.on("connection",(socket)=>{
    console.log("New Connection");

    socket.on('joined',({user})=>{
          users[socket.id]=user;
          console.log(`${user} has joined `);
          socket.broadcast.emit('userJoined',{user:"Admin",message:` ${users[socket.id]} has joined`});
          socket.emit('welcome',{user:"Admin",message:`Welcome to the chat,${users[socket.id]} `})
    })

    socket.on('message',({message,id})=>{
        io.emit('sendMessage',{user:users[id],message,id});
    })

    socket.on('disconnect',()=>{
          socket.broadcast.emit('leave',{user:"Admin",message:`${users[socket.id]}  has left`});
        console.log(`user left`);
    })
});

app.listen(port, () =>
  console.log(`Node server running at http://localhost:${port}`)
);
app.use(cors());
// app.listen(port, () =>
//   console.log(`Node server running at http://localhost:${port}`)
// );
// app.use(cors());
