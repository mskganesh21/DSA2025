/*
FROG JUMP 1 PROBLEM:
given an array of heights. a frog can jump 1 or 2 steps
the energy lost by the frog in jumping is the difference
between the heights of the steps.
Return the minimum energy spent by the frog in jumping.
*/

let heights = [30,10,60,10,60,50];
/*
BRUTE FORCE
*/
const FrogJump = (heights) => {
  
  const recursion = (idx) => {
    //base case 
    if(idx === 0) {
      return 0;
    }
    
    //let 1jump 
    let OneStepJump = Math.abs(heights[idx]-heights[idx-1]) + recursion(idx-1);
    
    let TwoStepJump = Infinity;
    if(idx >=2){
    //two step jump 
    TwoStepJump = Math.abs(heights[idx]-heights[idx-2]) + recursion(idx-2);
    }
    return Math.min(OneStepJump,TwoStepJump);
  };
  
  return recursion(heights.length-1);
  
};

console.log(FrogJump(heights));

/*
MEMOISATION 1
*/
const FrogJumpMemoisation1 = (heights) => {
  
  let memo = {};
  
  const recursion = (idx) => {
    //base case 
    if(idx === 0) {
      return 0;
    }
    
    if(memo[idx] !== undefined) return memo[idx];
    
    //let 1jump 
    let OneStepJump = Math.abs(heights[idx]-heights[idx-1]) + recursion(idx-1);
    
    let TwoStepJump = Infinity;
    if(idx >=2){
    //two step jump 
    TwoStepJump = Math.abs(heights[idx]-heights[idx-2]) + recursion(idx-2);
    }
    memo[idx] = Math.min(OneStepJump,TwoStepJump);
    return memo[idx];
  };
  
  return recursion(heights.length-1);
  
};

/*
MEMOISATION 2
*/
const FrogJumpMemoisation2 = (heights) => {
  
  let dp = new Array(heights.length).fill(-1);
  dp[0] = 0;
  
  const recursion = (idx) => {
    //base case 
    if(idx === 0) {
      return 0;
    }
    
    if(dp[idx] !== -1) return dp[idx];
    
    //let 1jump 
    let OneStepJump = Math.abs(heights[idx]-heights[idx-1]) + recursion(idx-1);
    
    let TwoStepJump = Infinity;
    if(idx >=2){
    //two step jump 
    TwoStepJump = Math.abs(heights[idx]-heights[idx-2]) + recursion(idx-2);
    }
    dp[idx] = Math.min(OneStepJump,TwoStepJump);
    return dp[idx];
  };
  
  return recursion(heights.length-1);
  
};
/*
TABULATION
*/
const Tabulation = (heights) => {
  
  let dp = new Array(heights.length).fill(-1);
  dp[0] = 0;
  
  for(let i=1;i<=heights.length-1;i++){
    //one step jump 
    let OneStepJump = dp[i-1] + Math.abs(heights[i] - heights[i-1]);
    //two step jump 
    let TwoStepJump = Infinity;
    if(i>=2){
      TwoStepJump = dp[i-2] + Math.abs(heights[i] - heights[i-2]);
    }
    
    dp[i] = Math.min(OneStepJump,TwoStepJump);
  }
  
  return dp[heights.length-1]
};

/*
SPACE OPTIMISATION
*/

const SpaceOptimisation = (heights) => {
  
  let n = heights.length;
  
  let prev1 = 0;
  let prev2 = 0;
  
  for(let i=1;i<n;i++){
    //one step jump 
    let OneStepJump = prev1 + Math.abs(heights[i] - heights[i-1]);
    
    //two step jump 
    let TwoStepJump = Infinity;
    if(i > 1){
      TwoStepJump = prev2 + Math.abs(heights[i] - heights[i-2]);
    }
    
    let curr = Math.min(OneStepJump,TwoStepJump);
    
    prev2 = prev1;
    prev1 = curr;
  }
  
  return prev1;
};

