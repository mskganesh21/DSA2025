/*
TWO POINTERS AND SLIDING WINDOW

1.CONSTANT WINDOW

*/
/*
CONSTANT WINDOW
QUESTION:
given an array and a window size k return the max sum
of window size k with consecutive elements
*/

let arr = [-1,2,3,3,4,5,-1];
let k = 4;

const MaxSumForWindow = (arr, k) => {
  let n = arr.length;
  let l = 0;
  let r = l + k - 1;
  let maxSum = -Infinity;
  let sum = 0;
  for (let i = l; i <= r; i++) {
    sum += arr[i];
  }
  maxSum = Math.max(maxSum, sum);

  while (r < n - 1) {
    sum = sum - arr[l];
    l++;
    r++;
    sum = sum + arr[r];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};

console.log(MaxSumForWindow(arr,k));
