let parent = {
  health: 50,
  addHealth(n1, n2) {
    console.log(this);
    this.health += n1 + n2;
  },
  getHealth() {
    console.log(this.health);
  },
};
// polyfills

// method borrowing
var child = {
  health: 70,
};

parent.addHealth(10, 20);
parent.addHealth.call(child, 20, 30);
parent.addHealth.apply(child, [20, 30]);

//where is this call, apply , bind existing ??
console.log(Object.prototype);
console.log(Array.prototype);
console.dir(Function.prototype);

function add() {}

Function.prototype.sayHi = () => {
  console.log("hello");
};

add.sayHi();
console.dir(Function.prototype);

parent.addHealth.sayHi();

parent = {
  health: 50,
  addHealth(n1, n2) {
    // console.log(this);
    this.health += n1 + n2;
  },
  getHealth() {
    // console.log(this);
    console.log(this.health);
  },
};
// polyfills
// method borrowing
const child = { health: 70 };

// Note: call polyfill
Function.prototype.myCall = function (requiredObj, ...args) {
  //current function this obj
  const requiredfn = this;

  requiredObj.requiredfn = requiredfn; //child.getHealth = function () {};

  requiredObj.requiredfn(...args); // child.getHealth();

  delete requiredObj.requiredfn;
};

parent.getHealth();
parent.getHealth.myCall(child);
parent.addHealth.myCall(child, 20, 30);
console.log(child);

// Note: apply polyfill
Function.prototype.myApply = function (requiredObj, args) {
  const requiredfn = this;

  requiredObj.requiredfn = requiredfn; // child.getHealth = function() {}

  requiredObj.requiredfn(...args); // child.getHealth()

  delete requiredObj.requiredfn;
};

parent.addHealth.myApply(child, [20, 30]);
// console.log(child);

// Note: bind polyfill

Function.prototype.myBind = function (requiredObj, ...args1) {
  const requiredfn = this;
  return function (...args2) {
    // console.log(args1,args2, "arguments of myapply");

    requiredfn.call(requiredObj, ...args1, ...args2); //requiredfn.apply(requiredObj,[...args1,...args2]);
  };
};

const r = parent.addHealth.myBind(child, 20);
myfn(30);
console.log(myfn, "myfn");
console.log(child);

/***
 * 1. bind , call and apply -> are available on function
 * 2. use bind,call,apply in those fn -> this ->fn
 * 3. object passed to bind,call and apply -> on which you fn is called
 * **/

// Output:
// Hello, John! from India
// create applypollyfill

function applyPolyfill(fn, obj, args) {
  obj.fn = fn;
  const answer = obj.fn(...args);
  delete obj.fn;
  return answer;
}

function greet(country) {
  return "Hello, " + this.name + " from " + country;
}

const person = {
  name: "John",
};

console.log(applyPolyfill(greet, person, ["India"]));
