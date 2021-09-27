const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const users = []

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', (msg,nick) => {
        console.log('user disconnected');
        console.log(nick + 'teste')
        io.emit('msg-sair', msg);
      });
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg,nick) => {
      console.log(nick)
      
      io.emit('chat message', msg);
    });
  });

  io.on('connection', (socket) => {
    socket.on('nickname', (nickname) => {
      io.emit('nickname', nickname);
      users.push(nickname)
      console.log(nickname)
    });
  });

  io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

server.listen(3000, () => {
  console.log('listening on *:3000');
});