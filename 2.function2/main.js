function palindrome(message){
    var message2 = '';
    for (var i=message.length-1; i>=0; i--){
        var message2 = message2 + message[i];
    }
    if (message == message2){
        return true;
    }
    else{
        return false;
    }
    
  }
  console.log(palindrome('hello')); 
  console.log(palindrome('abcba')); 