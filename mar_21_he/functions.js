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

const ConcatFiles = async () => {
    
    //delete file if exists
    try { await fsPromises.unlink(path.join(__dirname,'files','concatTextFile.txt')); }
    catch(err) { console.log("File doesnt exist"); }

    let rnd = GetRandNumber();

    await fsPromises.writeFile(path.join(__dirname,'files', 'stringtxt.txt'),'hey');
    const newData = await fsPromises.readFile(path.join(__dirname,'files', 'stringtxt.txt'));
    console.log(newData.toString())

    try{
        const delayed = async () => {
            fs.readdir((path.join(__dirname,'files')), (err,files)=>{
                if(err){
                    console.warn(err);
                }
                else{
                    console.log("random ->", rnd)
                    for(let i = 0; i < files.length; i++){
                        if(files[i].includes(rnd)){ break; }//break out of loop when found file[rnd].txt

                        fs.readFile(path.join(__dirname,'files',files[i]), (err,data)=>{
                            if (err) throw err;
                            fs.appendFile(path.join(__dirname,'files','stringtxt.txt'),data.toString(),(err)=>{
                                if (err) throw err;
                            })
                        })   
                    }
                }
            })
        }
        await delayed();
        //tried making delated func await, yet I reach this line VVVVVV before the code above
        console.warn("end reached")
    }catch(err){
        console.error(err);
    }
    
}



module.exports = {Create, Read, ConcatFiles};