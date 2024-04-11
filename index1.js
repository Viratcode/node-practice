// const fs=require('fs');
// const input=process.argv
// //fs.writeFileSync(input[2],input[3]);
// //deletion and addition of new file
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input");
// }

const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'files');
for(i=0;i<5;i++){
    fs.writeFileSync(dirpath+'myfile'+i+'.txt','simple text file');
}
fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is "+item);
    })
})