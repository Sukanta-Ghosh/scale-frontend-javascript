/* Ex: */
const ironman = {
  name: "Steve",
  sayHi: function () {
    console.log("53", this.name);
    const iAmInner = () => {
      console.log("55", this.name);
    };
    iAmInner();
  },
};

ironman.sayHi();

/* O/p:
53 Steve
55 Steve
*/

/* Ex: */
Function.prototype.myBind = function (obj) {
  obj.fnRef = this;
  return function (...args) {
    obj.fnRef(...args);
  };
};

let abc = {
  name: "Jasbir",
};

let obj = {
  name: "Steve",
  sayHi: function () {
    console.log(this.name, "say's Hi");
    function inner() {
      console.log("inside inner", this.name);
    }
    let boundThisFN = inner.myBind(abc);
    boundThisFN();
  },
};
obj.sayHi();

/* O/p:
Steve say' Hi inside inner Jasbir
*/

/* Doubt: Ex: */
function foo() {
  let a = (b = 0);
  a++;
  return a;
}
foo();

console.log(typeof a);
console.log(typeof b);

/* o/p:
undefined
number
*/

/* Ex: */
let ab = 10;
console.log("line number 2", ab); //10

function fn() {
  console.log("line number 4", ab); //ReferenceError: Cannot access 'ab' before initialization
  let ab = 20;
  ab++;
  console.log("line number 7", ab); //
  if (ab) {
    let ab = 30;
    ab++;
    console.log("line number 11", ab); //
  }
  console.log("line number 13", ab); //
}
fn();
console.log("line number 16", ab); //

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

/* O/P: 
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
at new Rabbit
*/

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

/* Ex: Doubt:*/
function* f(...a) {
  let s = new Set();
  for (x in a) {
    s.add(a[x]);
    yield a[x];
  }
  yield s;
}

let f1 = f(3, 2, 1);

while (true) {
  let yv = f1.next().value;
  if (typeof yv == "object") {
    console.log(yv);
    yv.add(3);
    console.log(yv);
    break;
  }
}

/* o/p:
Set(3) { 3, 2, 1 }
Set(3) { 3, 2, 1 }
*/

/* Ex: */
let b;
console.log(b); //undefined

function A() {
  let b = 2;
  console.log(b); //2

  function C() {
    console.log(b); //2

    function D() {
      console.log(b); //2

      b = 2;
    }
    D();
    b = 3;
  }
  C();
}

b = 3;
A();

/* o/P;
undefined 2 2 2
*/

/* Ex: */
let cap = {
  name: "Steve",
  sayHi: () => {
    console.log("Hi from ", this.name);
  },
};

cap.sayHi();
let sayHiAdd = cap.sayHi;
sayHiAdd();

/* O/p:
Hi from  undefined
Hi from  undefined
*/
