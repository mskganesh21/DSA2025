/*
DP ON GRIDS
TRIANGLE
variable starting and ending points
*/
/*
TRIANGLE PROBLEM
given a 2d array in the form of a triangle
calculate the minimum path sum to reach the bottom from the top.
it is given that the ith row with have i+1 elements
we can either move down or move right diagonally
*/
/*
ALGO: 
since for triangle we're not having fixed
columns the column length is variable. 
I'll go from the top to bottom 
*/
/*
BRUTE FORCE
*/
const arr = [[1],[2,3],[3,6,7],[8,9,6,10]];

const Triangle = (arr) => {

let n = arr.length;

const recursion = (r,c) => {
  //base case
  if(r === n-1) return arr[n-1][c];
  
  let down = arr[r][c] + recursion(r+1,c);
  let diagnol = arr[r][c] + recursion(r+1,c+1);
  return Math.min(down,diagnol);
};

return recursion(0,0);
};
console.log(Triangle(arr));

/*
MEMOISATION 1
*/
const Memoisation1 = (arr) => {
  
let n = arr.length;

let memo = {};

const recursion = (r,c) => {
  //base case
  if(r === n-1) return arr[n-1][c];
  
  let key = `${r}&${c}`;
  if(memo[key] !== undefined) return memo[key];
  
  let down = arr[r][c] + recursion(r+1,c);
  let diagnol = arr[r][c] + recursion(r+1,c+1);
  memo[key] = Math.min(down,diagnol);
  return memo[key];
};

return recursion(0,0);
};
/*
MEMOISATION 2
*/
const Memoisation2 = (arr) => {
    
let n = arr.length;

let dp = [];

for(let i=0;i<n;i++){
  dp.push([]);
  for(let j=0;j<arr[i].length;j++){
    dp[i][j] = undefined;
  }
}

const recursion = (r,c) => {
  //base case
  if(r === n-1) return arr[n-1][c];
  
  if(dp[r][c] !== undefined) return dp[r][c];
  
  let down = arr[r][c] + recursion(r+1,c);
  let diagnol = arr[r][c] + recursion(r+1,c+1);
  dp[r][c] = Math.min(down,diagnol);
  return dp[r][c];
};

return recursion(0,0);
};
console.log(Memoisation2(arr));
/*
TABULATION
*/
const Tabulation = (arr) => {
  let n = arr.length;
  let dp = [];

  // Initialize dp with the same structure as arr
  for (let i = 0; i < n; i++) {
    dp.push([]);
    for (let j = 0; j < arr[i].length; j++) {
      dp[i][j] = 0;
    }
  }

  // Base case: last row
  for (let j = 0; j < arr[n-1].length; j++) {
    dp[n-1][j] = arr[n-1][j];
  }

  // Build the table from bottom up
  for (let i = n-2; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      let down = dp[i+1][j];
      let diagonal = dp[i+1][j+1];
      dp[i][j] = arr[i][j] + Math.min(down, diagonal);
    }
  }

  return dp[0][0];
};
console.log(Tabulation(arr));
