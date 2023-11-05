// function random(number) {
// 	const result = Math.floor(Math.random() * number);
// 	return result;
// }
// // console.log(random(10));


// // Getting Milk from Justrite.
// function getMilk(money, costPerBottle) {   
//     // console.log("leaveHouse");
//     // console.log("moveleft");
//     // console.log("stop at FirstBank junction");
//     // console.log("turnRight");
//     // console.log("walk straight down laide Bus-Stop");
//     // console.log("Walk straight to the next 2 street after laide-Busstop");
//     // console.log("stop at the 2nd street adjacent NNPC service Station");
//     // console.log("Look to your left, adjacent towards your right is the Justrite Superstore");
//     // console.log("Cross the road");
//     // console.log("Walk into store");
//     // console.log("turnLeft & walk straight down to where refrigerators are aligned");
//     // console.log("Find your preferred MIlk");
//     // console.log(`Buy ${calcBottles(money,costPerBottle)} bottles of preferred milk.`)
//     // console.log("head to the cashier to make payment");
//     // console.log("step out of store");
//     // console.log("follow the same instruction home in opposite");
//     // return calcChange(money, costPerBottle);
// }

// function calcBottles(startingMoney, costPerBottle){
//     let numberOfBottles = Math.floor(startingMoney/costPerBottle);
//     return numberOfBottles;
// }

// function calcChange(startingAmount, costPerBottle){
//     let change = startingAmount % costPerBottle;
//     return change;
// }

// // console.log(`Hello Sir, here is your $${getMilk(10, 1.5)} change.`);



// //Love Calculator
// // prompt('What is your Name: ');
// // prompt('What is your Lover Name: ');

// let loveBond = Math.random() * 100;
// loveBond = Math.floor(loveBond) + 1;

// // alert(`${loveBond}%`);


// //Body Mass Index Calculator

// const bmiCalc = (weight, height) => {
// 	let newHeight = Math.pow(height, 2);
// 	let calcBmi = Math.round(weight / newHeight);
// 	let interpretation;
// 	if (calcBmi < 18.5) {
// 		interpretation = `Your BMI is ${calcBmi}, so you are underweight.`;
// 	}
// 	if (calcBmi >= 18.5 && calcBmi < 24.9) {
// 		interpretation = `Your BMI is ${calcBmi}, so you have a normal weight.`;
// 	}
// 	if (calcBmi > 24.9) {
// 		interpretation = `Your BMI is ${calcBmi}, so you are overweight.`;
// 	}
// 	return interpretation;
// };

// // console.log(bmiCalc(65, 1.8));

// const random = (number) => {
// 	const result = Math.floor(Math.random() * number);
// 	// return result;
// };
// // console.log(random(10));


// // //LOGICAL AND (&&) OPERATOR
// // /*
// //  * The logical AND(&&) operator returns a single value: the     
// //  * Boolean "true" or "false", based on the following rules:
// //  * - It returns "true" if both the values on its right and on 
// //  *   its left are evaluated to "true"
// //  * - It returns false in all other instances
// // */
// let currentTime = 10;
// // // console.log('logical && operator result: ');
// // // console.log(currentTime > 9 && currentTime < 17);//outputs true
// // //Its rules
// // // console.log(true && true);//outputs "true"
// // // console.log(true && false);// outputs "false"
// // // console.log(false && false);// outputs "false"
// // // console.log(false && true);// outputs "false"

// // //Adding Space
// // // console.log(' ');

// // //LOGICAL OR (||) OPERATOR
// // /*
// //  * Consists of two pipe symbols together (||)
// //  * It is used when checking if one of the given comparisons   
// //  * evaluates to "true".
// // */
// // let newTime = 7;
// // // console.log('logical || operator result: ');
// // // console.log(newTime < 9 || newTime > 17);//outputs true
// // //Its rules
// // // console.log(true || true);// outputs "true"
// // // console.log(true || false);// outputs "true"
// // // console.log(false || true);//outputs "true"
// // // console.log(false || false);//outputs "false"

// // //Adding Space
// // // console.log(' ');

// // // LOGICAL NOT (!) OPERATOR
// // /* This is represented with the exclamation mark (!) in 
// //  * JavaScript.
// //  * Think of it as a "SWITCH", which flips the evaluated boolean 
// //  * value from "true" to "false" and from "false" to "true"
// // */
// // let iAmHungry = true;
// // // console.log('logical ! operator result: ');
// // // console.log(iAmHungry);
// // // console.log("I have taken garri.");
// // // console.log("I am Hungry ", !iAmHungry);
// // // console.log(iAmHungry);//outputs true cause i have not reassigned the new value to the variable "iAmHungry";
// // iAmHungry = !iAmHungry;//outputs false because I have reassigned the logical operator NOT to the variable.

// // //Adding Space
// // // console.log(' ');

// // // MODULO OPERATOR (%)
// // //Returns the remainder of a division
// // let sitSpaces = 5;
// // let guestNumber = 22

// // let guestNotSitted = guestNumber % sitSpaces;
// // // console.log('modulo % operator result: ');
// // // console.log(guestNotSitted);


