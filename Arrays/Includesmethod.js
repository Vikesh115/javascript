/*
    includes() method
*/

let avaSizes = ['s', 'm', 'l', 'xl'];

let readlinesync = require('readline-sync');
let userSize = readlinesync.question("which size of shirt do you want s/m/l/xl/xxl - ");

let isAvlSize = avaSizes.includes(userSize)

if(isAvlSize){
    console.log("size is availble.");
}else{
    console.log("size is unavailble.");
}