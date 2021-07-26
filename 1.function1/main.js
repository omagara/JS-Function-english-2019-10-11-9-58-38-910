function reverseString(message){
    var reverse ='';
    for (var i=message.length-1; i>=0; i--){
        reverse = reverse + message[i];
    }
    console.log(reverse);
}
reverseString('hello')