// // //Adding Space
// // // console.log(' ');

// // //EQUALITY OPERATOR (==)
// // // Checks if two values are equal
// // // It compares values and ignores data types
// // // console.log('equality == operator result: ');
// // // console.log(5 == 5);//true
// // // console.log(5 == 6);//false
// // // console.log(5 == "5")//true - Equality operators compares only values and not data types.

// // //Adding Space
// // // console.log(' ');

// // // STRICT EQUALITY OPERATOR
// // // Checks/compares for both the value and data types
// // // console.log('Strict equality === operator result: ')
// // // console.log(5 === 5);//true
// // // console.log(5 === "5")//false

// // //Adding Space
// // // console.log(' ');

// // // INEQUALITY OPERATOR !=
// // // checks/compares if two values are not the same, but does not // check the difference in data types.
// // // console.log('Inequality != operator result: ');
// // // console.log(5 != "5");//false cause it sees it as equal in value 

// // //Adding Space
// // // console.log(' ');

// // // STRICT INEQUALITY !== OPERATOR
// // // For it to return false, the compared values must be of the // same value and data types
// // // console.log('Strict inequality !== operator result: ');
// // // console.log(5 !== 5)// returns false cause it sees it as equal in value and data types
// // // console.log(5 !== "5")// returns true because they are not equal in data types.

// // //Adding Space
// // // console.log(' ');

// // // Concatenation Operator
// // // "+" joins two string data types together
// // // console.log('Concatenation (+) operator result: ');
// // // console.log('note' + 'book');//notebook
// // // console.log('inter' + 'net');//internet

// // // Adding Space


// // // Combining strings & numbers with concatenation
// // // JavaScript converts number to string, then concatenates the // two values
// // // The process of "under-the-hood" conversion by JS is known // as "coercion."
// // // JS coerces a number value to a string value, so it can run // the + operator on disparate data types
// // // console.log('Concatenating string & numbers operator result: ');
// // // console.log(365 + ' days');//365 days
// // // console.log(12 + " months");//12 months


// // // // 1. Given a string. write a program to check if the string contains 'script'
// let str_1 = "We can write a script to automate stuffs";
// if(str_1.includes('script')){
//     // console.log("Yes, I can find 'script'")
// } else {
//     // console.log("No! I can't find 'script'")
// }

// let str_2 = "Programming langs include: 'Java', 'Python', 'JavaScript' and 'Go'";
// if(str_2.includes('script')){
//     // console.log("Yes, I can find 'script'")
// } else {
//     // console.log("No! I can't find 'script'")
// }

// let str_3 = "We'll all have a swell weekend of coding!"
// if(str_3.includes('script')){
//     // console.log("Yes, I can find 'script'")
// } else {
//     // console.log("No! I can't find 'script'")
// }

// //2. Given a string 'name'. Write a program to check if this string is big string or not.
// // A string is big string if length of string is over 10 characters.

// let name1 = "JavaScript is getting kinky";
// // name1 = name1.length

// if (name1.length > 10) {
//     // console.log('true')
// } else {
//     // console.log("false")
// }

// // // Example 1
// // const str1 = "flower";
// // const str2 = "flow";
// // const str3 = "flight";

// // // Assume the first word as the prefix
// // let commonPrefix = str1;
// // // Check if the second word shares a common prefix
// // if (str2.startsWith(commonPrefix) && str3.startsWith(commonPrefix)) {
// //     // Update the common prefix based on the matching characters
// //     commonPrefix = commonPrefix.slice(0, str2.length);
// // } else 
// // if (str3.startsWith(commonPrefix)) {
// //     // Update the common prefix based on the matching characters
// //     commonPrefix = commonPrefix.slice(0, str3.length);
// // } else {
// //     // No common prefix, set it to an empty string
// //     commonPrefix = "";
// // }// Check if the third word shares a common prefix
// // else {
// //     // No common prefix, set it to an empty string
// //     commonPrefix = "";
// // }

// // console.log(commonPrefix);  // Output: "fl"


// // console.log(commonPrefix);  // Output: "fl"
// let strA = "It takes grit to be better at programming";
// let strB = "With a growth mindset, you can get better";

// if(strA === strB) {
//     // console.log(`Task 4 Output: true`);
// } else {
//     // console.log(`Task 4 Output: false`);
// }

// function multiplier(multi1, multi2) {
//     let result = multi1 * multi2;
//     return result;
// }
// // console.log(multiplier(10, 10))
// // console.log(multiplier(8, 45))
// // console.log(multiplier(60, 10))

// function divisor(div1, div2) {
//     let divResult = div1/div2
//     return divResult;
// }
// // console.log(divisor(2, 10))
// // console.log(divisor(20, 10))
// // console.log(divisor(100, 10))

// // // let firstName = "ola"
// // // let lastName = "ayinde"
// // // let age = 34

// // // console.log(`My name is ${firstName.replace(firstName[0],"O")} ${lastName.replace(lastName[0],"A")} and my age is ${age}`)
// // // console.log(`My firsrtname is ${firstName.replace(firstName[0],"O")}, my surname is ${lastName.replace(lastName[0],"A")} and my age is ${age}`)

