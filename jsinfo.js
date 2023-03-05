"use strict";

//1
//alert("I'm – JavaScript!");

//2
// let admin;
// let name;
// name = "Ivan";
// admin = name;
// alert(admin);

//3
// let earth;
// let currentUser;

//4
// const BIRTHDAY = "15.11.1988";
// const age = someCode(BIRTHDAY);

//5
// let name = "Igor";
// alert( `hi ${1}` ); //  hi 1
// alert( `hi ${"name"}` ); // hi name
// alert(`hi ${name}`); // hi Igor

//Interaction: alert, prompt, confirm
//6
// let name = prompt("What is your name?", "user");
// alert(name);

//7
// let a = 1, b = 1;

// let c = ++a;
// let d = b++;
// result: a = 2; b = 2; c = 2; d = 1;

//8
// let a = 2;
// let x = 1 + (a *= 2);
// result: a = 4; x = 5;

//9
// "" + 1 + 0; //10
// "" - 1 + 0;  //-1
// true + false; //1
// 6 / "3";  //2
// "2" * "3"; //6
// 4 + 5 + "px";  //9px
// "$" + 4 + 5;  //"$45"
// "4" - 2;    //2
// "4px" - 2;  // NaN
// "  -9  " + 5;  //"  -9  5"
// "  -9  " - 5;  // -14
// null + 1;  // 1
// undefined + 1; // NaN
// " \t \n" - 2  // -2

//10
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// let res = Number(a) + Number(b);
// alert(res);

//11
// 5 > 4; // true
// "ананас" > "яблуко"; //false
// "2" > "12";  // true
// undefined == null;  // true
// undefined === null;  // false
// null == "\n0\n";  // false
// null === +"\n0\n";  // false

//12
// if ("0") {
//   alert("Привіт");
// }  //true

//13
// const userValue = prompt("What's the “official” name of JavaScript?", "");
// if (userValue === "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don't know? “ECMAScript!");
// }

//14
// const userValue = Number(prompt("Enter a number", ""));
// if (userValue > 0) {
//   alert("1");
// } else if (userValue === 0) {
//   alert("0");
// } else {
//   alert("-1");
// }

//15
// const result = a + b < 4 ? "Below" : "Over";

//16
// const message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : "";

//17
// alert(null || 2 || undefined); //2

//18
// alert(alert(1) || 2 || alert(3)); //1, 2

//19
//alert( 1 && null && 2 ); // null

//20
//alert(alert(1) && alert(2)); // 1, undefined

//21
//alert( null || 2 && 3 || 4 ); //3

//22
// const age = prompt("Enter age", "");
// if (age >= 14 && age <= 90) {
//   alert(age);
// }

//23
// const age = prompt("Enter age", "");
// if (!(age >= 14 && age <= 90)) { //variant 1
//   alert(age);
// }
// if (age < 14 || age > 90) { //variant 2
//   alert(age);
// }

//24
// if (-1 || 0) alert("перший"); // +
// if (-1 && 0) alert("другий"); //-
// if (null || (-1 && 1)) alert("третій"); // +

//25
// const user = prompt("Who's there?", "");
// if (!user) {
//   alert("Canceled");
// } else if (user === "Admin") {
//   const password = prompt("Password?", "");
//   if (password === "TheMaster") {
//     alert("Welcome!");
//   } else if (!password) {
//     alert("Canceled");
//   } else {
//     alert("Wrong password");
//   }
// } else {
//   alert("I don't know you");
// }

//26
// let i = 3;
// while (i) {
//   alert(i--);
// }   //1

//27
// let i = 0;
// while (++i < 5) alert(i);  //4

//28
// let i = 0;
// while (i++ < 5) alert(i); //5

//29
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

//30
// let number;
// do {
//   number = Number(prompt("Enter a number!", ""));
// } while (number <= 100);

//31
// let number = 100;
// const isPrime = (n) => {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };
// for (let i = 2; i < number; i++) {
//   if (isPrime(i)) console.log(i);
// }

//32
// const browser = prompt("Your browser:", "Firefox");
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

//33
// let a = Number(prompt("a?", ""));
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2,3");
//     break;
// }

//34
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm("Did parents allow you?");
//   }
// }
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }
// no difference

//35
// const userAge = Number(prompt("Enter age", "18"));
// checkAge(userAge);
// function checkAge(age) {
//   return age >= 18 ? true : confirm("Did parents allow you?");
// }
// function checkAge(age) {
//   if (age >= 18 || confirm("Did parents allow you?")) return true;
//   return false;
// }

//36
// function min(a, b) {
//   return a < b ? a : b;
// }

//37
// const number = Number(prompt("Enter a number", ""));
// const power = Number(prompt("Enter a power of number", ""));
// const pow = (x, n) => x ** n;
// alert(pow(number, power));

//38
// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

/////////////// 2 task in file shop.js