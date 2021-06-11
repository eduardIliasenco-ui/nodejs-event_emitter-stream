const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event', (one, two, ...allOther) => {
    console.log({ one, two });
    console.log({ allOther });
});

myEmitter.emit('event', 2, 4, { ok: 33 }, new Array(10).fill(null));