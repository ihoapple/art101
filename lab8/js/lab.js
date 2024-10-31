/**
 * Author:Yi Ho
 * Created:10.30.2024
 **/
var array = [7, 26, 32, 3, 76];
console.log(array);

function IsOdd(x){
    var results = (x % 2==1);
    return results;
}
console.log(IsOdd(147));
console.log(IsOdd(2024));
console.log(IsOdd(7));
console.log(IsOdd(30));

var OddResults = array.map(IsOdd);
console.log(OddResults);

var DoubledResults = array.map(function(x){
    var Results = x * 2;
    return Results;
});

console.log(DoubledResults);