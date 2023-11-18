// input  -> nested array
let input1 = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
let input2 = [1, 2, 3, [4, 5], [[6], 7, 8, [9, 10, [11]]]];
/* // output -> single level of array with num
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// [4, 5] -> 4, 5
// [6, 7, 8, [9, 10, 11]] -> 6, 7, 8, 9, 10, 11 */

//Note: Flatten Array function
function flatten(srcArr) {
  let newArr = [];

  for (let i = 0; i < srcArr.length; i++) {
    if (Array.isArray(srcArr[i])) {
      let insideArr = flatten(srcArr[i]);
      newArr.push(...insideArr);
    } else {
      newArr.push(srcArr[i]);
    }
  }

  return newArr;
}

let flattenedArr1 = flatten(input1);
let flattenedArr2 = flatten(input2);

console.log(flattenedArr1); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(flattenedArr2); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

/**
 * Question  -> Array.protype.flat()  -> flatten fn -> option of levels also
 * */
let flattenOutput = input1.flat();
console.log(flattenOutput); //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ] ]
