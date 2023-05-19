// const Ticket = require("./Ticket");
const TicketList = require("./TicketList");
class Sockets {
  constructor(io) {
    this.io = io;
    // Creamos las instancia de ticketList pero no es el mejor lugar para hacerlo... Future-Refactor
    this.ticketList = new TicketList();
    this.conection();
  }

  conection() {
    // Esta es la conexion del Socket Server - Podemos seguir separando responsabilidades
    this.io.on("connection", (socket) => {
    //   console.log("Cliente Conectado");
      socket.on("CreateNewTicket", (payload, cb) => {
        const { autenticacion } = payload;
        // console.log(`message: ${autenticacion}`);
        //Antes creamos la instancia del ticketList, ahora obtenemos un nuevo ticket
        const nuevoTicket = this.ticketList.createTicket();
        // console.log(nuevoTicket);
        cb(nuevoTicket);
        // this.io.emit("NuevoTicket", nuevoTicket);
      });

      socket.on("ticketAssign", ({agente, escritorio}, cb) =>{
        const currentTicket = this.ticketList.asignarTicket(agente, escritorio);
        if(currentTicket !== null) cb(currentTicket);

        // Notificamos que asignamos un nuevo ticket a la cola
        this.io.emit('update-queue_ticket-asignado', this.ticketList.lastPackTickets);
      })
    });
  }
}

module.exports = Sockets;
