/* Ex: */
let a = 2;
{
  let a = 3;
  {
    let a = 4;
    {
      let a = 5;
      console.log(a);
    }
    console.log(a);
  }
  console.log(a);
}
console.log(a);

//output: 5 4 3 2 1

/* Ex: Hoisting
TODO: Reason*/
function real() {
  console.log("I am real. Always run me.");
}
function real() {
  console.log("No, I am real one.");
}
real();
function real() {
  console.log("You both are wasted.");
}

// o/p: You both are wasted.

/* Ex: */
console.log(getResult());

var getResult = function () {
  return "Hello World!";
};

//o/p: TypeError: getResult s not a function

/* Ex: */
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

/* o/p:
Rabbit
undefined
undefined
undefined */

/* Ex: */
function A() {}
function B() {}

A.prototype = B.prototype = {};
let a1 = new A();
console.log(a1 instanceof B);

/* O/p: true */

/* Ex: */
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit1 = new Rabbit("White Rabbit");
console.log(rabbit1.name);

/* O/P: Error */

/* Ex: */
let animal = {
  jumps: null,
};

rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps);

delete rabbit.jumps;

console.log(rabbit.jumps);

delete animal.jumps;

console.log(rabbit.jumps);

/* O/P: true null undefined */

/* Ex: Doubt:*/
let val = 0;

class A {
  set foo(_val) {
    val = _val;
  }

  get foo() {
    return val;
  }
}

class B extends A {}

class C extends A {
  get foo() {
    return val;
  }
}

const b = new B();
console.log(b.foo); //0
b.foo = 1;
console.log(b.foo); //1

const c = new C();
console.log(c.foo); //1
c.foo = 2;
console.log(c.foo); //1
console.log(b.foo); //1
