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
