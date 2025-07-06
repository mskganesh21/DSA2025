/*
FIBONACCI 
*/
/*
BRUTE FORCE
*/
const Fibonacci = (n) => {
  if(n < 2) return n;
  return Fibonacci(n-1) + Fibonacci(n-2);
};
console.log(Fibonacci(6));
/*
                f(5)

      f(4)                          f(3)
    f(3) f(2)                     f(2) f(1)
*/
/*
Here we're having overlapping sub problems hence we 
use memoisation.
*/
/*
TIME COMPLEXITY:  O(2 ^ N)
SPACE COMPLEXITY: O(N)
*/
/*
MEMOISATION APPROACH 1
*/
const FibonacciMemoisation = (n) => {
  let memo = {};
  let recusion = (n,memo) => {
    if(n < 2) return n;
    if(memo[n] !== undefined){
      return memo[n];
    }
    let value = recusion(n-1,memo) + recusion(n-2,memo);
    memo[n] = value;
    return memo[n]
  };
  return recusion(n,memo);
};
console.log(FibonacciMemoisation(20));
/*
TC: O(N)
SC: O(N)
*/

/*
MEMOISATION APPROACH 2
*/
const FibonacciMemoisation = (n) => {
  const memo = {};
  function recursion(n) {
    if (n < 2) return n;
    if (memo[n] !== undefined) return memo[n];
    memo[n] = recursion(n - 1) + recursion(n - 2);
    return memo[n];
  }
  return recursion(n);
};
console.log(FibonacciMemoisation(20));

/*
TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(n) stack + O(n) array
*/

/*
TABULATION APPROACH
*/
const FibonacciTabulation = (n) => {
  if (n === 0) return 0;
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

/*
TC: O(N)
SC: O(N)
*/

/*
SPACE OPTIMISATION
*/
const FibonacciSpaceOptimisation = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev2 = 0, prev1 = 1;
  for (let i = 2; i <= n; i++) {
    let curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
};
console.log(FibonacciSpaceOptimisation(20));
/*
TC: O(N)
SC: O(1)
*/
