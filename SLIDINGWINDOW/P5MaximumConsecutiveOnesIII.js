/*
MAX CONSECUTIVE ONES III
Given an array of 1's and 0's. find the length of max1's 
by flipping at max k 0's
*/
/*
BRUTE FORCE
we can do it this way
longest subarray with atmost k zeros
generate all subarrays with given conditon and then find out the best
*/

const arr = [1,1,1,0,0,0,1,1,1,1,0];
const k = 2;

const MaxConsecutiveOnes = (arr,k) => {
  //length of the array
  let n = arr.length;
  
  //let subarrays
  let result = [];
  
  for(let i=0;i<n;i++){
    let currsubarr = [];
    let zeros = 0;
    for(let j=i;j<n;j++){
      let element = arr[j];
      if(element === 0){
        if(zeros < k){
          currsubarr.push(element);
          zeros++;
        } else {
          break;
        }
      } else {
        currsubarr.push(element);
      }
      result.push([...currsubarr])
    }
  }
  
  //get the maxlength of the subarrays
  let maxlength = -Infinity;
  
  for(let i=0;i<result.length;i++){
    let length = result[i].length;
    maxlength = Math.max(length,maxlength);
  }
  
  return maxlength;
};
/*
BRUTE FORCE 2
*/
const MaxConsecutiveOnes2 = (arr,k) => {
  //length of the array
  let n = arr.length;
  
  let maxlength = 0;
  
  for(let i=0;i<n;i++){
    let length = 0;
    let zeros = 0;
    for(let j=i;j<n;j++){
      let element = arr[j];
      if(element === 0){
        if(zeros < k){
          length++;
          zeros++;
        } else {
          break;
        }
      } else {
      length++;
      }
      maxlength = Math.max(maxlength,length);
    }
  }

  return maxlength;
};
/*
BRUTE FORCE 3
*/
const MaxConsecutiveOnes3 = (arr, k) => {
  let n = arr.length;
  let maxlength = 0;

  for (let i = 0; i < n; i++) {
    let zeros = 0;
    for (let j = i; j < n; j++) {
      if (arr[j] === 0) {
        zeros++;
      }

      if (zeros > k) {
        break;
      }

      maxlength = Math.max(maxlength, j - i + 1);
    }
  }

  return maxlength;
};
