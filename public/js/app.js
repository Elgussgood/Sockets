const express = require('express');
const { emit } = require('process');
var app = require('express')();
var server = require('http').Server(app)
var io = require('socket.io')(server);
app.use(express.static('public'))
server.listen(7070,()=>console.log('Servidor iniciado en 7070'))

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
io.on('connection',(req,res)=>{
console.log('socket conectado', socket.id)
io.emit('conectado',{texto: 'nuevo socket conectado'+ socket.id +'<br>'})

socket.on('disconect',()=>{
    console.log('socket desconectado', socket.id);
    io.emit('desconectado', {texto: 'Socket desconetado: '+socket.id})

})
})
