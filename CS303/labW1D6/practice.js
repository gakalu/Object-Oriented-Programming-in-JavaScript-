"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests
let arr;
let peopleArray;  
function doubleAges(arr){
return arr.map(num => num * 2);
}
function filterEven(arr){
return arr.filter(num =>num%2===0);
}
function filterOver10(peopleArray) {
return peopleArray.filter(item=>item.age>10);
}
function findEvenNum(arr){
console.log(arr.filter(num =>num%2===0));
}
findEvenNum(arr);
function findEvenAge(arr){

}

function includesEvenNum(arr){
 
}

function includesEvenAge(arr){

}