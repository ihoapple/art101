/**
 * Author:Yi Ho
 * Created:10.23.2024
 **/
// Define Variables
 //array
myTransport = [ "Lexus ES", "Bus", "Bicycle"];

myMainRide = {
    make: "Lexus",
    model: "ES",
    color: "black",
    year: 2019,
    age: function(){
        return 2024 - this.year;
    }
}

//output
document.writeln("These are my main transports: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

