
//=======================Filter through function=================================================
function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
//=======================Sort by field==========================================================
function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }
//=======================Army of functions======================================================
function makeArmy() {
    let shooter = function() { 
        let shooters = [];
        console.log("I am shooter ", idx); 
        return idx;
        };
    for(let i = 0; i < 10; i++) {
      let shooter = function() { // shooter function
        console.log( i ); // should show its number
      };
      shooters.push(shooter);
    }
  
    return shooters;
}

