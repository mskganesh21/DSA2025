/*
MAXIMUM PATH SUM 
WITH VARIABLE STARTING AND 
ENDING POINTS
*/
let arr = [
  [1, 2, 10, 4],
  [100, 3, 2, 1],
  [1, 1, 20, 2],
  [1, 2, 2, 1]
];

const MaximumPathSumWithVariables = (arr) => {
  let r = arr.length;
  let c = arr[0].length;

  const recursion = (r, c) => {
    if (c < 0 || c >= arr[0].length) return -Infinity;
    if (r === 0) return arr[0][c];

    let top = arr[r][c] + recursion(r - 1, c);
    let leftDiagonal = arr[r][c] + recursion(r - 1, c - 1);
    let rightDiagonal = arr[r][c] + recursion(r - 1, c + 1);

    return Math.max(top, leftDiagonal, rightDiagonal);
  };

  let maximumPathSum = -Infinity;

  for (let i = 0; i < c; i++) {
    maximumPathSum = Math.max(maximumPathSum, recursion(r - 1, i));
  }

  return maximumPathSum;
};

console.log(MaximumPathSumWithVariables(arr));
/*
MEMOISATION 1
*/
const Memoisation1 = (arr) => {
  
  let r = arr.length;
  let c = arr[0].length;

  let memo = {};

  const recursion = (r, c) => {
    if (c < 0 || c >= arr[0].length) return -Infinity;
    if (r === 0) return arr[0][c];

    let key = `${r}&${c}`;
    if(memo[key] !== undefined) return memo[key];
    
    let top = arr[r][c] + recursion(r - 1, c);
    let leftDiagonal = arr[r][c] + recursion(r - 1, c - 1);
    let rightDiagonal = arr[r][c] + recursion(r - 1, c + 1);

    memo[key] = Math.max(top, leftDiagonal, rightDiagonal);
    return memo[key]
  };

  let maximumPathSum = -Infinity;

  for (let i = 0; i < c; i++) {
    maximumPathSum = Math.max(maximumPathSum, recursion(r - 1, i));
  }

  return maximumPathSum;
  
};
/*
MEMOISATION2
*/
const Memoisation2 = (arr) => {
  
  let r = arr.length;
  let c = arr[0].length;

  let dp = [];
  for(let i=0;i<r;i++){
    dp.push([]);
    for(let j=0;j<c;j++){
      dp[i][j] = -1
    }
  }

  const recursion = (r, c) => {
    if (c < 0 || c >= arr[0].length) return -Infinity;
    if (r === 0) return arr[0][c];

    if(dp[r][c] !== -1) return dp[r][c];
    
    let top = arr[r][c] + recursion(r - 1, c);
    let leftDiagonal = arr[r][c] + recursion(r - 1, c - 1);
    let rightDiagonal = arr[r][c] + recursion(r - 1, c + 1);

    dp[r][c] = Math.max(top, leftDiagonal, rightDiagonal);
    return dp[r][c]
  };

  let maximumPathSum = -Infinity;

  for (let i = 0; i < c; i++) {
    maximumPathSum = Math.max(maximumPathSum, recursion(r - 1, i));
  }

  return maximumPathSum;
   
};
/*
TABULATION
*/
const Tabulation = (arr) => {
    let r = arr.length;
  let c = arr[0].length;
  
    let dp = [];
  for(let i=0;i<r;i++){
    dp.push([]);
    for(let j=0;j<c;j++){
      dp[i][j] = -1
    }
  }
  
  //base cases
  for(let i=0;i<c;i++){
    dp[0][i] = arr[0][i]
  }
  
  for(let i=1;i<r;i++){
    for(let j=0;j<c;j++){
      let top = -Infinity;
      let leftDiagonal = -Infinity;
      let rightDiagnol = -Infinity;
      if(i >=1){
      top = arr[i][j] + dp[i-1][j];
      }
      if(i>=1 && j>=1){
      leftDiagonal = arr[i][j] + dp[i-1][j-1];
      }
      if(i>=1 && j<=c-2){
      rightDiagnol = arr[i][j] + dp[i-1][j+1];
      }
      dp[i][j] = Math.max(top,rightDiagnol,leftDiagonal);
    }
  }
  
  let maxi = -Infinity;
  for(let i=0;i<c;i++){
    maxi = Math.max(maxi,dp[r-1][i]);
  }
  
  return maxi
};

console.log(Tabulation(arr));
