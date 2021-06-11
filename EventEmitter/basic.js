const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('an event occurred!');
});

myEmitter.once('once', () => {
    console.log('an event occurred once!');
});

myEmitter.emit('event');

myEmitter.emit('once');
myEmitter.emit('once');
myEmitter.emit('once');
myEmitter.emit('once');