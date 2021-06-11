const { Readable } = require('stream');

// const newReadable = new Readable(options);

// class newReadable extends Readable {
//     constructor(options) {
//         super(options);
//     }
// }

class Counter extends Readable {
    constructor(opt) {
        super(opt);

        this._max = 1000;
        this._index = 0;
    }

    _read(size) {
        console.warn(size);
        this._index += 1;

        if (this._index > this._max) {
            this.push(null);
        } else {
            const buf = Buffer.from(`${this._index}`, 'utf8');

            console.log(`Added: ${this._index}. Could be added? `, this.push(buf));
        }
    }
}

const counter = new Counter({ highWaterMark: 2 });

//
// counter.on('data', chunk => {
//     console.warn('Received: ', chunk.toString());
// });