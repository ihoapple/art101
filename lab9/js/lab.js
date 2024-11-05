/**
 * Requirements: jQuery must be loaded for this script to work.
 * Author:Yi Ho
 * Created:11.3.2024
 **/
$("#challenge").append("<button id='button-challenge'>Special</button>");
$("button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

$("#problems").append("<button id='button-problems'>Special</button>");
$("button-problems").click(function(){
    $("#problems").toggleClass("special");
});

$("#results").append("<button id='button-results'>Special</button>");
$("button-results").click(function(){
    $("#results").toggleClass("special");
});