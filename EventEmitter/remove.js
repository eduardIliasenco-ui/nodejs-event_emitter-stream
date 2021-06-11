const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const callback = () => {
    console.log('event!');
};

myEmitter.on('event', callback);

myEmitter.removeListener('event', callback); // off

myEmitter.emit('event');
