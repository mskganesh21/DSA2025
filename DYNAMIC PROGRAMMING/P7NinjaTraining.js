/*
NINJA TRAINING
ninja is planning n days training schedule
he can do any of the 3 activites given 
each activity has merit points
he can't do same activity in 2 consecutive days
calculate the maximum merit points earned by ninja ?
given a 2d array which contains array at each index calculate the max merit points earned by ninja
given n*3 array 
*/
/*
Example:-
[[10,50,1],[5,100,11]]
2 days are given and each day each activity carries arr[day][activity] points
*/
/*
Here greedy approach doesn't work properly.
Hence try all possible ways which is recursion.
*/
/*
ALGO:
1. choose the best for each day and call recursion to handle it 
2. for recursion we'll have 2 parameters 1 is dayindex and the last used index
3. now when starting the recursion we'll give the index as 3 because when starting on the last day 
we can choose any choice
*/
/*
BRUTE FORCE
*/
let arr = [[10,50,1],[5,100,11]];

const NinjaTraining = (arr) => {
  //length of the array
  let n = arr.length;
  
  const recursion = (dayIdx,usedIndex) => {
    //base case 
    //on the first day we'll choice to choose the maximum of the day 
    if(dayIdx === 0){
      let maximum = 0;
      for(let i=0;i<3;i++){
        if(i !== usedIndex){
          maximum = Math.max(maximum,arr[0][i]);
        }
      }
      
      return maximum;
    }
    
    //recursive case
    let currMaximum = 0;
    for(let i=0;i<3;i++){
      //check if it is not the usedIndex and then proceed
      if(i !== usedIndex){
        let choice1 = arr[dayIdx][i] + recursion(dayIdx-1,i);
        currMaximum = Math.max(currMaximum,choice1);
      }
    }
    
    return currMaximum;
  };
  
  return recursion(n-1,3);
};

console.log(NinjaTraining(arr));
/*
MEMOISATION 1 
*/

const Memoisation1 = (arr) => {
  //length of the array
  let n = arr.length;
  
  let memo = {};
  
  const recursion = (dayIdx,usedIndex) => {
    //base case 
    //on the first day we'll choice to choose the maximum of the day 
    if(dayIdx === 0){
      let maximum = 0;
      for(let i=0;i<3;i++){
        if(i !== usedIndex){
          maximum = Math.max(maximum,arr[0][i]);
        }
      }
      
      return maximum;
    }
    
    //check if the value is in memo
    let key = `${dayIdx}&${usedIndex}`;
    console.log(key);
    if(memo[key] !== undefined) return memo[key];
    
    //recursive case
    let currMaximum = 0;
    for(let i=0;i<3;i++){
      //check if it is not the usedIndex and then proceed
      if(i !== usedIndex){
        let choice1 = arr[dayIdx][i] + recursion(dayIdx-1,i);
        currMaximum = Math.max(currMaximum,choice1);
      }
    }
    
    memo[key] = currMaximum;
    return memo[key];
  };
  
  return recursion(n-1,3);
};

console.log(Memoisation1(arr));
/*
MEMOISATION 2
*/

const Memoisation2 = (arr) => {
    //length of the array
  let n = arr.length;
  
let dp = [];
for (let i = 0; i < n; i++) {
  dp.push(new Array(4).fill(-1));
}

  const recursion = (dayIdx,usedIndex) => {
    //base case 
    //on the first day we'll choice to choose the maximum of the day 
    if(dayIdx === 0){
      let maximum = 0;
      for(let i=0;i<3;i++){
        if(i !== usedIndex){
          maximum = Math.max(maximum,arr[0][i]);
        }
      }
      
      return maximum;
    }
    
    //check if the value is in memo
    if(dp[dayIdx][usedIndex] !== -1) return dp[dayIdx][usedIndex];
    
    //recursive case
    let currMaximum = 0;
    for(let i=0;i<3;i++){
      //check if it is not the usedIndex and then proceed
      if(i !== usedIndex){
        let choice1 = arr[dayIdx][i] + recursion(dayIdx-1,i);
        currMaximum = Math.max(currMaximum,choice1);
      }
    }
    
    dp[dayIdx][usedIndex] = currMaximum;
    return dp[dayIdx][usedIndex];
  };
  
  return recursion(n-1,3);
};

/*
TABULATION
*/

const Tabulation = (arr) => {
  let n = arr.length;
  
  let dp = [];
for (let i = 0; i < n; i++) {
  dp.push(new Array(4).fill(-1));
}

for(let i=0;i<3;i++){
  let maxi = -Infinity;
  for(let j=0;j<3;j++){
    if(j !== i){
    maxi = Math.max(arr[0][j],maxi);
    }
  }
  dp[0][i] = maxi;
}

dp[0][3] = Math.max(arr[0][0],arr[0][1],arr[0][2]);

for(let i=1;i<arr.length;i++){
  for(let j=0;j<3;j++){
    //usedIndex
    if(dp[i][j] === -1){
      
    }
  }
}
};
