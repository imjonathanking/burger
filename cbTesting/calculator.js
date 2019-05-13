var duh = require("./methods");

//this is writing a function
//you put placeholders in a function when writing it. 
function logResult(placeholder, placeholder2){
    console.log("placeholder 1: " + placeholder);
    console.log("placeholder 2: " + placeholder2);
}

var methods = {
    logResult: function(placeholder){
        console.log(placeholder)
    }
}



// logResult("hello", "mei");

//when calling|using a method, you are ACTUALLY sending values|data into it. 
//stop trying to define it within. (this is tripping you up)

num = 14; //this a number
//Later on you pass the var|num|etc...into a function. 
//WHEN you call the function and pass the parameter into it. 
//calling the function and using the num  on the same line. 
//DO NOT write and call function .. don't mix them together. 
//this is calling the method and function logResult.  
duh.increment(num, logResult); 





