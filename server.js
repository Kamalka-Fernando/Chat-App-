const io = require('socket.io')(3000)

io.on('connection', socket =>{

    socket.on('new-user', socket => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name )
    })
    socket.on('disconnected', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id] )
        delete users[socket.id]
    })
    
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', {message: message, name:users[socket.id] })
    })

})
