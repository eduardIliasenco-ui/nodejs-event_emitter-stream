const fs = require('fs');
const { Readable } = require('stream');

class MyReadable extends Readable {
    constructor(options) {
        super(options);
    }

    _read() {
        fs.readFile('../EventEmitter/hello.txt', (err, data) => {
           if (err) {
               this.emit('error', err);
           } else {
               this.push(data);
               this.emit('end');
           }
        });
    }
}

const readable = new MyReadable();

const writable = fs.createWriteStream('file.txt');

readable.pipe(writable);