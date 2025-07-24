// i=1;
// n=10;

// for(let i =1; i < n; i++){
//     console.log(i);
// }

// sum of number 
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     sum += i;
// }
// console.log("Sum of numbers from 1 to 10 is: " + sum);

//while loop

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// sum of number using while loop
// let sum = 0;
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     sum += i;
//     i++;
// }
// console.log("Sum of numbers from 1 to 10 is: " + sum);

//print sum of any four numbers using while loop
// let numbers = [10, 20, 30, 40];  
// let sum = 0;
// let count = 0;

// while (count < numbers.length) { 
//     sum += numbers[count];
//     count++;
// }

// console.log("Sum of the four numbers is: " + sum);


// do while loop

//advanced loop
//for... of loop

// let fruits = [banana, apple,mango]

// for(fruit of fruits)
// console.log("fruits" + fruits)


//for loop 

//print * pattern 

// let n = 5;
// for (let i=1; i <=n; i++){
//     let str = "";
//     for (let j=1; j<=i; j++){
//         str += "*";
//     }
//     console.log(str);
// }

// //print even numbers from 1 to 10

// for (let i=1; i <=10; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


//break and continue

// let number =[1,3,5,7,8,10,12]

// for (let num of number){
//     if (num%2==0){
//         console.log(num);
//         break;
//     }
// }

// for (let i=1; i<=10; i++){
//     if (i==5){
//         continue;
//     }
//     console.log(i);
// }
// let count =0;

// for (let i=1; i<=100; i++){
//     if (i%2==0){
//         count++;
//         console.log(i);
//     }
//     if(count === 10){
//         break;
//     }
// }

//right angle triangle in decreasing order

// for ( let i = 5;  i >=1; i--){
//     let str = "";
//     for (let j=1; j<=i; j++){
//         str+="*";
//     }
//     console.log(str);
// }

//print 5 tables 

// for (i=5; i<=50; i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }

//***** 
// ****
//  ***
//   **
//    *

// let rows = 5;

// for (let i = 0; i < rows; i++) {          // Outer loop → rows
//     let line = "";

//     for (let j = 0; j < i; j++) {         // First inner loop → spaces
//         line += " ";
//     }

//     for (let k = 0; k < rows - i; k++) {  // Second inner loop → stars
//         line += "*";
//     }
//     console.log(line);
// }