// // let firstName = "lekan"
// // let lastName = "deola"
// // let age = 34

// // let intro1 = `My name is ${firstName.replace(firstName[0],firstName[0].toUpperCase())} ${lastName.replace(lastName[0],lastName[0].toUpperCase())} and my age is ${age}`
// // // console.log(intro1)
// // // console.log(' ')
// // let intro2 = `My firsrtname is ${firstName.replace(firstName[0],firstName[0].toUpperCase())}, my surname is ${lastName.replace(lastName[0],lastName[0].toUpperCase())} and my age is ${age}`
// // // console.log(intro2)

// // // //1. Write a program that encodes a string to a coded (h4ck3r 5p34k) version of the string. And remove spaces at beginning and end of string

// // // let newStr = "    abu wants to fowalenu with Javascript task. everywhere don choke baayi    ";
// // // let trimSpace = newStr.trim();
// // // // let codedStr = trimSpace.replaceAll("a", 4).replaceAll("e", 3).replaceAll("i", 1).replaceAll("o", 0).replaceAll("s", 5);

// // // // console.log(`Task 1 output: 
// // // // ${codedStr}`);
// // // function codedString(stringVal){
// // //   let strVal = strVal.replaceAll("a", 4)
// // //   .replaceAll("e", 3)
// // //   .replaceAll("i", 1)
// // //   .replaceAll("o", 0)
// // //   .replaceAll("s", 5);

// // //   return strVal;
// // // }

// // // console.log(codedString(trimSpace))


// // // //SPACE
// // // console.log(" ");

// // // // /*2. Write a program to find the longest common prefix (beginning letters) string amongst a set of strings.

// // // // If there is no common prefix, the output should be an empty string, "".*/
// // // let str1 = "flower"
// // // let str2 = "float"
// // // let str3 = "flong"
// // // let output_ = ""
// // // function longestCommPref(pref1, pref2, pref3) {
// // // if (str1[0] == str2[0] && str1[0] == str3[0] && str2[0] == str3[0]) {
// // //     output_ = output_ + str1[0]
// // //     }
// // //     else output_ = output_
// // // if (output_ == str1[0] && str1[1] == str2[1] && str1[1] == str3[1] && str2[1] == str3[1]) {
// // //     output_ = output_ + str1[1]
// // //     }
// // //     else output = output
// // // if (output_ == str1[0] + str1[1] && str1[2] == str2[2] && str1[2] == str3[2] && str2[2] == str3[2]) {
// // //     output_ = output_ + str1[2]
// // //     }
// // //     else output_ = output_
// // // if (output_ == str1[0] + str1[1] + str1[2] && str1[3] == str2[3] && str1[3] == str3[3] && str2[3] == str3[3]) {
// // //     output_ = output_ + str1[3]
// // //     }
// // //     else output_ = output_
// // //  return output_
// // // }

// // // console.log(longestCommPref(str1, str2, str3))

// // // //SPACE
// // // console.log(" ");

// // // // /*
// // // // 3.
// // // // */
// // // // let I = 1;
// // // // let V = 5;
// // // // let X = 10;
// // // // let L = 50;
// // // // let C = 100;


// // // // let eight =  V + I + I + I;
// // // // let ninety = X + C;
// // // // let fortyNine = L - I;

// // // // console.log("Task 3 output:" + " " )
// // // // console.log(eight);
// // // // console.log(ninety);
// // // // console.log(fortyNine);

// // // let  num = "CCXCV"
// // // let output = 0

// // // //charcter1
// // // function romanNum(numVals) {
// // // if (num[0] =="C") {
// // //     output = output + 100
// // //     }
// // //     else if(num[0] == "L") {
// // //         output = output + 50
// // //     }
// // //     else if(num[0] == "X") {
// // //         output = output + 10
// // //     }
// // //     else if(num[0] == "V") {
// // //         output = output + 5
// // //     }
// // //     else if(num[0] == "I") {
// // //         output = output + 1
// // //     }


// // // //character2
// // // if (num[1] == "C" && num[0] != "X") {
// // //     output = output + 100
// // //     }
// // //     else if (num[1] == "C" && num[0] == "X") {
// // //         output = output + 80
// // //     }
// // //     else if (num[1] == "L" && num[0] != "X") {
// // //         output = output + 50
// // //     }
// // //     else if (num[1] == "L" && num[0] == "X") {
// // //         output = output + 30
// // //     }
// // //     else if (num[1] == "X" && num[0] != "I") {
// // //         output = output + 10
// // //     }
// // //     else if (num[1] == "X" && num[0] == "I") {
// // //         output = output + 8
// // //     }
// // //     else if (num[1] == "V" && num[0] != "I") {
// // //         output = output + 5
// // //     }
// // //     else if (num[1] == "V" && num[0] == "I") {
// // //         output = output + 3
// // //     }
// // //     else if (num[1] == "I") {
// // //         output = output + 1
// // //     }


