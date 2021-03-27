"use strict"
function decreasingOrderSort(arr0){
return arr0.sort((a, b) => b - a);
}
///////////////////////////////////////////////////////////////////////////////////////
function copySorted(arr11) {
    return arr11.slice().sort();
  }
  //////////////////////////////////////////////////////////////////////////////////////////
  function sortByAge(arr1) {
    arr1.sort((a, b) => a.age - b.age);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr1 = [ pete, john, mary ];
  
  sortByAge(arr1);
////////////////////////////////////////////////////////////////////////////////////////////
function filterRange(arr2, a, b) {
    // added brackets around the expression for better readability
    return arr2.filter(item => (a <= item && item <= b));
  }

  //////////////////////////////////////////////////////////////////////////////
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  ///////////////////////////////////////////////////////////////////////////////
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  ///////////////////////////////////////////////////////////////////////////////
  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  /////////////////////////////////////////////////////////////////////////////
  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
/////////////////////////////////////////////////////////////////////////////////////
function unique(arr3) {
    let result = [];
  
    for (let str of arr3) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
//////////////////////////////////////////////////////////////////////////////////
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }