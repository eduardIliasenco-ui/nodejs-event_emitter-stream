const fs = require('fs');

const hello = fs.createReadStream('../EventEmitter/hello.txt');

hello.on('readable', () => {
    console.log(`readable: ${hello.read()}`);
});

hello.on('end', () => {
    console.log('end');
});