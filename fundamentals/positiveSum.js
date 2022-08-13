function positiveSum(arr) {
    return arr.filter((num) => num > 0).reduce((num1,num2)=> num1 + num2,0);
  }

  console.log(positiveSum([1,2,3,4,5]));
  
  console.log(positiveSum([1,-2,3,4,5]));
  
  console.log(positiveSum([]));
  
  console.log(positiveSum([-1,-2,-3,-4,-5]));
  
  console.log(positiveSum([-1,2,3,4,-5]));