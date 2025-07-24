// //for loop 

// 1.Print multication table of 5
// for (let i = 1; i <= 10; i++) {
//     console.log(5 * i);
// }

// // 2.Print right angle triangle of stars
// // *
// // **
// // ***
// // ****
// // *****

// for (let i=1; i <=5;i++){
//     let str = "";
//     for (let j=1; j<=i;j++){
//         str+="*";
//     }
//     console.log(str);
// }

// 3.Print first 20 even numbers
//  for(let i =1; i <=20;i++){
//     if (i%2==0){
//         console.log(i);
//     }
//  }

 //while loop

// 1. Sum of the digits of the number (1234) => 10
// let number = 1234;
// let sumOfDigits = 0;
// while (number > 0) {        
//     sumOfDigits += number % 10; 
//     number = Math.floor(number / 10);
// }
// console.log("Sum of digits:", sumOfDigits);

// 2. Print numbers in reverse

// let num = 12345;
// let reversedNum = 0;
// while (num > 0) {    
//     reversedNum = reversedNum * 10 + (num % 10);
//     num = Math.floor(num / 10);
// }
// console.log("Reversed number:", reversedNum);

// 3.Print squares of the numbers upto 10
//  let i = 1;
// let n = 10;
// while(i<=n){
//     console.log ("Square of", i, "is", i * i);
//     i++;
// }

// //do while loop
// 1. print first 10 odd numbers

// let i =1;
// let count =0;

// do{
//     if (i %2 ==1){
//         console.log(i);
//             count++;
//     }
//     i++;
// } while (count < 10);
// {
//     console.log("First 10 odd numbers printed.");
// }

// 2.find a factorial of a number

// let num = 5;
// let factorial = 1;
// let i = 1;
// do {
//     factorial *= i;
//     i++;
// }
// while (i <= num);
// console.log("Factorial of", num, "is", factorial);  

// //for of loop

// 1.print each character in the String

// let str = "hello sumedh";
//  for (let char of str){
//     console.log(char);
//  }


// 2.total marks from the Array

// let marks = [85, 90, 78, 92, 88];
// let totalMarks = 0;

// for (let mark of marks) {
//     totalMarks += mark;
// }
// console.log("Total marks:", totalMarks);

// 3. count vowels in a String
//  let sen = "this is the a sentence";
//  let vowels = "aeiou";
// let count =0;
// for (let char of sen){
//     if (vowels.includes(char.toLowerCase())) {
//         count++;
//     }
// }
// console.log("Number of vowels:", count);

// //for in loop

// 1.Print all the keys and values of an Object

// let obj = {name:"Yogesh", age: 25, city: "Pune"};
//  for (let key in obj){
//     console.log(key + ": " + obj[key]);
//  }

// 2.Count the number of properties in an Object

// let person  = {name: "John", age: 30, city: "New York", occupation: "Engineer"};
// let propertyCount = 0;
// for (let key in person) {
//     propertyCount++;
// }
// console.log("Number of properties in the object:", propertyCount);


// 3.create an oject of the subject and marks and add 10 to each subject using for in loop

// let sub = {math: 80, science: 75, english: 90, history: 85};
// for (let subject in sub ){
//     sub[subject] +=10;
//     console.log(subject + ": " + sub[subject]);
// }