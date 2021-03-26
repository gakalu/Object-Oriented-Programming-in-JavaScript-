"use strict"
//Section Number
function readNumber(arr) {
  for(let i=0;i<arr.length;i++){
    if (parseFloat(arr[i])===Number(arr[i])){
    return +arr[i];
  }
}
}
//Section String
function UpperCase(str){
    return str[0].toUpperCase()+str.substring(1,str.length);
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
//////////////////////////////////////////////////////
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  ///////////////////////////////////////////////////
  function Truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
console.log(Truncate("We are doing JS string exercises.",19));
console.log(Truncate("We are doing JS string exercises."));
////////////////////////////////////////////////////////////////////
function extractCurrencyValue(str) {
    return +str.slice(1);
  }
//Section Arrays
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
///////////////////////////////////////////////////////////////////////////
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  //Section Array Method
  function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }
