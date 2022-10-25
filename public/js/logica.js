//crear instancia en socketid, recibe como parametro el url del servidor
var socket = io.connect('http://localhost:7070')
var notifi =[]
//escucha el evento 
socket.on('conectado',(data)=>{
    //notificar al usuario
    console.log(data);
    notifi .push(data)
    document.querySelector('#notificaiones').innerHTML=JSON.stringify(notifi)
})

socket.on('desconectado',(data)=>{
    //notificar al usuario
    console.log(data);
    notifi.push(data)
    document.querySelector('#notificaiones').innerHTML=JSON.stringify(notifi)
})
