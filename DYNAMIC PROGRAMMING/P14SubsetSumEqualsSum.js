/*
DP ON SUBSEQUENCES
SUBSEQUENCE: a contiguous or non contiguous array which does follow order
SUBSET: a contiguous or non contiguous array which does not follow order

*/
/*
SUBSET SUM EQUALS TARGET
*/

let arr = [1,2,3,4];
let target = 2;
/*
BRUTE FORCE
*/
const SubSetSumEqualsTarget = (arr,target) => {
  //length of the array
  let n = arr.length;
  
  const recursion = (idx,target) => {
    //base cases
    if(target === 0) return true;
    if(idx < 0) return false;
    
    //pick the element
    let pick = false;
    if(arr[idx] <= target){
      pick = recursion(idx-1,target-arr[idx])
    }
    //notpick the element
    let notPick = recursion(idx-1,target);
    
    return pick || notPick;
  };
  
  return recursion(n-1,target);
};
console.log(SubSetSumEqualsTarget(arr,target));
/*
MEMOISATION 1
*/
const Memoisation1 = (arr,target) => {
  //length of the array
  let n = arr.length;
  
  let memo = {};
  
  const recursion = (idx,target) => {
    //base cases
    if(target === 0) return true;
    if(idx < 0) return false;
    
    let key = `${idx}&${target}`;
    if(memo[key] !== undefined) return memo[key];
    
    //pick the element
    let pick = false;
    if(arr[idx] <= target){
      pick = recursion(idx-1,target-arr[idx])
    }
    //notpick the element
    let notPick = recursion(idx-1,target);
    
    memo[key] = pick || notPick;
    return memo[key]
  };
  
  return recursion(n-1,target);
};
/*
MEMOISATION 2
*/
const Memoisation2 = (arr,target) => {
  //length of the array
  let n = arr.length;
  
  let dp = [];
  for(let i=0;i<n;i++){
    dp.push([]);
    for(let j=0;j<=target;j++){
      dp[i][j] = -1;
    }
  }
  
  const recursion = (idx,target) => {
    //base cases
    if(target === 0) return true;
    if(idx < 0) return false;
    
    if(dp[idx][target] !== -1) return dp[idx][target];
    
    //pick the element
    let pick = false;
    if(arr[idx] <= target){
      pick = recursion(idx-1,target-arr[idx])
    }
    //notpick the element
    let notPick = recursion(idx-1,target);
    
    dp[idx][target] = pick || notPick;
    return dp[idx][target]
  };
  
  return recursion(n-1,target); 
};
/*
TABULATION
*/
const Tabulation = (arr,target) => {
    //length of the array
  let n = arr.length;
  
  //declaring the dp array 
  let dp = [];
  for(let i=0;i<n;i++){
    dp.push([]);
    for(let j=0;j<=target;j++){
      dp[i][j] = -1;
    }
  }
  
  //base case when target is zero
  for(let i=0;i<n;i++){
    dp[i][0] = true;
  }
  
  //
};