// // // //character3
// // // if (num[2] == "C" && num[1] != "X") {
// // //     output = output + 100
// // //     }
// // //     else if (num[2] == "C" && num[1] == "X") {
// // //         output = output + 80
// // //     }
// // //     else if (num[2] == "L" && num[1] != "X") {
// // //         output = output + 50
// // //     }
// // //     else if (num[2] == "L" && num[1] == "X") {
// // //         output = output + 30
// // //     }
// // //     else if (num[2] == "X" && num[1] != "I") {
// // //         output = output + 10
// // //     }
// // //     else if (num[2] == "X" && num[1] == "I") {
// // //         output = output + 8
// // //     }
// // //     else if (num[2] == "V" && num[1] != "I") {
// // //         output = output + 5
// // //     }
// // //     else if (num[2] == "V" && num[1] == "I") {
// // //         output = output + 3
// // //     }
// // //     else if (num[2] == "I") {
// // //         output = output + 1
// // //     }


// // // //character4
// // // if (num[3] == "C" && num[2] != "X") {
// // //     output = output + 100
// // //     }
// // //     else if (num[3] == "C" && num[2] == "X") {
// // //         output = output + 80
// // //     }
// // //     else if (num[3] == "L" && num[2] != "X") {
// // //         output = output + 50
// // //     }
// // //     else if (num[3] == "L" && num[2] == "X") {
// // //         output = output + 30
// // //     }
// // //     else if (num[3] == "X" && num[2] != "I") {
// // //         output = output + 10
// // //     }
// // //     else if (num[3] == "X" && num[2] == "I") {
// // //         output = output + 8
// // //     }
// // //     else if (num[3] == "V" && num[2] != "I") {
// // //         output = output + 5
// // //     }
// // //     else if (num[3] == "V" && num[2] == "I") {
// // //         output = output + 3
// // //     }
// // //     else if (num[3] == "I") {
// // //         output = output + 1
// // //     }


// // // //character5
// // // if (num[4] == "C" && num[3] != "X") {
// // //     output = output + 100
// // //     }
// // //     else if (num[4] == "C" && num[3] == "X") {
// // //         output = output + 80
// // //     }
// // //     else if (num[4] == "L" && num[3] != "X") {
// // //         output = output + 50
// // //     }
// // //     else if (num[4] == "L" && num[3] == "X") {
// // //         output = output + 30
// // //     }
// // //     else if (num[4] == "X" && num[3] != "I") {
// // //         output = output + 10
// // //     }
// // //     else if (num[4] == "X" && num[3] == "I") {
// // //         output = output + 8
// // //     }
// // //     else if (num[4] == "V" && num[3] != "I") {
// // //         output = output + 5
// // //     }
// // //     else if (num[4] == "V" && num[3] == "I") {
// // //         output = output + 3
// // //     }
// // //     else if (num[4] == "I") {
// // //         output = output + 1
// // //     }

// // // return output
// // // }

// // // console.log(romanNum(num))
// // // //SPACE
// // // console.log(" ");

// // // // /*
// // // // 4. Write a program that compares two strings strA and strB and outputs either true or false depending on whether the total number of 
// // // // characters in the first string is equal to the total number of characters in the second string.
// // // // */

// // // // let strA = "It takes grit to be better at programming";
// // // // let strB = "With a growth mindset, you can get better";

// // // // if(strA.length == strB.length) {
// // // //   console.log(`Task 4 Output: true`);
// // // // } else {
// // // //   console.log(`Task 4 Output: false`);
// // // // }
// // // // //SPACE
// // // // console.log(" ");

// // // // /* 
// // // // 5. Write a JavaScript program that capitalizes the first letter of each word of a given string.
// // // // */
// // // // let lowerCaseStr = "my name is qudus lawal";
// // // // let capitalizedStr = lowerCaseStr.replace("m",lowerCaseStr[0].toUpperCase()).replace("n",lowerCaseStr[3].toUpperCase()).replace("i", lowerCaseStr[8].toUpperCase()).replace("q", lowerCaseStr[11].toUpperCase()).replace("l", lowerCaseStr[17].toUpperCase());

// // // // console.log(`Task 5 otput: ${capitalizedStr}`);
// // // let capLetts= "frank is tough buddy"

// // // function capCase(capLetts){
// // // let firstOcc =capLetts.indexOf(" ")
// // // let subStr1 =capLetts[0].toUpperCase() +capLetts.slice(1, firstOcc)
// // // let secondOcc =capLetts.indexOf(" ", firstOcc + 1)
// // // let thirdOcc =capLetts.indexOf(" ", secondOcc + 1)
// // // let subStr2 =capLetts.charAt(firstOcc + 1).toUpperCase() +capLetts.slice(firstOcc + 2, secondOcc )
// // // let subStr3 =capLetts.charAt(secondOcc + 1).toUpperCase() +capLetts.slice(secondOcc + 2, thirdOcc)
// // // let subStr4 =capLetts.charAt(thirdOcc + 1).toUpperCase() +capLetts.slice(thirdOcc + 2)


// // // let uCase = subStr1 + " " + subStr2  + " " + subStr3 + " " + subStr4
// // // return uCase
// // // }
// // // console.log(capCase(capLetts))
// // // // //Space
// // // // console.log(" ");

