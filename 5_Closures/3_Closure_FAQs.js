// Q1_1
function outer() {
  let arrFn = [];
  for (var i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      console.log(i);
    });
  }
  return arrFn;
}

var arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();

/* o/p:
3 3 3 
*/

//q-1-2
/**
 * fn is taking value from closure -> i=3
 * */
function outer() {
  /**
   * arrfns block scope refer to -> functions
   * */
  let arrFn = [];
  let i = 0;
  for (i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      console.log(i);
    });
  }
  return arrFn;
}
var arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();

/* o/p:
3 3 3 
*/

/**
 * q1-3 : fn is getting diffrent values of i because here
 * block scope is different for every iteration
 */

function outer() {
  /**
   * arrfns block scope refer to -> functions
   * */
  let arrFn = [];
  let j = 0;
  for (let i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      console.log("i: ", i);
      console.log("j: ", j);
    });
  }
  return arrFn;
}
var arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();

/* o/p:
i:  0
j:  0
i:  1
j:  0
i:  2
j:  0 
*/
