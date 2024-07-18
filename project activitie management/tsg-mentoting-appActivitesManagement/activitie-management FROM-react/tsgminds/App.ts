class EventEmitter {
  private events: { [eventName: string]: Array<(...args: any[]) => void> };
  private state: any;

  constructor() {
    this.events = {};
    this.state = {};
  }

  on(eventName: string, listener: (...args: any[]) => void): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  emit(eventName: string, ...args: any[]): void {
    if (this.events[eventName]) {
      this.events[eventName].forEach(listener => {
        listener(...args);
      });
    }
  }

  onPattern(pattern: RegExp, listener: (eventName: string, ...args: any[]) => void): void {
    this.on('any', (eventName, ...args) => {
      if (pattern.test(eventName)) {
        listener(eventName, ...args);
      }
    });
  }

  onStateChange(stateChangeHandler: (newState: any) => void): void {
    this.on('stateChange', stateChangeHandler);
  }

  emitStateChange(newState: any): void {
    this.state = { ...this.state, ...newState };
    this.emit('stateChange', this.state);
  }
}

// Ejemplo de uso
const eventEmitter = new EventEmitter();

function accion1(firstargument: string) {
  setTimeout(() => {
    console.log(`accion 1 recibió el evento, espero 3 seg y envió este parámetro ${firstargument}`);
  }, 3000);
}

function accion2(firstargument: string) {
  setTimeout(() => {
    console.log(`accion 2 recibió el evento, espero 0.1 seg y envió este parámetro ${firstargument}`);
  }, 100);
}

eventEmitter.on('Evento', accion1);
// eventEmitter.on('Evento', accion2); // Comentado para prueba de funcionamiento
eventEmitter.on('Evento2', accion2);

eventEmitter.emit('Evento', "ej 1j");
eventEmitter.emit('Evento2', "ej 2k");

// Ejemplo de suscripción a eventos basados en patrones
eventEmitter.onPattern(/Evento[0-9]+/, (eventName, message) => {
  console.log(`Listener para eventos con patrón: ${eventName}, mensaje: ${message}`);
});

// Ejemplo de suscripción a cambios de estado
eventEmitter.onStateChange((newState) => {
  console.log('Nuevo estado:', newState);
});

// Ejemplo de emisión de cambios de estado
eventEmitter.emitStateChange({ estado: 'actualizado' });

















































