// let add7 = function(num){
//     return num + 7;
// }
// // console.log(add7(24));

// let multiply = function(num1, num2) {
//     return num1 * num2
// }
// // console.log(multiply(2,6));

// let capitalize = function(str){
//     return str = str[0].toUpperCase() + str.slice(1);
// }
// // console.log(capitalize("programming"));

// let lastLetter = function(lastStr) {
//     return lastStr.at(-1);
// }
// // console.log(lastLetter("Qudus"));


/*
1 - REPEAT-STRING
Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'
*/
const repeatString = function (string, num) {
	if (num < 0) return "ERROR";
	let repeatStringVal = "";
	for (i = 0; i < num; i++) {
		repeatStringVal += string;
	}
	return repeatStringVal;
};
// console.log(repeatString("hey", 20));

/*
2 - Reverse a String

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```
*/
const reverseString = function (stringVal) {
	stringVal = stringVal.split("").reverse().join("");
	return stringVal;
};
// console.log(reverseString("hello, AbdulQudus!"));

/*
3 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```
*/
const removeFromArray = function (arr, ...args) {
	return arr.filter((item) => !args.includes(item));
};
// console.log(removeFromArray([1, 2, 3, 4], 3));


