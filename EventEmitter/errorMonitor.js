const { EventEmitter, errorMonitor } = require('events');

const myEmitter = new EventEmitter();

// myEmitter.on(errorMonitor, (err) => {
//     console.log(err);
// });

// myEmitter.on('error', (err) => {
//     console.log(err);
// });

myEmitter.emit('error', new Error('Something went wrong!'));