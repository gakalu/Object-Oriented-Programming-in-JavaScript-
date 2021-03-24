"use strict"

/**
 * 

 * @returns {Accumulator} constructor function
 */
 function Accumulator(currentValue, increment){
//implement this
 this.currentValue=currentValue;
 this.increment=increment;

this.accumulate=function(){
    return this.currentValue+=this.increment;
}
this.report=function(){
    return this.currentValue;
}
}

