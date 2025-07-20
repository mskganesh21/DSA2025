/*
MAXIMUM POINTS YOU CAN OBTAIN FROM CARDS
given an array of size n and a number k
give the max sum obtained of size k.
condition: pick from start or end only
*/
const arr = [6,2,3,4,7,2,1,7,1];
const k = 4
/*
[6,2,3,4]
[2,1,7,1]
[7,1,6,2] = 16
[1,7,1,6]
[1,6,2,3]
*/
/*
  NAIVE SOLUTION
*/
const MaximumPointsObtainedFromCards = (arr, k) => {
  let n = arr.length;
  let maxSum = -Infinity;

  let lsum = 0;
  for(let i = 0; i < k; i++) {
    lsum += arr[i];
  }
  maxSum = Math.max(maxSum, lsum);

  let rightIndex = n-1;
  let rsum=0;
  for(let i=k-1;i>=0;i--){
    lsum -= arr[i];
    rsum +=arr[rightIndex];
    rightIndex--;
    maxSum = Math.max(maxSum,lsum+rsum)
  }

  return maxSum;
};

console.log(MaximumPointsObtainedFromCards(arr,k))
