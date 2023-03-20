const fsPromises = require('fs').promises;
const path = require('path');
const {Create, Read, ConcatFiles} = require('./functions');




const Main = ()=>{
    Create(3,"blablablablaaaaa")
    Create(2,"baskfbsfbusyfaa")
    Create(4,"222222222222222")
    ConcatFiles();
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