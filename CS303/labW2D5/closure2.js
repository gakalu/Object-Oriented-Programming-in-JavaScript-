
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
  let shooters = [];

  let i = 0;
  while (i < 10) {
      let j = i;
      let shooter = function() { // shooter function
        return j; // should show its number
      };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

// Now the code works correctly
army[0](); // 0
army[5](); // 5
