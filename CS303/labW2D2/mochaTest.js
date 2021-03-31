"strict mode";

let numArray;
describe("map practice", function () {

    let arr=[2,3,5];
    it("My own version of Array.map to squre a value in array", function () {
        function double(arr){
            let result=[];
            for(let n of arr){
                result.push(2*n)
            }
            return result
        }
        assert.deepEqual(myMap(arr,double), [4,6,10]);
    });
    it("My own version of Array.map a number raised to itselef", function () {
        function double(arr){
            let result=[];
            for(let n of arr){
                result.push(Math.pow(n,n))
            }
            return result
        }
        assert.deepEqual(myMap(arr,double), [4,27,3125]);
    });
});

describe("filter practice", function () {

    let arr=[10,50,20];
    it("My own version of Array.filter to squre a value in array", function () {
        function filter(arr){
            let result=[];
            for(let n of arr){
                if(n<15)
                result.push(n)
            }
            return result
        }
        assert.deepEqual(myFilter(arr,filter), [10]);
    });
    it("My own version of Array.filter to find even", function () {
        function filter(arr){
            let result=[];
            for(let n of arr){
                if(n%2===0)
                result.push(n)
            }
            return result
        }
        assert.deepEqual(myFilter(arr,filter), [10,50,20]);
    });
});

    