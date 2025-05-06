const readlinesync = require('readline-sync')

const number = readlinesync.question('Enter a number : ');

let remainder = number % 2;

if(remainder === 0){
    console.log(`${number} is divisble by 2.`);

    if(number % 4 === 0){
        console.log(`${number} is divisble by 4.`);
    }else{
        console.log(`${number} is not divisble by 4.`);
    }
}else{
    console.log(`${number} is not divisble by 2.`);
}