/*
FROG JUMP K DISTANCE OR K STEPS
*/


let heights = [30,10,60,10,60,50];
let k = 3;
/*
BRUTE FORCE
*/
const FrogJump = (heights, k) => {
  const recursion = (idx) => {
    // Base case
    if (idx === 0) return 0;

    let minimum = Infinity;
    // Try all jumps from 1 to k
    for (let i = 1; i <= k; i++) {
      if (idx - i >= 0) {
        let jump = recursion(idx - i) + Math.abs(heights[idx] - heights[idx - i]);
        minimum = Math.min(minimum, jump);
      }
    }
    return minimum;
  };

  return recursion(heights.length - 1);
};

console.log(FrogJump(heights, k)); // Output: 40
/*
MEMOISATION 1
*/
const FrogJumpMemoisation = (heights, k) => {
  
  let memo = {};
  
  const recursion = (idx) => {
    // Base case
    if (idx === 0) return 0;
    
    if(memo[idx] !== undefined){
      return memo[idx];
    }

    let minimum = Infinity;
    // Try all jumps from 1 to k
    for (let i = 1; i <= k; i++) {
      if (idx - i >= 0) {
        let jump = recursion(idx - i) + Math.abs(heights[idx] - heights[idx - i]);
        minimum = Math.min(minimum, jump);
      }
    }
    memo[idx] = minimum;
    return minimum;
  };

  return recursion(heights.length - 1);
};

console.log(FrogJumpMemoisation(heights, k));

/*
MEMOISATION 2
*/
const FrogJumpMemoisation2 = (heights, k) => {
  
  let dp = new Array(heights.length).fill(-1);
  dp[0] = 0;
  
  const recursion = (idx) => {
    // Base case
    if (idx === 0) return 0;
    
    if(dp[idx] !== -1){
      return dp[idx];
    }

    let minimum = Infinity;
    // Try all jumps from 1 to k
    for (let i = 1; i <= k; i++) {
      if (idx - i >= 0) {
        let jump = recursion(idx - i) + Math.abs(heights[idx] - heights[idx - i]);
        minimum = Math.min(minimum, jump);
      }
    }
    dp[idx] = minimum;
    return minimum;
  };

  return recursion(heights.length - 1);
};

console.log(FrogJumpMemoisation2(heights, k));
/*
TABULATION
*/
const Tabulation = (heights,k) => {
  
  let dp = new Array(heights.length).fill(-1);
  dp[0] = 0;
  
  for(let i=1;i<=heights.length-1;i++){
    let minimum = Infinity;
    for(let j=1;j<=k;j++){
      if((i-j) >=0){
      let jump = Math.abs(heights[i] - heights[i-j]) + dp[i-j];
      minimum = Math.min(minimum,jump);
      }
    }
    
    dp[i] = minimum;
  }
  
  return dp[heights.length-1]
};
/*
SPACE OPTIMISATION
*/
