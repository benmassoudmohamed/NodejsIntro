const numbers = process.argv.slice(2);

const result = numbers.reduce((acc,num)=>{
    return acc+parseInt(num);

}, 0);
console.log (result);