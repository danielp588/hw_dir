const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');

const Create = async (n, str) =>{
    try{
        await fsPromises.writeFile(path.join(__dirname,'files', 'file'+n+'.txt'), str);
    }catch(err){
        console.error(err);
    }
}

const Read = async (n) => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files', 'file'+n+'.txt'));
        return data.toString();
    }catch(err){
        console.error(err);
    }
}

const GetRandNumber = () => {
    let num = Math.floor(Math.random() * 6)
    return num;
}

async function ConcatFiles() {
    try {
        //delete file
        if (existsSync(path.join(__dirname, 'files', 'concatTextFile.txt')))
            await unlink(path.join(__dirname, 'files', 'concatTextFile.txt'));

        //get random number between 1 and 5
        let n = GetRandNumber();

        //read files 
        for (let i = 1; i <= n; i++) {
            let text = await Read(i);
            await appendFile(path.join(__dirname, 'files', 'stringtxt.txt'), `${text}\n`);
        }

        //change file name
        await rename(path.join(__dirname, 'files', 'stringtxt.txt'), path.join(__dirname, 'files', 'concatTextFile.txt'));
        console.log(`created concatTextFile until n = ${n}`)

    } catch (err) {
        console.error(err);
    }
}

const PrintFiles = async () => {
    const data = await fsPromises.readdir(path.join(__dirname,'files'));
    for(let i = 0; i < data.length; i++){
        const currData = await fsPromises.readFile(path.join(__dirname, 'files', `${data[i].toString()}`));
        console.log(currData.toString());
        console.log("***********************");
    }

}



module.exports = {PrintFiles,GetRandNumber, Create, Read, ConcatFiles};