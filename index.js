var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var messages = {
  data: []
}
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/messages', function(req, res) {
  res.send(messages);
});

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);

    if (msg.trim() != "") {
      var d = new Date();
      d.setTime(d.getTime() - 21600000);
      var n = d.toLocaleTimeString();
      msg += " " + n;
      messages.data.push(msg);
    }



  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});
