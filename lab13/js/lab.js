/**
 * lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   Requirements: jQuery must be loaded for this script to work.
 * Author:Yi Ho
 * Created:11.18.2024
 **/
   for (let num = 1; num <= 200; num++) {
      $("#output").append("<p>" + FizzBuzz(num) + "</p>");
}
   function FizzBuzz(num){
    let str = "";
    if (num % 3 == 0) {
      str += "Fizz!"
    }
    if (num % 5 == 0) {
      str += "Buzz!"
    }
    if (num % 7 == 0) {
      str += "Boom!"
    }
    if(str === ""){
        str = num.toString();
        }
    return str;
}