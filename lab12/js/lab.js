/**
 * lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   Requirements: jQuery must be loaded for this script to work.
 * Author:Yi Ho
 * Created:11.15.2024
 **/
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor";
    } else if (mod == 1) {
        return "Ravenclaw";
    } else if (mod == 2) {
        return "Slytherin";
    } else if (mod == 3) {
        return "Hufflepuff";
    }
}

$(document).ready(function() {
   $("#button").click(function(){
       var name = $("#input").val();
       var house = sortingHat(name);
       sortingResult = "<p>Congratulations, "+name+ "! The Sorting Hat has sorted you into "+house+"!</p>";
       $("#output").html(sortingResult);   }); 
});  