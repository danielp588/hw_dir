const fsPromises = require('fs').promises;
const path = require('path');
const functions = require('./functions');

const {eventLog} = require('./logEvents');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();


const Main = ()=>{
    myEmitter.on('readFile',() => {eventLog()});
    myEmitter.on('endProgram', () => {functions.PrintFiles()})

    myEmitter.emit('readFile', 'Hello from index emitter');
    myEmitter.emit('endProgram');
}

Main();






// fs.readFile(path.join(__dirname, 'files', 'test.txt'), (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

// fs.writeFile(path.join(__dirname, 'files', 'written.txt'),'written from index' ,(err) => {
//     if (err) throw err;
//     console.log('written')
// })

// fs.appendFile(path.join(__dirname, 'files', 'written.txt'),' written from index2' ,(err) => {
//     if (err) throw err;
//     console.log('appended')
// })