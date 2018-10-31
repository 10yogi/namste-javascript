var arr = [1,2,3,'a','Techracers',5];
var two_times_array = arr.map(function(ele){
  return typeof ele ==='number' ? 2*ele: ele; 
});
console.log(two_times_array);
