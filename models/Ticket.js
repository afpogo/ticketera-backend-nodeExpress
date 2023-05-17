const { v4:uuid } = require('uuid');

class Ticket {
    // En esta implementacion siempre vamos a pedir que ingresemos el numero para asi calcular el siguiente numero
    constructor(number) {
        this.id = uuid();
        // Estas seran las instancias de mi ticket, cada numero incremental reflejara el nuevo ticket
        this.number = number;
        this.escritorio = null;
        this.agente = null;
    }
}

module.exports = Ticket