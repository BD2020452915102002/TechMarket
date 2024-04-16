const serverStore = require("../utils/serverStore");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails._id,
  });
};

module.exports = newConnectionHandler;
