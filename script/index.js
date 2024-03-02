
function colorChanger(){
    let userInput = document.getElementById("text").value;
    let isValid = colorChecker(userInput);
      if(isValid){
        document.body.style.backgroundColor = userInput;
        document.getElementById("input").textContent = userInput;
      }else{
        //alert("This color does not exist!")
      }
}

function colorChecker(userInput){ 
    userInput = userInput.toLowerCase();
    let s = new Option().style;
    s.color = userInput;
    let test1 = s.color == userInput;   
    return test1;
}

