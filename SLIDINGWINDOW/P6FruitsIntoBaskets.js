/*
FRUIT INTO BASKETS
Given an array of size n represented by trees
and 2 baskets 
and different types of fruits represented by numbers
what is the max no of fruits you can collect
you can't skip a tree while collecting fruits
*/
/*
this question is picking max subarray with atmost 
2 different types of numbers
*/
/*
BRUTE FORCE
*/
const FruitIntoBaskets = (arr) => {
  let n = arr.length;
  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    let set = new Set();
    for (let j = i; j < n; j++) {
      set.add(arr[j]);
      if (set.size > 2) {
        break;
      }
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }

  return maxLength;
};

const arr = [3,3,3,1,2,1,1,2,3,3,4];
console.log(FruitIntoBaskets(arr));  // Should output 5 (the max length)
