const GenerateAllSubArrays = (arr) => {
  let n = arr.length;
  let result = [];
  for(let i=0;i<n;i++){
    let currsubarr = [];
    for(let j=i;j<n;j++){
      currsubarr.push(arr[j]);
          result.push([...currsubarr]);
    }

  }
  
  return result;
};

console.log(GenerateAllSubArrays(arr));
