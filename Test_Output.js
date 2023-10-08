/* Remove anagram words, only keep first anagram word in answer array */
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let ans = [];
  let sortedSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    let sortedword = arr[i].toLowerCase().split("").sort().join("");
    if (!sortedSet.has(sortedword)) {
      ans.push(arr[i]);
      sortedSet.add(sortedword);
    }
  }
  return ans;
}

console.log(aclean(arr));
