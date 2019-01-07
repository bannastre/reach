/* eslint-disable no-console */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs')

const port = 3000

app.get('/', function(req, res){
  try {
    res.render(`${__dirname}/index.ejs`);
  } catch (err) {
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