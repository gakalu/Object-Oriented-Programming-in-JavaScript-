//=============Does a function pickup latest changes?============================
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi();
/*The answer is: Pete.
A function gets outer variables as they are now, it uses the most recent values.
Old variable values are not saved anywhere. When a function wants a variable, 
it takes the current value from its own Lexical Environment or the outer one.*/
//==============Which variables are available?====================================
function makeWorker() {
    let name = "Pete";
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show?
  //The answer is: Pete.
  //=================Are counters independent?================================
  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // ?
  console.log( counter2() ); // ?
  /*The answer: 0,1.
Functions counter and counter2 are created by different invocations of makeCounter.
So they have independent outer Lexical Environments, each one has its own count.*/
//================Counter object==========================================
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
  
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  console.log( counter.up() ); // 1
  console.log( counter.up() ); // 2
  console.log( counter.down() ); // 1
  //==============Function in if==============================================
  let phrase = "Hello";

  if (true) {
    let user = "John";
  
    function sayHi() {
      console.log(`${phrase}, ${user}`);
    }
  }
  sayHi();
/*The result is an error.
The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside.*/
//==============Sum with closures==========================================================
function sum(a) {
    return function(b) {
      return a + b;
    };
  }
  console.log( sum(1)(2) ); // 3
  console.log( sum(5)(-1) ); // 4
//===============Is variable visible?========================================================
let x = 1;

function func() {
  console.log(x); // ?
  let x = 2;
}
func();
//The result is: error.
