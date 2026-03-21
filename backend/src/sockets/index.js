const { Server } = require('socket.io');

module.exports = function setupSocketServer(server) {
  const io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN?.split(',') || '*',
      methods: ['GET', 'POST']
    }
  });

  const chat = io.of('/chat');
  const rideTracking = io.of('/ride-tracking');
  const notifications = io.of('/notifications');

  chat.on('connection', (socket) => {
    socket.on('join-chat', (chatId) => socket.join(chatId));
    socket.on('typing', ({ chatId, userId }) => chat.to(chatId).emit('typing', { userId }));
    socket.on('send-message', ({ chatId, message }) => {
      chat.to(chatId).emit('new-message', message);
    });
  });

  rideTracking.on('connection', (socket) => {
    socket.on('join-ride', (rideId) => socket.join(rideId));
    socket.on('location-update', ({ rideId, position }) => {
      rideTracking.to(rideId).emit('ride-location', position);
    });
  });

  notifications.on('connection', (socket) => {
    socket.on('join-user-room', (userId) => socket.join(`user:${userId}`));
  });

  return io;
};
