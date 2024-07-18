class EventEmitter {
  private events: { [eventName: string]: Array<(...args: any[]) => void> };
  private state: any;

  constructor() {
    this.events = {};
    this.state = {};
  }

  // Método para suscribirse a eventos
  on(eventName: string, listener: (...args: any[]) => void): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  // Método para emitir eventos
  emit(eventName: string, ...args: any[]): void {
    if (this.events[eventName]) {
      this.events[eventName].forEach(listener => {
        try {
          listener(...args);
        } catch (error) {
          console.error(`Error en listener de ${eventName}:`, error);
        }
      });
    }
  }

  // Método para agregar un listener para eventos basados en patrones
  onPattern(pattern: RegExp, listener: (eventName: string, ...args: any[]) => void): void {
    this.on('any', (eventName, ...args) => {
      if (pattern.test(eventName)) {
        listener(eventName, ...args);
      }
    });
  }

  // Método para suscribirse a cambios de estado
  onStateChange(stateChangeHandler: (newState: any) => void): void {
    this.on('stateChange', stateChangeHandler);
  }

  // Método para emitir cambios de estado
  emitStateChange(newState: any): void {
    this.state = { ...this.state, ...newState };
    this.emit('stateChange', this.state);
  }
}

// Crear una instancia de EventEmitter
const eventEmitter = new EventEmitter();

// Funciones de ejemplo para manejar eventos
function accion1(firstargument: string) {
  setTimeout(() => {
    console.log(`accion 1 recibió el evento, espero 3 seg y envió este parámetro "${firstargument}"`);
  }, 3000);
}

function accion2(firstargument: string) {
  setTimeout(() => {
    console.log(`accion 2 recibió el evento, espero 0.1 seg y envió este parámetro "${firstargument}"`);
  }, 100);
}

function errorHandler(error: Error) {
  console.error('Error en el procesamiento del evento:', error.message);
}

// Suscribir funciones a eventos
eventEmitter.on('Evento', accion1);
eventEmitter.on('Evento', errorHandler); // Manejo de errores
eventEmitter.on('Evento2', accion2);

// Emitir eventos con argumentos
eventEmitter.emit('Evento', "ejemplo de argumento para 'Evento'");
eventEmitter.emit('Evento2', "ejemplo de argumento para 'Evento2'");

// Suscripción a eventos basados en patrones
eventEmitter.onPattern(/Evento[0-9]+/, (eventName, message) => {
  console.log(`Listener para eventos con patrón: ${eventName}, mensaje: ${message}`);
});

// Emitir cambios de estado
eventEmitter.onStateChange((newState) => {
  console.log('Nuevo estado:', newState);
});

eventEmitter.emitStateChange({ estado: 'actualizado' });

// Ejemplo adicional de asincronía y manejo de errores
function accion3(firstargument: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstargument === 'error') {
        reject(new Error('Ocurrió un error en accion3'));
      } else {
        resolve(`accion 3 recibió el evento con parámetro "${firstargument}"`);
      }
    }, 2000);
  });
}

eventEmitter.on('Evento3', async (param) => {
  try {
    const result = await accion3(param);
    console.log(result);
  } catch (error) {
    console.error('Error en accion3:', error.message);
  }
});

eventEmitter.emit('Evento3', 'dato'); // Ejemplo sin error
eventEmitter.emit('Evento3', 'error'); // Ejemplo con error
