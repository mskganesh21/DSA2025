/*
DP ON GRIDS
*/
/*
TOTAL UNIQUE PATHS 
Given a matrix count the unique paths
from top left corner to bottom right corner 
of a matrix 
you can only move right or move down
*/
/*
In 2D matrix express everything in terms of i(row) and j(col)
explore all paths
sum up all ways / max / min
*/

let matrix = [[1,2],[2,1],[3,2]];

const UniquePaths = (matrix) => {
  //calculate rows and columns
  let r = matrix.length;
  let c = matrix[0].length;
  const recursion = (r,c) => {
    //base cases
    if(r === 0 && c === 0){
      return 1;
    }
    if(r<0 || c < 0){
      return 0;
    }
    //explore all possibilites
    //move top
    let top = recursion(r-1,c);
    //move left
    let left = recursion(r,c-1);
    return top + left;
  };
  return recursion(r-1,c-1);
};
console.log(UniquePaths(matrix));
/*
MEMOISATION 1
*/
const Memoisation1 = (matrix) => {
  //calculate rows and columns
  let r = matrix.length;
  let c = matrix[0].length;
  
  let memo = {};
  
  const recursion = (r,c) => {
    //base cases
    if(r === 0 && c === 0){
      return 1;
    }
    if(r<0 || c < 0){
      return 0;
    }
    
    let key = `${r}&${c}`;
    if(memo[key] !== undefined) return memo[key];
    
    //explore all possibilites
    //move top
    let top = recursion(r-1,c);
    //move left
    let left = recursion(r,c-1);
    
    memo[key] = top + left;
    return memo[key]
  };
  return recursion(r-1,c-1);
};
/*
MEMOISATION 2
*/
const Memoisation2 = (matrix) => {
  //calculate rows and columns
  let r = matrix.length;
  let c = matrix[0].length;
  
  let dp = [];
  for(let i=0;i<r;i++){
    dp.push([]);
    for(let j=0;j<c;j++){
      dp[i][j] = -1;
    }
  }
  
  console.log(dp);
  
  const recursion = (r,c) => {
    //base cases
    if(r === 0 && c === 0){
      return 1;
    }
    if(r<0 || c < 0){
      return 0;
    }
    
    if(dp[r][c] !== -1) return dp[r][c];
    
    //explore all possibilites
    //move top
    let top = recursion(r-1,c);
    //move left
    let left = recursion(r,c-1);
    
    dp[r][c] = top + left;
    return dp[r][c]
  };
  return recursion(r-1,c-1);
};
console.log(Memoisation2(matrix));
/*
TABULATION
*/
const Tabulation = (matrix) => {
  let r = matrix.length;
  let c = matrix[0].length;
  let dp = [];
  for(let i=0;i<r;i++){
    dp.push([]);
    for(let j=0;j<c;j++){
      dp[i][j] = -1;
    }
  }

  for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
      if(i === 0 && j === 0){
        dp[0][0] = 1;
      } else {
        let left = 0, top = 0;
        if(j > 0){
          left = dp[i][j-1];
        }
        if(i > 0){
          top = dp[i-1][j];
        }
        dp[i][j] = left + top;
      }
    }
  }
  return dp[r-1][c-1];
};
console.log(Tabulation(matrix));
/*
SPACE OPTIMISATION 
*/
