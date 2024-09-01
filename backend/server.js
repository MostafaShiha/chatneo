const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./config/db');
const chatRoutes = require('./routes/chat');
const profileRoutes = require('./routes/profile');
const authConfig = require('./config/auth');

const app = express();
const port = 5000;

connectDB();

app.use(express.json());
app.use('/api/chat', chatRoutes);
app.use('/api/profile', profileRoutes);

const server = http.createServer(app);
const io = socketIo(server);

require('./socket/socket')(io);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
