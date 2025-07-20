/*
LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
*/
const str = "cadbzabcd";
/*
BRUTE FORCE
*/
const LongestCommonSubStringWithoutRepeatingCharacters = (str) => {
  let n = str.length;
  let maxLength = 0;
  for(let i=0;i<n;i++){
    let set = new Set();
    let sub = "";
    for(let j=i;j<n;j++){
      if(set.has(str.charAt(j))){
        break;
      } else {
      sub+=str.charAt(j);
      set.add(str.charAt(j));
      let length = j-i+1;
      maxLength = Math.max(maxLength,length)
      }
    }
  }
  return maxLength
};
console.log(LongestCommonSubStringWithoutRepeatingCharacters(str))
/*
SLIDING WINDOW
*/
const LongestCommonSubStringWithoutRepeatingCharacters1 = (str) => {
  let n = str.length;
  let l = 0;
  let map = {};
  let maxLength = 0;

  for (let r = 0; r < n; r++) {
    let char = str.charAt(r);
    // If this character is in the map and its index is at or after l, update l
    if (map[char] !== undefined && map[char] >= l) {
      l = map[char] + 1;
    }
    // Update last seen index of char
    map[char] = r;
    // Update maxLength
    maxLength = Math.max(maxLength, r - l + 1); // Correct length calculation
  }

  return maxLength;
};

const str1 = "cadbzabcd";
console.log(LongestCommonSubStringWithoutRepeatingCharacters1(str1)); // 5
