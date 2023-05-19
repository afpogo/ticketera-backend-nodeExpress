const Ticket = require("./Ticket");
// Representa la entidad de Ticket
class TicketList {

  constructor() {
    this.lastNumber = 0;
    this.ticketsPendientes = [];
    this.ticketsAsignados = [];
  }

  get nextNumber() {
    return ++this.lastNumber;
  }

  obtenerUltimosElementos = (array, cantidad) => {
    // Verificar si la cantidad solicitada es mayor que la longitud del array
    // console.log([...array]);
    const cantidadElementos = Math.min(cantidad, array.length);
    // Obtener los últimos elementos del array
    const ultimosElementos = array.slice(0, cantidadElementos);
    return ultimosElementos;
  };

  // Aca tenemos que traer y mostrar los 3 que se veran en las tarjetas y 10 elementos que van a ir en el historial
  get lastPackTickets() {
    const ultimos13 = this.obtenerUltimosElementos(this.ticketsAsignados, 13);
    // console.log(this.obtenerUltimosElementos(this.ticketsAsignados, 13));
    return ultimos13;
  }


  // Crear Nuevo Ticke, el ejemplo crea una instancia de Ticket()
  createTicket = () => {
    const ticket = new Ticket(this.nextNumber) // Creamos el ticket pasandole la funcion nextNumber que calcula el siguiente numero
    this.ticketsPendientes.push(ticket); // Agregamos el ticket en la lista de pendientes
    return ticket;
  }

  // Assignar Ticket a alguien
  asignarTicket(agente, escritorio) {
    if(this.ticketsPendientes.length === 0) return null
    const siguienteTicketAsignado = this.ticketsPendientes.shift();
    siguienteTicketAsignado.agente = agente;
    siguienteTicketAsignado.escritorio = escritorio;
    this.ticketsAsignados.unshift(siguienteTicketAsignado);
    // console.log({siguienteTicketAsignado});
    return siguienteTicketAsignado;
  }

}

module.exports = TicketList;
