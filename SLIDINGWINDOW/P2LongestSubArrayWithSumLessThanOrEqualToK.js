/*
TWO POINTERS AND SLIDING WINDOW

1.CONSTANT WINDOW
2.LONGEST SUBARRAY/SUBSTRING WHERE (CONDITION)
*/
/*
Given an array calculate the longest subarray with sum 
<=k
*/
let arr = [2,5,1,7,10];
let k = 14;
/*
BRUTE FORCE
generate all subarrays and check them for the solution
*/
/*
while generating a subarray check the sum and return the maxLength
*/
const LongestSubArrayWithSumLessThanOrEqualToK = (arr,k) => {
    let n = arr.length;
    let maxLength = -Infinity;
  for(let i=0;i<n;i++){
    let sum = 0;
    for(let j=i;j<n;j++){
      sum += arr[j];
      if(sum <=k){
        maxLength = Math.max(maxLength,j-i+1);
      }
    }

  }
  
  return maxLength;
};
console.log(LongestSubArrayWithSumLessThanOrEqualToK(arr,k))

/*
if the sum exceeds the k then break the loop 
*/
const LongestSubArrayWithSumLessThanOrEqualToK1 = (arr,k) => {
    let n = arr.length;
    let maxLength = -Infinity;
  for(let i=0;i<n;i++){
    let sum = 0;
    for(let j=i;j<n;j++){
      sum += arr[j];
      if(sum <=k){
        maxLength = Math.max(maxLength,j-i+1);
      } else if(sum > k){
        break;
      }
    }

  }
  
  return maxLength;
};
console.log(LongestSubArrayWithSumLessThanOrEqualToK1(arr,k));

/*
OPTIMAL SOLUTION
*/
/*
use 2 pointers and sliding window
initially keep window size as 1
then keep increasing the window size until the condition
and then if it crosses the condition then shrink the window
in this way we can get SOLUTION
*/
const longestSubarrayWithSumLessThanOrEqualToK1 = (arr, k) => {
  let n = arr.length;
  let l = 0, r = 0, sum = 0, maxLength = 0;

  while (r < n) {
    sum += arr[r];

    // Shrink window until sum <= k
    while (sum > k && l <= r) {
      sum -= arr[l];
      l++;
    }

    // Now sum <= k
    maxLength = Math.max(maxLength, r - l + 1);

    // Expand window
    r++;
  }

  return maxLength;
};
