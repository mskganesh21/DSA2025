/*
DP ON GRIDS
CHERRY PICK UP PROBLEM
alice and bob are 2 friends of ninja standing 
at top left corner and top right corner 
they need to collect as many chocolates as possible
while moving down,downleft,downright
once a cell is reached the chocolates in that cell
becomes zero
*/

let arr = [[2,3,1,2],[3,4,2,2],[5,6,3,5]];

const CherryPickUp = (arr) => {
  
  //rows and columns
  let r = arr.length;
  let c = arr[0].length;
  
  const recursion = (r1,c1,r2,c2) => {
    //out of bounds base case
    if(c1 < 0 || c1>=c || c2 < 0 || c2 >=c){
      return -Infinity;
    }
    //reaching last row base case
    if(r1 === r-1 && r2 === r-1){
      //when both reach the same cell in the last row
      if(c1 === c2) return arr[r1][c1];
      return arr[r1][c1] + arr[r2][c2];
    }
  
  //do recursion for the 9 combos
  /*
  since 2 people are there 
  run 1st loop for alice from -1 to 1
  run 2nd loop for bob from -1 to 1
  */
  let maxi = -Infinity
  for(let i=-1;i<=1;i++){
    for(let j=-1;j<=1;j++){
      if(c1 === c2){
      maxi = Math.max(maxi,arr[r1][c1] + recursion(r1+1,c1+i,r2+1,c2+j));
      } else {
      maxi = Math.max(maxi,arr[r1][c1] + arr[r2][c2] + recursion(r1+1,c1+i,r2+1,c2+j));
      }
    }
  }
  
  return maxi;
  
  };
  
  return recursion(0,0,0,c-1);
};

console.log(CherryPickUp(arr));
