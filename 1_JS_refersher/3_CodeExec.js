// high level view -> how your code exec
// stack -> callstack

var a = 10;
function fn() {
  console.log("I am fn");
  function inner() {
    console.log("I am inner");
  }
  inner();
}
fn();

//Reference Error: sayHi is not a function
sayHi();
function sayHi() {
  console.log("hi everyone");
}

// x is undefined
console.log(x);
var x = 100;

/* Code Excution : always execute in EC(Execution Context)
    GLobal execution context -> GEC
    inside fn [ functional execution context ] -> own FEC

code execution
        1.  EC creation
                1.a Hoisting -> (memory allocation)
                                variable -> undefined;
                                fn -> get it's memory allocated
                2. window -> browser -> window/nodejs-> global-> features
                
                3. outer scope -> outer var

                4. this -> always calculated

         2. EC Code execution
        line by line interpreted execution 
*/

var a = 10;
console.log("a", a);

console.log("a", a);
var a = 10;

console.log(x);
var x = 5;
function add(a, b) {
  console.log(a, b);
}
add(1, 2);

real();
function real() {
  console.log("I am real. Always run me");
}
function real() {
  console.log("No I am real one ");
}
function real() {
  console.log("You both are wasted");
}
