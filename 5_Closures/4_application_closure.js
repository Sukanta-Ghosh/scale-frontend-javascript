// Note: Infinite currying
function counter(args1) {
  var count = 1;
  if (args1 === 0) return count;

  return function inner(args2) {
    count++;

    if (args2 === 0) return count;
    else return inner;
  };
}

console.log(counter()(0)); //2
console.log(counter()()()()(0)); //5
console.log(counter(0)); //1
console.log(counter()()()()()()(0)); //7

// TODO: HW SUM
function sum() {}
console.log(sum(3)(4)()); // ---> 7
console.log(sum(3)(4)(4)()); // ---> 11

// TODO: HW SUM
function sumwithExtraArgs() {}
console.log(sumwithExtraArgs(4, 4)(4, 4, 6, 6)()); // ---> 27

/**Note:
 * Creating private variables
 */
function createEvenStack() {
  return {
    items: [],
    push(item) {
      if (item % 2 == 0) {
        console.log("Is pushed");
        this.items.push(item);
      } else {
        console.log("Please input even value");
      }
    },
    pop() {
      return this.items.pop();
    },
  };
}

const stack = createEvenStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items); // [10]

// prevent this behaviour with orivate variable
// stack.items = [10, 100, 1000];

/**
 * Note: Memoization : sum calculation take a lot of time  with
 * memoization we can store  result of costly calculations -> useMemo
 * */

// n = 5
function calc(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += n;
  }
  return sum;
}
// 25

console.time();
let res = calc(100);
console.log("res", res);
console.timeEnd();

//TODO: Write memorize function
let efficentCalcFN = memoize(calc);
console.time();
console.log(efficentCalcFN(5));
console.timeEnd();

console.time();
console.log(efficentCalcFN(5));
console.timeEnd();
