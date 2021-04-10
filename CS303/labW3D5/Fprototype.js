//Q3
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit1 = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit1.eats ); // ?
function Rabbit() {};
Rabbit.prototype = {
  eats: true
};
let rabbit2= new Rabbit();
Rabbit.prototype.eats = false;

console.log( rabbit2.eats); // ?
function Rabbit() {};
Rabbit.prototype = {
  eats: true
};

let rabbit3 = new Rabbit();

delete rabbit3.eats;

console.log( rabbit3.eats ); // ?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit4 = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit4.eats ); // ?