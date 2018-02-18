function largestOfFour(arr) {
 var sortArr = arr.map(function(val){
 return val.sort(function(a,b){
   return b-a;
 });
 
 });
  
return sortArr.map(function(val){
  return val[0];
  
});
  
  //return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