// // // // /*
// // // // 6. The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to write a program that will take a number and return (IN STRING FORMAT) the amount formatting in naira and kobo.

// // // // 39.99 becomes N39.99

// // // // The rest of your team will make sure that the argument is sanitized before being passed to your program although you will need to account for adding trailing zeros if they are missing (though you won’t have to worry about a dangling period).

// // // // Examples:

// // // // 3 needs to become N3.00

// // // // 3.1 needs to become N3.10

// // // // Good luck! Your team knows they can count on you!
// // // // */
// // // // let amount = 40;
// // // // let amountInStr = "N" + amount.toFixed(2);
// // // // console.log(`Task 6 output: ${amountInStr}`);



// // // // let str1 = "xyab";
// // // // let str2 = "xzca";
// // // // let newV;

// // // // if(str2.includes(str1)){
// // // //   newV += 1
// // // //   console.log(newV)
// // // // }
// // // let name = "Abu"
// // // function greet(perName) {
// // //   let greeting = "Good Morning";
// // //   let name = greeting + " " + perName;
// // //   return name
// // // }

// // // console.log(greet("Abu"));


// // // let strA = "the quick brown fox";
// // // function everyLetter(letters){
// // //   for(let i = 0; i < strA.length; i++){
// // //     console.log(strA[i])
// // //   }
// // // }
// // // everyLetter(strA)

// // // function everyLetter(letters){
// // //   let strA = " ";
// // //   for(let i = 0; i < letters.length; i++){
// // //   // console.log(strA[i])
// // //   console.log(strA = letters[i])
// // //   }
// // //   return strA
// // // }
// // // // everyLetter("the quick brown fox")
// // // console.log(everyLetter("the quick brown fox"));

// // // let firstName = "lekan"
// // // let lastName = "deola"
// // // let age = 34

// // // console.log(`My name is ${firstName.replace(firstName[0],firstName[0].toUpperCase())} ${lastName.replace(lastName[0],lastName[0].toUpperCase())} and my age is ${age}`)

// // // console.log(`My firsrtname is ${firstName.replace(firstName[0],firstName[0].toUpperCase())}, my surname is ${lastName.replace(lastName[0],firstName[0].toUpperCase())} and my age is ${age}`)


// // // let firstName = "ola"
// // // let lastName = "ayinde"
// // // let age = 34

// // // let intro1 = `My name is ${firstName.replace(firstName[0],firstName[0].toUpperCase())} ${lastName.replace(lastName[0],lastName[0].toUpperCase())} and my age is ${age}`
// // // console.log(intro1)

// // // console.log(' ')

// // // let intro2 = `My first name is ${firstName.replace(firstName[0],firstName[0].toUpperCase())}, my surname is ${lastName.replace(lastName[0],lastName[0].toUpperCase())} and my age is ${age}`
// // // console.log(intro2)



// // // 1. Given a string s consisting of words and spaces, return the length of the last word in the string.
// // //   A word is a maximal substring consisting of non-space characters only.
// // //   Example 1:
// // //   Input: s = "Hello World"
// // //   Output: 5
// // //   Explanation: The last word is "World" with length 5.
// // //   Example 2:
// // //   Input: s = "   fly me   to   the moon  "
// // //   Output: 4
// // //   Explanation: The last word is "moon" with length 4.
// // //   Example 3:
// // //   Input: s = "luffy is still joyboy"
// // //   Output: 6
// // //   Explanation: The last word is "joyboy" with length 6.
// // // */
// // // let lastWord = function(str) {
// // //   let arr = str.split(" ");
// // //   console.log(arr)
// // //   let lastWord = arr[arr.length - 1];
// // //   console.log(lastWord)
// // //   return lastWord.length;
// // // }
// // // console.log(lastWord("Hello World"));
// // // console.log(lastWord("   fly me   to   the moon  "));
// // // console.log(lastWord("luffy is still joyboy"));
// // let lastWord = function(str){
// //   let str1 = str.trim();
// //   str1 = str1.substr(str1.lastIndexOf(" ") + 1).length;
// //   return str1
// // }
// // // // console.log(lastWord("Hello World"));
// // // // console.log(lastWord("   fly me   to   the moon  "));
// // // // console.log(lastWord("luffy is still joyboy"));


// // // A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// // // Given a string s, return true if it is a palindrome, or false otherwise.
// // //   Example 1:
// // //   Input: s = "A man, a plan, a canal: Panama"
// // //   Output: true
// // //   Explanation: "amanaplanacanalpanama" is a palindrome.
// // //   Example 2:
// // //   Input: s = "race a car"
// // //   Output: false
// // //   Explanation: "raceacar" is not a palindrome.
// // //   Example 3:
// // //   Input: s = " "
// // //   Output: true
// // //   Explanation: s is an empty string "" after removing non-alphanumeric characters.
// // //   Since an empty string reads the same forward and backward, it is a palindrome.
// // //   */
// //     // let s = "A man, a plan, a canal: Panama"
// //     // let s1 = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
// //     // // console.log(s1)
// //     // let s2 = s1.split("").reverse()
// //     //   // .join("");
// //     // console.log(s2)
// //     // if(s1 === s2){
// //     //   console.log(true)
// //     // }else{
// //     //   console.log(false)
// //     // }

