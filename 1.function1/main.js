function reverseString(message){
  // wirte your code here
  var rString="";
  for(var i=message.length-1;i>=0;i--){
  	rString+=message[i];
  }
  return rString;
}