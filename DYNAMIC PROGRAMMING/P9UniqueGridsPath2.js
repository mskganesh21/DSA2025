/*
MAZE PROBLEM
*/
/*
BRUTE FORCE
*/
const MazeObstacles = (matrix) => {
  let r = matrix.length;
  let c = matrix[0].length;
  
  const recursion = (r, c) => {
    // base case 1: reached start
    if (r === 0 && c === 0) {
      return matrix[0][0] === -1 ? 0 : 1;
    }
    // base case 2: out of bounds
    if (r < 0 || c < 0) return 0;
    // base case 3: obstacle
    if (matrix[r][c] === -1) return 0;
    
    // move left and up
    let left = recursion(r, c - 1);
    let top = recursion(r - 1, c);
    return top + left;
  };
  
  return recursion(r - 1, c - 1);
};

let matrix = [[0,0,0],[0,-1,0],[0,0,0]];
console.log(MazeObstacles(matrix)); // Output: 2
/*
MEMOISATION 1
*/
const Memoisation1 = (matrix) => {
  let r = matrix.length;
  let c = matrix[0].length;
  
  let memo = {};
  
  const recursion = (r, c) => {
    // base case 1: reached start
    if (r === 0 && c === 0) {
      return matrix[0][0] === -1 ? 0 : 1;
    }
    // base case 2: out of bounds
    if (r < 0 || c < 0) return 0;
    
    let key = `${r}&${c}`;
    if(memo[key] !== undefined) return memo[key];
    
    // base case 3: obstacle
    if (matrix[r][c] === -1) return 0;
    
    // move left and up
    let left = recursion(r, c - 1);
    let top = recursion(r - 1, c);
    memo[key] = top + left;
    return memo[key]
  };
  
  return recursion(r - 1, c - 1);
};