// // let isAPalindrome = function(palindrome) {
// //   let s1 = palindrome.replaceAll(",", "").replaceAll(" ","").replaceAll(":", "").toLowerCase();
// //   // console.log(s1)
// //   let s2 = "";
// //   for(let i = s1.length - 1; i >= 0; i--){
// //     s2 += s1[i];
// //     // console.log(s2)
// //   }
// //   if(s1 === s2){
// //     return true
// //   }else{
// //     return false
// //   }
// // }
// // // console.log(isAPalindrome("A man, a plan, a canal: Panama"))
// // // console.log(isAPalindrome("race a car"))
// // // console.log(isAPalindrome(" "))


// // // 3. You are given two strings s and t. String t is generated by random shuffling string s and then add one more letter at a random position. Return the letter that was added to t
// // //   Return the letter that was added to t.
// // //   Example 1:
// // //   Input: s = "abcd", t = "abcde"
// // //   Output: "e"
// // //   Explanation: 'e' is the letter that was added.
// // //   Example 2:
// // //   Input: s = "aa", t = "aa"
// // //   Output: "a"
// // //   Explanation: 'a' is the letter that was added.
// // //   */
// // // let s = "abcd", t = "abcde"
// // // let s = "aa", t = "aa"
// // // let s = "a", t = "a"
// // // let s = "ab", t = "ab"
// // // let s = "abc", t = "abc"
// // // let s = "acb", t = "acb"
// // // let s = "a", t = "a"
// // // let s = "a", t = "b"
// // // let s = "a", t = "ac"
// // // let s = "a", t = "ab"
// // // let s = "a", t = "abc"
// // // let s = "a", t = "abcd"
// // // let s = "a", t = "abcde"

// //   let addedLetter = function(s,t){
// //     for(let i = 0; i < s.length; i++){
// //       for(let j = 0; j < t.length; t++){
// //         if(s[i] === t[j]){
// //           t = t.replace(t[j], "")
// //           break;
// //         }
// //       }
// //     }return t
// //   }
// // // console.log(addedLetter("abcd","abcde"))
// // // console.log(addedLetter("aa","aa"))
// // // console.log(addedLetter("a","a"))
// // // console.log(addedLetter("ab","ab"))
// // // console.log(addedLetter("abc","abc"))
// // // console.log(addedLetter("acb","acb"))
// // // console.log(addedLetter("a","a"))
// // // console.log(addedLetter("a","b"))
// // // console.log(addedLetter("a","ac"))
// // // console.log(addedLetter("a","ab"))
// // // console.log(addedLetter("a","abc"))
// // // console.log(addedLetter("a","abcd"))
// // // console.log(addedLetter("a","abcde"))


// // /*
// // Declare an empty array
// // Put some elements in the array
// // Remove some of the element from the end of the array
// // Hold the removed items in another array
// // Output the original array and the removed items array
// // */

// // let newArr = [];
// // newArr.push("Today", "is", 16, "of", "October", 2023)
// // // console.log(newArr)
// // let remArrElem = []
// // remArrElem.push(newArr.pop())

// // // console.log(newArr)
// // // console.log(remArrElem)

// // remArrElem.push(newArr.pop())
// // // console.log(remArrElem)

// // let newArr1 = []
// // newArr1.push(2, 4, "car", "bike", 7, "tesla")
// // let newArr2 = newArr1.splice(2, 1, "clothes","underwears", "watches")
// // // console.log(newArr2)
// // // console.log(newArr1)

// // let randArray = [9, 7, 8, 1, 2, 6, 5, 4, 3, 10]

// // let highNum = Math.max
// // // console.log(highNum)

// // /*
// // 1. Remove Element
// // Given an array, nums and a value val, 
// // write a function that removes all instances of that value in place and replace 
// // it with an underscore

// // sample cases
// // Input: nums = [3,2,2,3], val = 3
// //  Output: 2, nums = [2,2,,]

// //  Input: nums = [0,1,2,2,3,0,4,2], val = 2
// //  Output: 5, nums = [0,1,4,0,3,,,_]
// // */
// // /*pseudocode

// // */
// // let removeElement = function(nums, val){
// //   for(let i = 0; i < nums.length; i++){
// //     if(nums[i] === val){
// //       nums.splice(i, 1, "_")
// //     }
// //   }return nums
// // }
// // // console.log(removeElement([3,2,2,3], 3))
// // // console.log(removeElement([0,1,2,2,3,0,4,2], 2))
// // // console.log(removeElement([3,2,2,3], 2))
// // // console.log(removeElement([3,2,2,3], 5))
// // // console.log(removeElement([0,1,2,2,3,0,4,2], 0))
// // // console.log(removeElement([3,2,2,3], 1))
// // // console.log(removeElement([0,1,2,2,3,0,4,2], 4))


// // /*
// // Create a function that takes an array containing only numbers and return the first element.

