const { Socket } = require('engine.io');

// node server which will handle socket io connections
const io = require('socket.io')(8000)

const users = {};

io.on('connections', Socket =>{
    Socket.on('new-user-joined', name =>{
        console.log("New User", name)
        user[Socket.id] = name;
        Socket.broadcast.emit('user-joined', name);
    });

    Socket.on('send', message =>{
        Socket.broadcast.emit('receive', {message: message, name: users[Socket.id]})
    }
});  