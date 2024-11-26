/**
 * lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   Requirements: jQuery must be loaded for this script to work.
 * Author:Yi Ho
 * Created:11.23.2024
 **/
   $(document).ready(function () {
    $('#activate').on('click', function() {
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/",
            type: "GET",
            success: function(data) {
                console.log(data);  // Log the received data to the console
            },
            error: function (jqXHR, textStatus, errorThrown) { 
                console.log("Error:", textStatus, errorThrown);  // Log any errors to the console
            }
        });
    });
});