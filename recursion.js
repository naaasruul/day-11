function sum(arr, n) {
  // Only change code below this line
// var product = 0;
// for( var i = 0; i < n; i++){
//   product = product + arr[i]
//   }
//   return product;
var product = 0;
if(n == 0){
  return 0
}
else{
  return sum(arr, n-1)+ arr[n-1];
}
  // Only change code above this line
}

console.log(sum([2, 3, 4], 1))
