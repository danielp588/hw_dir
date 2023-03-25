const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');
const {GetRandNumber, Read} = require('./functions');

const eventLog = async() => {
    try{
       const rnd = await GetRandNumber();
       console.log(Read(rnd));
    } catch (err){
        console.error(err);
    }
}


module.exports = {eventLog};


//Dave's video stuff
/* if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);

  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${msg}`;
*/