// // Sample Cases
// // getFirstValue([1, 2, 3]) ➞ 1
// // getFirstValue([80, 5, 100]) ➞ 80
// // getFirstValue([-500, 0, 50]) ➞ -500
// // */

// // let getFirstValue = function(arr){
// //   return arr[0]
// // }
// // // console.log(getFirstValue([1, 2, 3]))
// // // console.log(getFirstValue([80, 5, 100]))
// // // console.log(getFirstValue([-500, 0, 50]))
// // // console.log(getFirstValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// // /*
// // Create a function that takes an array of numbers or letters and returns a string.

// // Sample Case
// // arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// // arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// // arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
// // */
// // let convertArrToString = function(arrOfNumsOrLetters){
// //   return arrOfNumsOrLetters.join('')
// // }
// // // console.log(convertArrToString([1, 2, 3, 4, 5, 6]))
// // // console.log(convertArrToString(["a", "b", "c", "d", "e", "f"]))
// // // console.log(convertArrToString([1, 2, 3, "a", "s", "dAAAA"]))
// // // console.log(convertArrToString(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]))
// // // console.log(convertArrToString([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// // // console.log(convertArrToString(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]))
// // // console.log(convertArrToString(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]))
// // // console.log(convertArrToString(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]))
// // // console.log(convertArrToString(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", ",", "<", ">", ".", "?", "/", "\\", "|", "~", " "]))


// // /* 
// // 4. Given an array of integers, find the sum of its elements.

// // For example, if the array [1,2,3]  is given, so return 6 . (ie 1+2+3) .

// // Print the sum of the array's elements as a single integer.

// // Sample Input
// // {1 2 3 4 10 11}
// // Sample Output = 31

// // Explanation: We print the sum of the array's elements: 1+2+3+4+10+11
// // */

// // let sumArray = function(arr) {
// //   let  = 0
// //   for (let i = 0; i < arr.length; i++) {
// //     sum = sum + arr[i]
// //   }
// //   return sum
// // }

// // // console.log(sumOfArray([1,2,3,4,10,11]))
// // // console.log(sumOfArray([1,2,3,4,5,6,7,8,9,10]))
// // // console.log(sumOfArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))
// // // console.log(sumOfArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]))

// // /*
// // Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// // xample 1:

// // Input: nums = [1,1,2]
// // Output: 2, nums = [1,2,_]
// // Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// // It does not matter what you leave beyond the returned k (hence they are underscores).
// // Example 2:

// // Input: nums = [0,0,1,1,1,2,2,3,3,4]
// // Output: 5, nums = [0,1,2,3,4,,,,,_]
// // Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// // It does not matter what you leave beyond the returned k (hence they are underscores).
// // */

