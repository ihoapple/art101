/**
 * lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   Requirements: jQuery must be loaded for this script to work.
 * Author:Yi Ho
 * Created:11.23.2024
 **/


// Define the API endpoint
let endpoint = "https://xkcd.com/json.html/";

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
  method: "GET", // HTTP method
  contentType: "application/json", // Payload type
  success: function(data) { // Success handler
    var comicObj = data;
    console.log(comicObj); 
    var comicHtml = '<h2>' + comicObj.title + '</h2>'
    + '<img src="' + comicObj.img 
    + '" alt="' + comicObj.alt 
    + '" title="' + comicObj.alt +'">';
    $('#output').html(comicHtml); 
  }, 
};

// Send the AJAX request
$.ajax(ajaxConfig);
