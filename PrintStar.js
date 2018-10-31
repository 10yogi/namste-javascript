var max_row_no = 10;
function PrintStar(no_of_star,no_of_space,cur_row_no){
  if(cur_row_no > max_row_no)
    return;
  var pyramid = "";
  for(var i = 0;i < no_of_space; ++i){
    pyramid = pyramid+" ";
  }
	for(var i = 0;i < no_of_star;++i){
    pyramid = pyramid+"*";
  }
  console.log(pyramid);
  PrintStar(no_of_star+2,no_of_space-1,cur_row_no+1);
}
PrintStar(1,max_row_no-1,1);
