class Sockets {
    constructor (io) {
        this.io = io;
        this.conection();
    }

    conection() {
        // Esta es la conexion del Socket Server
        this.io.on('connection', ( socket ) => {
            socket.on('emit-msn', (data) => {
                console.log(data);
                this.io.emit('emit-server-msn', data);
            })
        })
    }


}

module.exports = Sockets;