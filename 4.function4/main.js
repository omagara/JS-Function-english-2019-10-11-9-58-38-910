function countWords(message){
    if (message != ''){
        var count = 1;
        for(var i=0; i<message.length; i++){
            if (message[i] == " "){
                count = count + 1;
            }
        }
    }
    console.log(count);
  }
  countWords('Good morning, I love JavaScript.'); // should return 5