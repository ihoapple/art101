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
    return "Gryffindor"
    }
    else if (mod == 1) {
    return "Ravenclaw"
    }
    else if (mod == 2) {
    return "Slytherin"
    }
    else if (mod == 3) {
    return "Hufflepuff"
    }
}
    var button = document.getElementById ("button") ;
    button.addEventListener ("click", function() {
    var name = document.getElementById ("input") .value;
    var house = sortingHat (name) ;
    newText = "<p>Congratulations" + name + "! The Sorting Hat has sorted you into " + house + "</p >";
    document.getElementById ("output"). innerHTML = newText;
    })