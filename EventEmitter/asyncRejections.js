const EventEmitter = require('events');

const myEmitter = new EventEmitter();
// const myEmitter = new EventEmitter({ captureRejections: true });

myEmitter.on('someEvent', async () => {
    throw new Error('kaboom');
});

myEmitter.on('error', () => {
    console.warn('There is an error.');
});

myEmitter.emit('someEvent');
