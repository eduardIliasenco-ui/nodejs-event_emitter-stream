const fs = require('fs');
const EventEmitter = require('events');

class ReadFile extends EventEmitter {
    read(filename) {
        this.emit('begin');
        console.time('read');
        fs.readFile(filename, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }

            this.emit('data', data);
            console.timeEnd('read');
            this.emit('end');
        });
    }
}

const readFile = new ReadFile();

readFile.on('begin', () => console.log('About to read'));

readFile.on('data', (chunk) => console.log(chunk.toString()));

readFile.on('end', () => console.log('Done with reading'));

readFile.read('./hello.txt');