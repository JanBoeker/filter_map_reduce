//Challange: 
import emojipedia from "./emojipedia";

var meaningArray = emojipedia.map((item) => item.meaning.substr(0, 100));
console.log(meaningArray);

















// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// function double(x) {
//     return (2 * x);
// }

// var newNumbers = numbers.map(double);
// console.log("Map:");
// console.log(numbers);
// console.log(newNumbers);


// //Filter - Create a new array by keeping the items that return true.
// console.log("Filter:");
// newNumbers = numbers.filter(function(num) {
//     return !(num%2);
// });
// console.log(newNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.
// console.log("Reduce:");
// var newNumber = numbers.reduce(function(accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
// console.log(newNumber);

// //Find - find the first item that matches from an array.
// console.log("Find");
// var firstNumberGreaterThanTen = numbers.find(function(num) {
//     return num > 10;
// });
// console.log(firstNumberGreaterThanTen);

// //FindIndex - find the index of the first item that matches.
// console.log("FindIndex");
// firstNumberGreaterThanTen = numbers.findIndex((num) => num > 10);
// console.log(firstNumberGreaterThanTen);
// console.log(numbers[firstNumberGreaterThanTen]);