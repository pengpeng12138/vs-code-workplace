const fs=require('fs');
var readStream=fs.createReadStream('./data/input.txt');

readStream.on()

var count=0;
var str='';
readStream.on('data',(data)=>{
    str+=data;
    count++;
})

readStream.on('end',()=>{
    console.log(str);
    console.log(count)
})

readStream.on('error',(err)=>{
    console.log(err);   
})