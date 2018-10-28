frequency ={}; 
var str = 'absaacdsie';
for(i = 0;i<10;++i){
	if(str[i] in frequency == false)
		frequency[str[i]]=1;
	else
		frequency[str[i]] =frequency[str[i]]+1;
}
//console.log(frequency);
for(c in frequency){
	console.log(c+" "+frequency[c]);
}







