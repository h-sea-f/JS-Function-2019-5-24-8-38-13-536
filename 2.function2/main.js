function palindrome(message){
	if(message.length%2==0){
		for(var i=0,j=message.length-1;i<message.length/2;i++){
			if(message[i]!=message[j]) return false;
			else j--;
		}
		return true;
	}
	else{
		for(var i=0,j=message.length-1;i<message.length/2-0.5;i++){
			if(message[i]!=message[j]) return false;
			else j--;
		}
		return true;
	}
}