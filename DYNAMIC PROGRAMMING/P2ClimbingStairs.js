/*
STEPS TO IDENTIFY IF IT IS A DP PROBLEM
1. THEY'LL ASK COUNT THE NUMBER OF WAYS
2. GIVE ME THE MIN/MAX OF SOMETHING 
3. GIVE ME THE BEST WAY
*/
 
/*
CLIMBING STAIRS PROBLEM:
given n return the no of distinct ways we can reach n
at a given time we can climb only 1 or 2 steps at max.
*/
/*
BRUTE FORCE
*/
const ClimbingStairs = (n) => {
//guard clause
if(n===0) return 1;
if(n===1) return 1;
if(n===2) return 2;
/*
FOR THIS PROBLEM CONSIDER THE PROBLEM 
AS AN ARRAY FROM 0 TO N 
NOW WORK ON EACH INDEX AND PROCEED
*/ 

const recursion = (n) => {
  //base cases
  
  if(n===0) return 1;
if(n===1) return 1;
if(n===2) return 2;

//jump 1 step 
let OneStepJump= recursion(n-1);
//jump 2 step
let TwoStepJump;
if(n>=2){
TwoStepJump = recursion(n-2);
} else {
TwoStepJump = 0;
}
//return the sum of both ways 
return OneStepJump + TwoStepJump
};  
  
return recursion(n);  
};

console.log(ClimbingStairs(5));
