/* eslint-disable no-console */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = 3000

app.get('/', function(req, res){
  res.send('Hello World!');
});

io.on('connection', (client) => {
	console.log(`Client ${client.id} connected`)
  
  client.on('chat', (msg, username) => {
    console.log(`--> `, username, ': ', msg);
  });

  client.on('disconnect', () => {
    console.log(`Client ${client.id} disconnected`);
  });

  client.on('error', (err) => {
    console.log(`Err recieved from Client: ${client.id}\n err`)
  })
})

http.listen(port, err => {
  if (err) { throw err }
  console.log(`listening on port ${port}`)
})