const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const { v4: uuidv4 } = require('uuid');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.redirect(`/${uuidv4()}`)
});

app.get('/:chatRoomId', (req, res) => {
  res.render('chatRoom', { chatRoomId: req.params.chatRoomId })
});

io.on('connection', socket => {
  socket.on('join-room', (chatRoomId, userId) => {
    socket.join(chatRoomId);
    socket.to(chatRoomId).emit('user-connected', userId);

    socket.on('disconnect', () => {
      socket.to(chatRoomId).emit('user-disconnected', userId); ///////////
    });
  });
})

server.listen(3000);
