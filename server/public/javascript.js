const socket = io.connect('http://127.0.0.1:3000/');

$(document).ready(function () {
  $('form').submit((e) => {
    e.preventDefault();
    socket.emit('chat message', $('#m').val(), { user: 'Reach Admin' });
    $('#m').val('');
    return false;
  });

  socket.on('chat message', function(msg, props) {
    $('#messages').append($('<li>').text(`${props.user}: ${msg}`))
  })
});