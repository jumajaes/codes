
class EventEmitter {

  events;

  constructor() {
    this.events = {}; 
  }

 
  on(eventName, action) {
    if (!this.events[eventName]) {
      this.events[eventName] = []; 
    }
    this.events[eventName].push(action); 
  }


  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(action => {
        action(...args);
      });
    }
  }
}


const eventEmitter = new EventEmitter();

function accion1(firstargument) {

  setTimeout(() => {
    console.log( `accion 1 recibió el evento, espero 3 seg y envió este parametro ${firstargument}`);
  }, 3000);
 
}

function accion2(firstargument) {

  setTimeout(() => {
    console.log(`accion 2 recibió el evento, espero 0.1 seg y envió este parametro ${firstargument}`);
  }, 100);
  
}

eventEmitter.on('Evento', accion1);
//eventEmitter.on('Evento', accion2);
eventEmitter.on('Evento2', accion2);


eventEmitter.emit('Evento', "ej 1j");
eventEmitter.emit('Evento2', "ej 2k");
