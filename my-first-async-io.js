const fs=require('fs');
fs.readFile(process.argv[2],'utf8',(err,String)=>{
    if (err) return console.error(err);
    const result=String.split('\n').length-1;
    console.log(result)
});


