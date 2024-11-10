/**
 * lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   Requirements: jQuery must be loaded for this script to work.
 * Author:Yi Ho
 * Created:11.7.2024
 **/
function sortString(inputString) {
    return inputString.split('').sort().join('');
  }

$("#submit").click(function(){
const userName = $("#user-name").val();
userNameSorted = sortString(userName);
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});