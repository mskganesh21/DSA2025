/*
HOUSE ROBBER PROBLEM
houses are arranged in a circle
robber can rob houses but not adjacent houses
what is the max amount the robber can rob ??
*/
/*
BRUTE FORCE
Here we'll get the solution for the question only 
if we split the array into 2 segments
one segment which does not include the first element
second segment which does not include the last element
and then get the max of those two 
*/

const arr = [2,3,2];

const HouseRobber = (arr) => {
  let n = arr.length;
  
  if (n === 0) return 0;
  if (n === 1) return arr[0]; // Edge case for single house
  
  //recursion function 
  const recursion = (startIndex,endIndex) => {
    
    //apply recursion from the start to end
    const recurse = (idx) => {
      //base cases
      //if index is less than startIndex return 0
      if(idx < startIndex) return 0;
      //if it is the startIndex element include it 
      if(idx === startIndex) return arr[startIndex];
      
      //pick the house 
      let pick = arr[idx] + recurse(idx - 2);
      //not pick the house
      let notPick = 0 + recurse(idx-1);
      
      return Math.max(pick,notPick);
      
    };
    //start with the endIndex
    return recurse(endIndex);
  };
  //return the max of first and second sequence
  return Math.max(recursion(0,n-2),recursion(1,n-1));
};
/*
MEMOISATION 1
*/
const Memoisation1 = (arr) => {
  
  let n = arr.length;
  if(n === 0) return 0;
  if(n===1) return arr[0];
  

const recursion = (startIndex,endIndex) => {
  
  //create a memo object
let memo = {};
  
  const recurse = (idx) => {
    //base cases 
    if(idx < startIndex) return 0;
    if(idx === startIndex) return arr[startIndex];
    
    if(memo[idx] !== undefined) return memo[idx];
    
      //pick the house 
      let pick = arr[idx] + recurse(idx - 2);
      //not pick the house
      let notPick = 0 + recurse(idx-1);
      
      memo[idx] = Math.max(pick,notPick);
      return memo[idx];
  };
  
  return recurse(endIndex);
};

return Math.max(recursion(0,n-2),recursion(1,n-1));
};

/*
MEMOISATION 2
*/
const Memoisation2 = (arr) => {
  let n = arr.length;
  if (n === 0) return 0;
  if (n === 1) return arr[0];

  const recursion = (startIndex, endIndex) => {
    let dp = new Array(n).fill(-1); // Use size n for safety

    const recurse = (idx) => {
      if (idx < startIndex) return 0;
      if (idx === startIndex) return arr[startIndex];
      if (dp[idx] !== -1) return dp[idx];

      let pick = arr[idx] + recurse(idx - 2);
      let notPick = recurse(idx - 1);

      dp[idx] = Math.max(pick, notPick);
      return dp[idx];
    };

    return recurse(endIndex);
  };

  return Math.max(recursion(0, n - 2), recursion(1, n - 1));
};

const arr2 = [2, 3, 2];
console.log(Memoisation2(arr2)); // Output: 3

/*
TABULATION 
*/
const Tabulation = (arr) => {
  //array length 
  let n = arr.length;
  
  if(n === 0) return 0;
  if(n === 1) return arr[0];
  
  const recursion = (startIndex,endIndex) => {
    let length = endIndex - startIndex + 1;
    let dp = new Array(length).fill(-1);
    dp[0] = arr[startIndex];
    
    for(let i=1;i<=length;i++){
      let pick = arr[startIndex + i];
      if(i - 2 >= 0){
        pick+= dp[i-2];
      }
      let notPick = dp[i-1];
      
      dp[i] = Math.max(pick,notPick);
    };
    
    return dp[length - 1];
  };
  
  return Math.max(recursion(0,n-2),recursion(1,n-1));
  
};

const arr3 = [2, 3, 2];
console.log(Tabulation(arr3)); 
/*
SPACE OPTIMISATION
*/
const SpaceOptimisation = (arr) => {
  let n = arr.length;
  if (n === 0) return 0;
  if (n === 1) return arr[0];

  const robLinear = (startIndex, endIndex) => {
    let length = endIndex - startIndex + 1;
    let prev1 = arr[startIndex];
    let prev2 = 0;

    for (let i = 1; i < length; i++) {
      let pick = arr[startIndex + i];
      if (i - 2 >= 0) pick += prev2;
      let notPick = prev1;
      let curr = Math.max(pick, notPick);
      prev2 = prev1;
      prev1 = curr;
    }
    return prev1;
  };

  return Math.max(robLinear(0, n - 2), robLinear(1, n - 1));
};

const arr4 = [2, 3, 2];
console.log(SpaceOptimisation(arr4)); // Output: 3
