import express from 'express';
import udp from 'dgram';
const app = express();
const port = 2024 || process.env.CFS_EXPRESS_PORT;

// UDP server for connection request

// creating a udp server
var server = udp.createSocket('udp4');

// emits when any error occurs
server.on('error', (err) => {
    console.log('Error: ' + err);
    server.close();
});

// emits on new datagram msg
server.on('message', function(msg, info){
  console.log('Data received from client: ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);

  // sending msg
  server.send(msg, info.port, 'localhost', function(error) {
    if(error){
      client.close();
    } else{
      console.log('Data sent !!!');
    }
  })
})

// emits when socker it ready and listening for datagram msgs
server.on('listening', function(){
  var address = server.address();
  var port = address.port;
  var family = address.family;
  var ipaddr = address.address;
  console.log('Server is listening at port' + port);
  console.log('Server ip :' + ipaddr);
  console.log('Server is IP4/IP6 : ' + family);
})

// emits after the socket is closed using socket.close();
server.on('close', function(){
  console.log('Socket is closed !');
})

server.bind(2222);

setTimeout(function(){
  server.close();
}, 8000);

// udp client

var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

// buffer msg
var data = Buffer.from('amreshsinha');

client.on('message', function(msg, info){
  console.log('Data received from server: ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);
})

// sending msg
client.send(data, 2222, 'localhost', function(error){
  if(error){
    client.close();
  } else{
    console.log('Data sent !!!');
  }
})

var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');

// sending multiple msg
client.send([data1, data2], 2222, 'localhost', function(error){
  if(error){
    client.close();
  } else{
    console.log('Data sent !!!');
  }
})

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
