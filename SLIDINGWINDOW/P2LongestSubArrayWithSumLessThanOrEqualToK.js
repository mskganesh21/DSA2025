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
