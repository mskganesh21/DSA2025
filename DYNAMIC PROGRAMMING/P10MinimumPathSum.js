/*
MINIMUM PATH SUM 
given a 2d grid. give the minimum path sum to reach the bottom right corner
*/
/*
BRUTE FORCE
*/
/*
ALGO 
start from bottom and move top and left
choose the minimum path sum of both top and left
*/
let arr = [[5,9,6],[11,5,2]];

const MinimumPathSum = (arr) => {
  
  //rows and columns
  let r = arr.length;
  let c = arr[0].length;
  
  const recursion = (r,c) => {
    //base cases
    if(r < 0 || c < 0){
      return Infinity;
    }
    if(r === 0 && c === 0){
      return arr[0][0];
    }
    
    //recursion 
    let top = arr[r][c] + recursion(r-1,c);
    let left = arr[r][c] + recursion(r,c-1);
    
    return Math.min(top,left);
  };
  
  return recursion(r-1,c-1);
};

console.log(MinimumPathSum(arr));
/*
MEMOISATION 1
*/

const Memoisation1 = (arr) => {
  //rows and columns
  let r = arr.length;
  let c = arr[0].length;
  
  let memo = {};
  
  const recursion = (r,c) => {
    //base cases
    if(r < 0 || c < 0){
      return Infinity;
    }
    if(r === 0 && c === 0){
      return arr[0][0];
    }
    
    let key = `${r}&${c}`;
    if(memo[key] !== undefined) return memo[key];
    //recursion 
    let top = arr[r][c] + recursion(r-1,c);
    let left = arr[r][c] + recursion(r,c-1);
    
    memo[key] =Math.min(top,left);
    return Math.min(top,left);
  };
  
  return recursion(r-1,c-1);  
};
/*
MEMOISATION 2
*/
const Memoisation2 = (arr) => {
   //rows and columns
  let r = arr.length;
  let c = arr[0].length;
  
    let dp = [];
    for(let i=0;i<r;i++){
      dp.push([]);
      for(let j=0;j<c;j++){
        dp[i][j] = -1;
      }
    }
  
  const recursion = (r,c) => {
    //base cases
    if(r < 0 || c < 0){
      return Infinity;
    }
    if(r === 0 && c === 0){
      return arr[0][0];
    }
    
  
    if(dp[r][c] !== -1) return dp[r][c];
    //recursion 
    let top = arr[r][c] + recursion(r-1,c);
    let left = arr[r][c] + recursion(r,c-1);
    
    dp[r][c] =Math.min(top,left);
    return Math.min(top,left);
  };
  
  return recursion(r-1,c-1);   
};
/*
TABULATION
*/
const Tabulation = (arr) => {
    //rows and columns
  let r = arr.length;
  let c = arr[0].length;
  
    let dp = [];
    for(let i=0;i<r;i++){
      dp.push([]);
      for(let j=0;j<c;j++){
        dp[i][j] = -1;
      }
    } 
  
  for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
      if(i=== 0 && j===0){
        dp[i][j] = arr[0][0];
      } else {
        let top = Infinity;
        let left = Infinity;
        if(i > 0){
        top = arr[i][j] + dp[i-1][j];
        }
        if(j > 0){
        left = arr[i][j] + dp[i][j-1];
        }
        
        dp[i][j] = Math.min(top,left);
      }
    }
  }
  
  return dp[r-1][c-1];
};
console.log(Tabulation(arr));
/*
SPACE OPTIMISATION
*/
