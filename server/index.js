/* eslint-disable no-console */
const server = require('http').createServer();
const io = require('socket.io')(server);

const port = 3001;

io.on('connection', (client) => {
  client.on('event', (data) => { console.log(' --> ', data); });
  client.on('disconnect', () => { console.log('`Reach Client Disconnected'); });
});


function onListening() {
  const addr = server.address();
  console.log(`Reach - Chat Server listening on port: ${addr.port}`);
}

server.listen(port);
server.on('listening', onListening);
