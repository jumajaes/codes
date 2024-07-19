
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

function accion1(args) {
  console.log( `start action1`, args.time);
  args.time = new Date().toISOString()
  setTimeout(() => {
    console.log( `accion 1 recibió el evento, espero 3 seg y envió este parametro ${args.message} a las ${args.time}`);
  }, 3000);
 
}

function accion2(args) {
  console.log( `start action2`, args);
  args.time = new Date().toISOString()
  setTimeout(() => {
    console.log(`accion 2 recibió el evento, espero 0.1 seg y envió este parametro  ${args.message} a las ${args.time}`);
  }, 100);
  
}

eventEmitter.on('Evento', accion1);
//eventEmitter.on('Evento', accion2);
eventEmitter.on('Evento2', accion2);


eventEmitter.emit('Evento', {message: "1j", time: ""});
eventEmitter.emit('Evento2', {message: "2k", time: "Date"});
