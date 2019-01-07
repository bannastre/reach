/* eslint-disable no-console */
require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT

app.use(express.static('public'))

app.get('/', function(req, res){
  try {
    res.sendFile(`${__dirname}/index.html`);
  } catch (err) {
		console.log("​}catch -> err", err)
    res.send(err)
  }
});

io.on('connection', (client) => {
  console.log(`Client ${client.id} connected`)
  
  client.on('chat message', (msg, props) => {
    io.emit('chat message', msg, { user: props.user });
  });

  client.on('disconnect', () => {
    console.log(`Client ${client.id} disconnected`);
  });

  client.on('error', (err) => {
    console.log(`Err recieved from Client: ${client.id}\n err`)
  })
});

http.listen(port, err => {
  if (err) { throw err }
  console.log(`listening on port ${port}`)
})