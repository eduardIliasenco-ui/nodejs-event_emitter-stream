const { PassThrough, Writable } = require('stream');
const pass = new PassThrough();
const writable = new Writable();

console.warn(pass.readableFlowing);

pass.pipe(writable);
pass.unpipe(writable);

console.warn(pass.readableFlowing);

pass.on('data', (chunk) => { console.log(chunk.toString()); });

pass.write('ok');
pass.resume();