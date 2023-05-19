const express   = require('express');
const http      = require('http');
const socketio  = require('socket.io');
const Sockets   = require('./sockets');
const cors      = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Http Server - Representa un Servidor en tiempo real
        this.server = http.createServer(this.app);
        //Configuraciones de Sockets
        this.io = socketio(this.server, {/* Configurations */});
        // Inicializamos el servidor de socket
        this.sockets = new Sockets(this.io);
    }

    middlewares() {
        // Este metodo tendra la responsabilidad de inicializar los middlewares de la aplicacion

        // Habilitamos la comunicacion entre servidores
        this.app.use(cors());

        // Definimos las rutas http para la comunicacion con el servidor por medio de la arquitectura Rest
        this.app.get("/ultimos", (_req, res) => {
            res.json({
                ok: true,
                data: this.sockets.ticketList.lastPackTickets,
            });
        })
    }

    execute() {
        // Inicializar Middlewares
        this.middlewares();

        // Este metodo va a tener la responsabilidad unica de ejecutar la aplicacion
        this.server.listen(this.port, () => {
            console.log(`Conectado, Server Running on ${this.port}`);
        })
    }


}

module.exports = Server;