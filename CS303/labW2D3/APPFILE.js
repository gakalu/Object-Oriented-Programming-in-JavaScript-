"use strict";
//To find the sum of all numbers till the given one
function sumTo(n) {
    if (n == 1) 
    return 1;
    return n + sumTo(n - 1);
  }
//Calculate the factorial of a number
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
// To calculate the Fibonacci numbers
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

// // Output a single-linked list
//   function printList(list) {
//     if(list.next===null){
//     return 0;
//     }else{
//     return printList(list.next); // do the same for the rest of the list
//     }
//   }
//   // Output a single-linked list in reverse order
//   function printReverseList(list) {
//     if(list.next===null){
//         return 0;
//     }
//     else{
//       return printReverseList(list.next);
//     }
// }
  