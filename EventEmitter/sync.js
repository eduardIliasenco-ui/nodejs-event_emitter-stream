const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
    console.log('one!');
});

myEmitter.on('event', () => {
    console.log('two!');
});

myEmitter.on('event', () => {
    console.log('three!');
});

myEmitter.on('event', () => {
    console.log('four!');
});

myEmitter.prependListener('event', () => {
    console.log('Very first one');
});

myEmitter.emit('event');