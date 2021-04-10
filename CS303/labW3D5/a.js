//https://www.geeksforgeeks.org/inheritance-in-javaScript/  
// JavaScripet program to illustrate the
// concept of inheritance
//Q4 Converting java to javascript code.
    function Bicycle(gear, speed)
    {
        this.gear = gear;
        this.speed = speed;
        applyBrake=function(decreamnet){
        speed-=decreamnet;
            return speed;
        }
    function speedUp(increment)
        speed+=increment;
        return this.speed;
}
 let MountainBike=Object.create(Bicycle);
    MountainBike.seatHeight = startHeight;
    function setHeight(newValue){
        seatHeight = newValue;
    }
        let mb = new MountainBike(3, 100, 25);
        console.log(mb.toString());
    
