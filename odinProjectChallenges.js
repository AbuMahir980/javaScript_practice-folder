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
removeFromArray([1, 2, 3, 4], 3); // output: [1,2,4]
removeFromArray([1, 2, 3, 4], 3, 2));//output: [1, 4]
removeFromArray([1, 2, 3, 4], 7, "tacos"));//output: [1, 2, 3, 4]
removeFromArray([1, 2, 3, 4], 7, 2));//output: [1, 3, 4]
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));//output: []
removeFromArray(["hey", 2, 3, "ho"], "hey", 3));//output: [2, "ho"]
removeFromArray([1, 2, 3], "1", 3));//output: [1, 2]
```
*/
const removeFromArray = function (arr, ...args) {
	return arr.filter((item) => !args.includes(item));
};
// console.log(removeFromArray([1, 2, 3, 4], 3));



/**
 * 4 - sumAll
 * Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
 * sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
 * Hints
Think about how you would do this on pen and paper and then how you might translate that process into code:

make sure you pay attention to the function parameters
create a variable to hold the final sum
loop through the given numbers (link)
on each iteration add the number to the sum
return the sum after finishing the loop
 */
const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    let sum = 0

    if (num1 < num2){
        for (let i = num1; i <= num2; i++) {
					sum += i;
					// console.log(sum)
				}

    } else {
        for (let i = num2; i <= num1; i++) {
					sum += i;
					// console.log(sum)
				}
    }
    
    return sum;
};
// console.log(sumAll(1, 4));
// console.log(sumAll(1, 4000));
// console.log(sumAll(10, [90, 1]));
console.log(sumAll(123, 1));
// console.log(sumAll(10, "90"));

