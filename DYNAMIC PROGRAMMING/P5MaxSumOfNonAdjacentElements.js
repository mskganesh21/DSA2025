/*
MAXIMUM SUM OF NON ADJACENT ELEMENTS
*/
/*
START FROM THE LAST INDEX
FOR EACH INDEX WE CAN EITHER PICK OR NOT PICK THE ELEMENT
GET THE MAX OF BOTH
*/
/*
BRUTE FORCE
*/
const MaxSumOfNonAdjacentElements = (arr) => {
  let n = arr.length;
  
  const recursion = (idx) => {
    // Base cases
    if (idx === 0) return arr[0];
    if (idx < 0) return 0;

    // Pick the current element and move two steps back
    let pick = arr[idx] + recursion(idx - 2);

    // Ignore the current element and move one step back
    let notPick = recursion(idx - 1);

    return Math.max(pick, notPick);
  };

  return recursion(n - 1);
};
console.log(MaxSumOfNonAdjacentElements([3, 2, 5, 10, 7])); // Output: 15 (3 + 10 + 2 or 3 + 5 + 7)

/*
MEMOISATION 1
*/
const memoisation1 = (arr) => {
    let n = arr.length;
  
    let memo = {};
    
  const recursion = (idx) => {
    // Base cases
    if (idx === 0) return arr[0];
    if (idx < 0) return 0;
    
    if(memo[idx] !== undefined) return memo[idx];
    
    // Pick the current element and move two steps back
    let pick = arr[idx] + recursion(idx - 2);

    // Ignore the current element and move one step back
    let notPick = recursion(idx - 1);

    
    memo[idx] = Math.max(pick, notPick);
    return memo[idx]
  };

  return recursion(n - 1);
};
console.log(memoisation1([3, 2, 5, 10, 7])); // Output: 15

/*
MEMOISATION 2
*/
const memoisation2 = (arr) => {
    let n = arr.length;
  
    let dp = new Array(n).fill(-1);
    
  const recursion = (idx) => {
    // Base cases
    if (idx === 0) return arr[0];
    if (idx < 0) return 0;
    
    if(dp[idx] !== -1) return dp[idx];
    
    // Pick the current element and move two steps back
    let pick = arr[idx] + recursion(idx - 2);

    // Ignore the current element and move one step back
    let notPick = recursion(idx - 1);

    
    dp[idx] = Math.max(pick, notPick);
    return dp[idx]
  };

  return recursion(n - 1);
};
/*
TABULATION
*/
const Tabulation = (arr) => {
  let n = arr.length;
  if (n === 0) return 0;
  if (n === 1) return arr[0];

  let dp = new Array(n).fill(0);
  dp[0] = arr[0];

  for (let i = 1; i < n; i++) {
    let pick = arr[i];
    if (i - 2 >= 0) {
      pick += dp[i - 2];
    }
    let notPick = dp[i - 1];

    dp[i] = Math.max(pick, notPick);
  }

  return dp[n - 1];
};

/*
SPACE OPTIMISATION
*/
const spaceOptimisation = (arr) => {
  let n = arr.length;
  if (n === 0) return 0;
  if (n === 1) return arr[0];

  let prev1 = arr[0];
  let prev2 = 0;

  for (let i = 1; i < n; i++) {
    let pick = arr[i] + prev2;
    let notPick = prev1;

    let curr = Math.max(pick, notPick);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
};
