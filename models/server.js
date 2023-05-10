const express   = require('express');
const http      = require('http');
const socketio  = require('socket.io');
const path      = require('path');
const Sockets   = require('./sockets');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Http Server - Representa un Servidor en tiempo real
        this.server = http.createServer(this.app);
        //Configuraciones de Sockets
        this.io = socketio(this.server, {/* Configurations */});
    }

    middlewares() {
        // Este metodo tendra la responsabilidad de inicializar los middlewares de la aplicacion
        // Desplegar el directorio publico
        this.app.use('/minichat', express.static(path.resolve(__dirname, '../public')));
    }

    socketsConfig() {
        new Sockets(this.io);
    }

    execute() {
        // Inicializar Middlewares
        this.middlewares();

        this.socketsConfig();
        // Este metodo va a tener la responsabilidad unica de ejecutar la aplicacion
        this.server.listen(this.port, () => {
            console.log(`Conectado, Server Running on ${this.port}`);
        })
    }


}

module.exports = Server;