"use strict"
// // //Q1
// /**
//  * 
//  * @param {number} a 
//  * @param {number} b 
//  * @param {number} c 
//  * @returns {number} Maximum
//  */
// function maxOfThree(a,b,c){
//     if(a>b&&a>c){
//         return a;
//     }else if(b>c){
//         return b;
//     }else{
//         return c;
//     }
// }
// //=============================================================================================
// // Q2
// /**
//  * 
//  * @param {number} arr 
//  * @returns {number} sum and product
//  */
// function sum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//      sum+=arr[i];
//     }
//     return sum;

// }
// function multiply(arr){
//     let product=1
//     for(let i=0;i<arr.length;i++){
//         product*=arr[i];
//        } 
//        return product;  
// }

// // =====================================================================================
// // Q3
// function findLongestWord(arr){
//     let longest=arr[0].length;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length>longest){
//             longest=arr[i].length;
//     }
// }
//     return longest;
// }
// //====================================================================================
// // Q4
// function reverseArray(arr){
//     let newArr=[];
//     for(let i=arr.length-1;i>=0;i--){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// } 
// function reverseArrayInPlace(arr){
//     let temp='';
//     for(let i=arr.length-1;i>=0;i--){
//      temp+=arr[i];
// }
// return temp.split('');
// }
// //=====================================================================================
// //Q5
// function scoreExams(studentAnswers,correctAnswers){
//     let narr=[];  
// for(let i=0;i<studentAnswers.length;i++){
//      narr.push(match(studentAnswers[i],correctAnswers));
//     }
//     return narr;
// }
// function match(arr1,arr2){
//     let count=0;
//     for(let i=0;i<arr1.length;i++){
//             if(arr1[i]===arr2[i])
//             count++;
//         }
//     return count;
// }
//=======================================================================================================
function addBook(title, author,libraryID){
    this.title=title;
    this.author=author;
    this.libraryID=libraryID;
return addBook(findTitles(),findAuthors(),findIDs());
}
function findTitles(titles){
 return titles;
}
function findAuthors(author){
return author
}
function findIDs(libraryID){
return libraryID;
}
console.log(findTitles("Hello"));
console.log(findAuthors("Meriam"));
console.log(findIDs(7800));
console.log(addBook)
//====================================================================================================
// function getMaxSubSum(arr) {
//     let maxSum = 0; // if we take no elements, zero will be returned
  
//     for (let i = 0; i < arr.length; i++) {
//       let sumFixedStart = 0;
//       for (let j = i; j < arr.length; j++) {
//         sumFixedStart += arr[j];
//         maxSum = Math.max(maxSum, sumFixedStart);
//       }
//     }
  
//     return maxSum;
//   }
  
//   console.log( getMaxSubSum([-1, 2, 3, -9])); // 5
//   console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
//   console.log( getMaxSubSum([-2, -1, 1, 2])); // 3
//   console.log( getMaxSubSum([1, 2, 3]) ); // 6
//   console.log( getMaxSubSum([100, -9, 2, -3, 5])) ; // 100
//=======================================================================================================
