function fibonacci(num){
  var stopper = 1;
  if(num == 0 || num == 1){
return 1}
  else{
    return fibonacci(num-1) + fibonacci(num-2)
  }
}
console.log(fibonacci(5));