// let removingDuplicates = nums => {
//   // let result = []
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i+1]) {
//         nums[count] = nums[i]
//         //result[count] = nums[i]
//         count++
//         }
//     } 
//     return count
//     // return result
// }

// // // console.log(removingDuplicates([1,1,2]))
// // // console.log(removingDuplicates([0,0,1,1,1,2,2,2,2,2,3,3,4]))

// let array1 = ["Africa","America","Asia",["Nig","SA","Egy","Ken",["Lag","Abj","PH"],["J'borg"],"Mar",["Rabat","Marakech"]]]
// //Marakech is in Mar not in Egy and is bigger than PH. Lag is bigger than most cities in Asia.
// // console.log(array1)
// let newArray1 = `${array1[3][7][1]} is in ${array1[3][6]} not in ${array1[3][2]} and is bigger than ${array1[3][4][2]}. ${array1[3][4][0]} is bigger than most cities in ${array1[2]}`
// // console.log(newArray1)

// const getStudScores = (names, scores) => {
    
//     let studScores = `${names[0]}: ${scores[0]}
//     ${names[1]}: ${scores[1]}
//     ${names[2]}: ${scores[2]}
//     ${names[3]}: ${scores[3]}
//     ${names[4]}: ${scores[4]}`

//     return studScores
// }
// // console.log(getStudScores(["fola", "funso", "mj", "frank", "semiu"],[45, 78, 89, 67, 99]))

// const getLastLetter = lastStr => {
//     return lastStr.at(-1);
// }
// // console.log(getLastLetter("Qudus"));

// // let userInput = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "))
// for(let i = 1; i <= userInput; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         // console.log('Fizz')
//     } else if(i % 3 === 0){
//         // console.log('Buzz')
//     } else if (i % 5 === 0){
//         // console.log ('FizzBuzz')
//     } else {
//         // console.log(i)
//     }
// }

// let newArr1 = [2, 4, "car", "bike", 7, "tesla"]
// // console.log(newArr1)
// let items = newArr1.splice(2, 1, "clothes","underwears", "watches")
// // console.log(items)
// // console.log(newArr1)

// let numArr3 = [89, 9, 56, 1, 45, 102, 6, 7, 0, 45, 66]
// let sortAscending = function(a,b){
//     return a-b
// }
// // console.log(sortAscending(numArr3.sort))
// // console.log(numArr3.sort(sortAscending))

// let sortDescending = function(a,b){
//     return b-a
// }
// // console.log(numArr3.sort(sortDescending))


// let arr = [4,3,2,5,7]
// let getIndices = function(a,b){
//     let res
//     for(i = 0; i <= a.length-1; i++){
//         for(j = 1; j < a.length; j++){
//             if(a[i] + a[j] === b){
//             return res = [i,j]
//             }
//         }
        
//     }
    
// }
// // console.log(getIndices(arr,9))


// let numsArr = [3,2,2,3]
// let val = 3

// let removeElement = function(nums, val){
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === val){
//             nums.splice(i, 1, "_")
//         }
//     }return nums
// }
// // console.log(removeElement(numsArr, val))

// let student2 = {
//     name: "joe",
//     dob: "23/23/23",
//     gender: 'male',
//     age: 21,
//     likes: ['football', 'pingpong', 'money', 'cars'],
//     friends: [{name: "selim", hobbies: ['playstation', 'tiktok']},{name: 'taofiq', hobbies: ['js', 'table-tennis']},{}],
//     laughMode: function () {
//         return(' 😊')
//     }
// }

// // console.log(student2.friends[1].hobbies[1])
// // console.log(student2.likes[1])
// // console.log(student2.friends[0].name)

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const cat of cats) {
//   // console.log(cat);
// }

// // using map() method
// const upperCats = cats.map(string => string.toUpperCase());
// // console.log(upperCats)

// //using filter method
// const filtered = cats.filter(cat => cat.startsWith('L'));
// // console.log(filtered)

// // let num = [2,13,4,5,27,2,1,45,45,234]
// const getMeanVal = num => {
//     let getReducedVal = num.reduce((sumOfTerms,curVals) => {
//         return sumOfTerms += curVals
//     },0)
//     return getReducedVal / num.length 
// }
// // console.log(getMeanVal([2,13,4,5,27,2,1,45,45,234]))

// const getMedianVal = (num) => {
// 	num.sort((a, b) => a - b);
// 	//   if(num.length % 2 == 0){
// 	//   return (Number(num.splice((num.length - 1)/2, 1)) + Number(num.splice(num.length/2, 1)))/2
// 	// } else {
// 	//     return Number(num.splice(num.length/2, 1))
// 	// }
// 	if (num.length % 2 == 0) {
// 		return (num[num.length / 2 - 1] + num[num.length / 2]) / 2;
// 	} else {
// 		return num[(num.length - 1) / 2];
// 	}
// };

// // console.log(getMedianVal([2,13,4,5,27,2,1,45,45]))
// // console.log(getMedianVal([2,13,4,5,27,2,1,45,45,234]))

// const getRangeVal = (nums) => {
// 	nums.sort((a, b) => a - b);
// 	return -(nums[0] - nums[nums.length - 1]);
// };

// // console.log(getRangeVal([2,13,4,5,27,2,1,45,45,234]))

// // const arrss = [1, 2, 3];
// // const max = arrss.reduce((a, b) => Math.max(a, b), -Infinity);

// let obj1 = {
// 	school: [
// 		[1, 2, 3],
// 		[4, 6, 7, { a: 8, b: 9, c: 10, d: [11, 12] }],
// 	],
// 	clinic: { a: 13, b: 14, c: 15, d: [16, 17] },
// };

// // console.log(obj1.school[1][3].d[0]);

// /*
//     You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

//     Increment the large integer by one and return the resulting array of digits.


//     Example 1:

//     Input: digits = [1,2,3]
//     Output: [1,2,4]
//     Explanation: The array represents the integer 123.
//     Incrementing by one gives 123 + 1 = 124.
//     Thus, the result should be [1,2,4].
//     Example 2:

//     Input: digits = [4,3,2,1]
//     Output: [4,3,2,2]
//     Explanation: The array represents the integer 4321.
//     Incrementing by one gives 4321 + 1 = 4322.
//     Thus, the result should be [4,3,2,2].
//     Example 3:

//     Input: digits = [9]
//     Output: [1,0]
//     Explanation: The array represents the integer 9.
//     Incrementing by one gives 9 + 1 = 10.
//     Thus, the result should be [1,0].

//     Constraints:

//     1 <= digits.length <= 100
//     0 <= digits[i] <= 9
//     digits does not contain any leading 0's.
// */
const plusOne = digits => {
    digits = (BigInt(digits.join("")) + BigInt(1))
			.toString()
			.split("")
			.map((item) => Number(item));
		return digits;
}
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([9]));

//Write a Switch Case
// let userInput = Number(prompt('Input any number between 1 & 5'));

switch (userInput) {
	case 1:
		console.log(`Your final score: ${Number(userInput * 2)}`);
		break;
	case 2:
		console.log(`Your final score: ${Number(userInput * 2)}`);
		break;
	case 3:
		console.log(`Your final score: ${Number(userInput * 2)}`);
		break;
	case 4:
		console.log(`Your final score: ${Number(userInput * 2)}`);
		break;
	case 5:
		console.log(`Your final score: ${Number(userInput * 2)}`);
		break;
	default:
		console.log(`out of range`);
}

// console.log(userInput);


