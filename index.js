const Server = require('./models/server');
// Definimos las variables de entorno a nivel global de mi applicacion
require('dotenv').config();

const  server = new Server();

server.execute();

// Servidor de Express
// const express = require('express');
// const app = express();

// Servidor de Sockets
// const server = require('http').createServer(app);

// Configuracion de socket server
// const io = require('socket.io')(server);
// const PORT = 3000;

// Desplegar el directorio publico
// app.use('/minichat', express.static(`${__dirname}/public`));

// Esta es la conexion del Socket Server
// io.on('connection', ( socket ) => {
    // ** Ejemplo de emision de mensajes desde el servidor hacia el cliente
    // socket.emit('mensaje-server', {
    //     msg: 'Bienvenidos al Minichat',
    //     notificacion: 'Debes iniciar sesion',
    //     date: new Date()
    // });
    // ***
    // ** Ejemplo de escucha de mensajes que se envian desde el cliente
    // socket.on('mensaje-cliente', (data) => {
    //     console.log(data);
    // })
    // ***
//     socket.on('emit-msn', (data) => {
//         console.log(data);
//         io.emit('emit-server-msn', data);
//     })
// })

// El puerto de conexion del servidor express
// server.listen(PORT, () => {
//     console.log(`Conectado, Server Running on ${PORT}`);
// })