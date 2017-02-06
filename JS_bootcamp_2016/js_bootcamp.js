// Udemy Javascript Bootcamp
// -Basics
// -Types and Scope
// -Arrays
// -Objects
// -Errors & Debugging
// -Functions
// -Built-in Functions
// -Document Object Model
// -Events
// -Ajax
// -Projects

// Where does Javascript actually run: In Browser and not on a server.
// It is quicker and closer to user. there is a chance to run it on Nodejs server.
// ES5 vs ES6 ES=ECMAScript, Javascript is a dialect of ECMAScript. ES5 is the most current language on the most browser..
// ES6 is next. Focus on this bootcamp focus is on ES5.
// Learn the most if Instructor focuses on one section at a time to "dive deeper into understanding".
// We will be using a site called jsbin.com/?/js,console (only highlight JavaScript and Console Tab to run code Immediately)

// Basics: Executing JS, Variables, Types, Functions, Control Structure, Operators.
// var1 = 'Hello there!';
// console.log('Hello there!');
// Best practice to have the JS file seperate from html.
// If JS is turned off in user browser I can use the <noscript>in html with any message</noscript> 
// tag to display a message to the viewer.
// The script tag has to have a closing tag to work as I've learned through Error.
// <script src="blablabla"> code here </script> Code in between script tag will not run since the file src has the priority.
// The order of Script files matters because of the order of execution.

// Variables: Store Data/Values or a reference to other variable(ex var1 = var2)
// Some names are reserved and can't be used as Variable names.
// Data can be stored as: numbers:Intergers and Floating Point(same type in JS), 
// strings, boolean true/false (its own data type var1 = true), Object or Array (var1 = [1, "two", 3]),
// undefined(unset), null(empty/nothing/0 and strangely an Object at the same time), NaN(typically an error type).
// Arrays start with the index of 0. Console.log(var1[0]); would acess the first value.
// Cant have a number before var name (1var doesn't work).

// var var1 = {
// 	name: 'Max'
// };

// console.log(var1.name); //Accessing the name: property to get the value 'Max'
// console.log(typeof var1); //Checking the type

// var1 = 5; // Javascript Automatically recognizes as a variable without var keyword,
// but it does more work and makes it function slower. Using:
// "use strict" //mode it doesn't allow you to be sloppy.
// using both var1 $ Var1 will create two seperate variables because JS is Case-sensitive.

// var var1 = 5;
// console.log(var1);

// var1 = 10; //This is proper JS because the var keyword is not needed,
// // if the variable has already been set and you are just reassigning to a new value.
// // you can change the type as well var1 = '10'; most languages other than JS don't allow this so it's good practice not to. 
// console.log(var1);

// // Hoisting: you can declare the var Keyword after using in the code and it wil still order it. But not good practice.
// var1 = 5;
// console.log(var1);

// var var1;
// /////////////////
// calc(); Hoisting works here as well!

// function calc(){// Functions dont get called automatically like console.log does by itself.
// 	console.log('inside function');
// }
// calc();// The parentaces are important to call a function

// var calc = function(){
// 	console.log('inside function');
// };//making a variable name/function without a name will still be called with calc().. 
// // you also need the ; at the end curly brace for this method. But Hoisting will not work with this method.
// calc();

// console.log(typeof calc);//the variable is a type of function.

////

// function calc(){
// 	console.log('inside function');
// }

// var anotherFn = calc();
// 	console.log(anotherFn);//this will be undefined because calc() is the execute call or return value.

///

// function calc(){
// 	var strVar = 'inside function';
// 	return strVar;
// }

// var returned = calc();
// console.log(returned);

// function calc(num1, num2){
// 	return num1 + num2;
// }
//
// var returned = calc(10, 8);
// console.log(returned);

// or

// var calculator = calc;
// console.log(calculator(15,2));

///Control structures

// var condition = -2;
// var anothCon = true;

// if (condition) {
// 	console.log('Executed!');
// }
// else if(anothCon){
// 	console.log('bsdfsdfds');
// }
// else{
// 	console.log('not Executed yo!')
// }

// console.log(1 == true);
// console.log(1 === true);
// console.log(2 == true);
// you can apply the execition of a function to a variable and pass parameters into it as if it was a funct call.
///////////

// function calc(num1, num2){
// 	return num1 + num2;
// }

// var returned = calc(8, 10);
// console.log(returned);

// var luckyNumber = 8;
//
// switch (luckyNumber) {
// 	case 1:
// 		console.log("It's 1 yo!");
// 	case 8:
// 		console.log("It's 8 yo!");
// 	default:
// 		console.log('Not a Lucky Number :-(');
// }
// ///////nested loops
//
// for (var i = 0; i < 5; i++) {
// 	for(var j = 0; j < 2; j++){
// 		console.log(i * j);
// 	}
// }
//
// for (var i = 0; i < 5; i++) {
// 	if (i == 1) {
// 		break;
// 	}
// 	console.log(i);
// }
//
// for (var i = 0; i < 5; i++) {
// 	if (i == 1) {
// 		continue;
// 	}
// 	console.log(i);
// }
//
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 2; j++) {
//     if (i == 1) {
//       continue;
//     }
//     console.log('inside inner loop, j = ' + j);
//   }
//   console.log(i)
// }
// ///// more for loop variations
//
// for (var i = 2; i < 5; i++) {
//   console.log(i);
// }
//
// ////// infinite loop decrement i--
//
// for (var i = 2; i < 3; i--){
//   console.log(i);
// }
//
//// breaking out
//
// for (var i = 2; i < 3; i--){
//   if (i == -1){
//     break;
//   }
//   console.log(i);
// }
// ////////// not counting anymore, breaking out since i == 5 on the second iteration

// for (var i = 2; i < 5; i += 3){
//   console.log(i);
// }

//////////////

// for (var i = 0; i < 5; i++){
// 	console.log(i);
// }

////////

// var number = 5;

// while (number < 7) {
// 	console.log(number);
// 	number++;
// }

////infinite loop, don't run

// while (true) {
// 	console.log(number);
// 	number++;
// }

/////////

// var condition = true;
// var i = 2;

// while (condition) {
// 	if (i == 3) {
// 		condition = false;
// 	}
// 	console.log(i);
// 	i++;
// }

///////// do while loop

// var condition = false;

// do { //will execute no matter what
// 	console.log('Executed');
// }
// while (condition);


////////////////////// Addition

// var a = 5;
// var b = 10;

// a += b;

// console.log(a);

//// floating point numbers

// var a = 5.2;
// var b = 4.5;

// console.log(a + b);

//// concat strings

// var a = 'Join';
// var b = ' us';

// console.log(a + b);

/////

// var a = 'Join';
// var b = 3;

// console.log(a + b);

// var a = 3;
// var b = 'Join';

// console.log(a + b);

// var a = false;
// var b = 'Join';

// console.log(a + b);

// var a = [3, 4];
// var b = 'Join';

// console.log(a + b);

// var a = 12;
// var b = '1';

// console.log(a + b);

// var a = 12;
// var b = true;

// console.log(a + b);

// var a = true;
// var b = true;

// console.log(a + b);

// var a = 12;
// var b = null;

// console.log(a + b);

// var a = 3;
// var b = undefined;

// console.log(a + b);

// var a = 3;
// var b = NaN;

// console.log(a + b);

///////////////////// Subtraction

// var a = 10;
// var b = 3;

// a -= b;

// console.log(a);

// var a = 'split us';
// var b = 'us';

// console.log(a - b);

// var a = 12;
// var b = '1';

// console.log(a-b);

// ///////////////////// Multiplication

// var a = 3;
// var b = 10;

// a *= b;

// console.log(a);

// var a = 3;
// var b = '10';

// a *= b;

// console.log(a);

// ///

// var a = 1.3;
// var b = 2.2;

// console.log(a * b); //bug with multiplying two FP numbers in JS

// if (a * b == 2.86) {
// 	console.log(true);
// } else {
// 	console.log(false); // false due to the bug not computing the exact number
// }

// if ((a * b).toFixed(2) == 2.86) {
// 	console.log(true); // true due to tofixed(); shaving off the extra decimal amount
// } else {
// 	console.log(false); 
// }
// ////

// var a = 1;
// var b = 2.2;

// console.log(a * b); //no bug with multiplying a FP with an Integer

////////////// division and modulus

// var a = 3;
// var b = 10;

// a /= b;
// console.log(a);

// a = 10;
// b = 3;

// a %= b;
// console.log(a);

// console.log(10 / 0); // infinity and beyond
// console.log(10 / Infinity); // 0

// var a = 30.2;
// var b = 10.5;

// a /= b;

// console.log((a).toFixed(3)); // same bug fix again, (3) rounded to the 3 dec places

//////// ==(value coercion possible) vs ===(strict value equality also checking type) same with != vs !== 
// <, >, <=, >=

// console.log(0 == null); false, //null can't be compared at all except with undefined

/////// Boolean operators

// if ((1 == 1) && (2 == 2)) {
// 	console.log("It's true!");
// } else {
// 	console.log('false');
// }

// if ((1 == 1) || (2 == 3) || ('penis' == 'vagina')) {
// 	console.log("It's true!");
// } else {
// 	console.log('false');
// }

// if ((1 == 1) && (2 == 5) || (5 !== 1)) {
// 	console.log("It's true!");
// } else {
// 	console.log('false');
// }

////////////////

// var a = 5;
// var b = 5;

// console.log(a == b ? 'Equal' : 'Not Equal'); // shortened if else statement

//////////// Types and Scopes

/* primitive types(number, string, boolean) are stored in memory. 
 if I set a = 5 and b = a then b is actually set to the value of 5 and not a. If I change
 the value of a then b is still going to be = 5.


 reference types(objects, arrays):
 var a = { a:5 };
 then
 var b = a;
 */

// var aNumber = 5;
// console.log(aNumber);//5
// var anotherNumber = aNumber;
// console.log(anotherNumber);//5
// aNumber = 12;
// console.log(aNumber);//12
// console.log(anotherNumber);//5, example of primitive type pointing towards the original value in memory

// var array = [1, 2, 3];//objects are reference types
// var anotherArray = array;
// console.log(array);//[1, 2, 3]
// console.log(anotherArray);//[1, 2, 3]

// array.push(4);
// console.log(array);//[1, 2, 3, 4]
// console.log(anotherArray);//[1, 2, 3, 4], example of reference type where the value actually points 
// //to the value of array, even when updated.
// //but if you re-assign array to a completely new object, anotherArray isn't updated with the new value.
// //This distinction can cause common bugs.

////////////// Scope

/* global scope by default.. is within the window object that is the top-most level that runs in the browser.
 local scope is nested inside the global scope. A function for example has it's own function where variables
 are not accessible to the global. But global scope variables are accessible to the local functions.
 */

// var test = 'global scope';

// function localScope() {
// 	var test = 'local scope';
// 	console.log(test);
// }

// localScope();
// console.log(test);

//////// Arrays [1, 2, 3]
// var array = [1, 2, 3];//index 0:1, 1:2, 2:3

// // array[1] = 100; //set the second item to 100
// // array[3] = 4; //create a fourth item with value of 4

// // console.log(array);//[1, 100, 3, 4]

// // array.forEach(function(i) {
// // 	console.log(i);
// // });

// array.push(); //method to add an element to the end
// array.pop(); //removes from the end 
// array.shift(); //removed first element
// array.unshift();//add a first element

// array.unshift('new');
// console.log(array.indexOf('new'));

//////

// var array = [1, 2, 3, 4];

// console.log(array.reduce(function(total, value) {
// 	return total + value;
// }));

// array.unshift('new');
// array[array.indexOf('new')] = 'old';

// var newArray = ['join', 'me'];

// console.log(array.join(newArray));
// console.log(array);
// console.log(newArray);

////// Objects

// var person = {
// 	name: 'Andrew',
// 	"last_name": 'Eskenaaazi',
// 	age: 23,
// 	details: {
// 		hobbies: ['rock-climbing', 'Art', 'cooking'],
// 		location: 'Denver, Colorado'
// 	},
// 	greet: function() {
// 		console.log('Hello! ' + this.name + ', Welcome to the site!');
// 	}
// };

// person.greet();

// console.log(person['last_name']);
// console.log(typeof person);
// console.log(typeof person.name);

// person['last_name'] = 'E';

////////

// var anotherPerson = new Object();
// anotherPerson.name = 'Anna';
// anotherPerson.age = 30;
// anotherPerson.details = {
//   preference: 'right-handed',
//   shoe_size: '6'
// }
// console.log(anotherPerson);

/////////

// var prototype = {
// 	age:55,
// 	details: {
// 		one_rep_max: '200',
// 		weight: '150'
// 	}
// };

// var aPerson = Object.create(prototype);
// aPerson.name = 'Lyle';

// console.log(aPerson); 

// /////// objects by default have a prototype

// var rock = {
// 	name: 'Rock',
// 	mass: 65,
// 	weight: 100
// };

// //console.log(rock.__proto__); //Don't use this in production, Danger

// Object.prototype.throw = function () {
// 	console.log(this.name + ' has been thrown...');
// };

// var boulder = Object.create(rock);
// boulder.name = 'Boulder';
// var pebble = Object.create(rock);
// pebble.name = 'Pebble';

// boulder.throw();
// pebble.throw();

// rock.throw();

// // console.log(boulder.__proto__ == rock);// unsafe method, but true
// // console.log(boulder.__proto__.__proto__ == Object.prototype);

// console.log(Object.getPrototypeOf(boulder) == rock);

//// Constructor functions, method to create objects

// function abrahamLincoln() {
// 	this.name = 'default name';
// 	this.personalGreeting = function() {
// 		console.log("Hello, I am " + this.name + '!');
// 	};
// }

// abrahamLincoln.prototype.greet = function() {
// 	console.log('Hello!');//'this' refers to itself in the current scope/level
// };

// var abeLincoln = new abrahamLincoln();
// abeLincoln.name = 'Honest Abe';
// abeLincoln.greet();
// abeLincoln.personalGreeting();

// // console.log(abeLincoln.__proto__ == abrahamLincoln.prototype);

// function createPerson(name, age) {
// 	this.name = name;
// 	this.age = age;

// }

// var andrew = new createPerson('Andrew', 23);
// var anna = new createPerson('Anna', 23);

// console.log(andrew, anna);

//// Even literal objects boil down to a constructor function

/*
 var person = {
 name: 'Max',
 age: 27
 };

 console.log(person instanceof Object); //yes, it's true

 //same object as

 var person = new Object();
 person.name = 'Max';
 person.age = 27;

 //but this next example does'nt have the Object prototype due to null and can be set to any proto via arguments,
 var person = Object.create(null);
 person.name = 'Max';
 person.age = 27;

 //console.log(person.toString()); //Error!
 console.log(person instancof Object); //false
 */

//// the this keyword is not always refering to the same level. This always refers to the left part of the dots level
// to which it is included

// function fn(message) {
// 	console.log(message + this);
// }

// //fn(); //refers to the window Object

// var obj = {
// 	obfn: fn
// };

// var person = {
// 	name: 'Max'
// };

// obj.obfn();//refers to the obj.. left of the dot

// // but if I want 'this' to always point toward the window object or original bindinging in fn

// obj.obfn.bind(this, 'passing an argument')();
// // obj.obfn.bind(this)();//bound to window or
// obj.obfn.bind(person, 'Hello')();//bound to this.name in the object which is max
// obj.obfn.call(person, 'Hello');//direct call
// obj.obfn.apply(person, ['Hello']);//direct call and apply takes the argument as an array

// // project idea, build my personal site

// stackoverflow answer for formatting money

// Number.prototype.formatMoney = function(c, d, t){
// var n = this, 
//     c = isNaN(c = Math.abs(c)) ? 2 : c, 
//     d = d == undefined ? "." : d, 
//     t = t == undefined ? "," : t, 
//     s = n < 0 ? "-" : "", 
//     i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
//     j = (j = i.length) > 3 ? j % 3 : 0;
//    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
//  };

// var account = {
// 	checking: 120000,
// 	_personName: 'default',
// 	withdraw: function(amount) {
// 		this.checking -= amount;
// 		console.log('You withdrew $' + amount.formatMoney(2, '.', ',') + ', new balance is: $' + this.checking.formatMoney(2, '.', ','));
// 	}
// };

// //// add/configure obj properties and methods 

// Object.defineProperty(account, 'deposit', {
// 	value: function(amount) {
// 		this.checking += amount;
// 		console.log('You deposited $' + amount.formatMoney(2, '.', ',') + ', new balance is: $' + this.checking.formatMoney(2, '.', ','));
// 	}
// });

// //// another example

// Object.defineProperty(account, 'acctName', {
// 	value: 'IDe000-1', //value is built-within defineProperty method
// 	writable: false,
// 	enumerable: true,
// });

// Object.defineProperty(account, 'personName', {
// 	get: function() {
// 		return 'acctHolder: ' + this._personName;
// 	},
// 	set: function(personName) {
// 		if (personName == 'Andrew' ) {//prevent specific values from being set
// 			this._personName = personName;
// 		}
// 	}
// });

// account.withdraw(1000);
// account.deposit(4300);
// console.log(account.acctName);
// account.acctName = 'IDe000-3'; //will not work/overwrite because I set writable to false. name will still be IDe000-1.
// console.log(account.acctName);
// account.personName = 'Andrew';
// console.log(account.personName);

///////// Built-in methods and properties

// var person = {
// 	name: 'Max',
// 	age: 27,
// 	greet: function() {
// 		console.log('Hello');
// 	}
// };

// for (var field in person) {
// 	console.log(field + ':');
// 	console.log(person[field]);
// }

// console.log('name' in person);//check if property exists

// delete person.name;

// console.log(person.name);

//////////////// debugger in chrome

//////////////// Functions(Advanced)

//// closures

// function generator(input) {
// 	var number = input;
// 	return function() {
// 		return number * 2;
// 	};
// }
//
// var calc = generator(900);
// var calcAgain = generator(1000);
//
// console.log(calc());
// console.log(calcAgain());

/////// Immediately Invoked Function Executions IIFE's

// (function calc() {
// 	console.log('Calc');
// })();
//
// (function calc() {
// 	var number = 10;
// 	console.log(number);
// })();
//
// console.log(number);

/// reduces global scope pollution
//
// var obj = {};
//
// (function calc(input) {
// 	obj.name = "Max";
// })(obj);
//
// console.log(obj);

//// built-in methods and properties

// function message(msg) {
// 	console.log(msg);
// 	console.log(arguments);//keyword to print all passed arguments
// }
//
// message('Hi!', 10);//10 is not a valid/used argument but it still is console logged as an object

// function message(message) {
// 	console.log(msg);
// }
//
// var message = msg;
//
// console.log(msg.length);// the length of arguments it expects, which is 1

///
// var msg = function(message) {
// 	console.log(message);
// };
//
// console.log(msg.name);

//////// built in Objects and Methods

// setTimeout(function() {
// 	console.log('Finished!');
// }, 2000);
//
// var intervalPing = setInterval(function() {
// 	console.log('Ping!');
// }, 500);
//
// setTimeout(function() {
// 	clearInterval(intervalPing);
// }, 2500);

//// Parsers
//
// var a = 'FBBS1234';
// var b = 10;
// var c = 10.3;
//
// var text = 'Any text';
//
// console.log(parseInt(a, 16));// output: 4027
// console.log(b.toString());
// console.log(c.toFixed(2));
// console.log(text.length);// includes white space
// console.log(text[2]);// 'y'
// console.log(text.charAt(2));// 'y', a string is just an array of characters
//
// //// string functions

// var string = "this is any random string...";
// var stringWhiteSpace = "         this is any random string...           ";
//
// console.log(string[6]);
// console.log(string.length);
// console.log(string.charAt(6));
// console.log(string.concat(' add a new string to it'));
// console.log(string.toUpperCase());
// console.log(string.split(' '));
// console.log(stringWhiteSpace.trim());

//// Math object
//
// var pi = Math.PI;
// var e = Math.E;
// var a = -3;
// var b = 1.343;
// var c = 1.99;
// var d = 2;
// var rndm = Math.floor(Math.random() * 100) + 1;
//
// console.log(pi);
// console.log(e);
// console.log(Math.abs(a));
// console.log(Math.round(b));
// console.log(Math.ceil(b));
// console.log(Math.floor(c));
// console.log(Math.exp(d));
// console.log(Math.log(e));
// console.log(Math.max(1, 100, 12, 1000));
// console.log(Math.min(1, 100, 12, 1000));
// console.log(Math.random());
// console.log(rndm);
//
// //// date object
//
// var today = new Date();
// var aDate = new Date(1993, 1, 05);
// var aDateBefore = new Date(1993, 1, 04);
//
// console.log(today.toString());
// console.log(aDate.toString(), aDateBefore.toString());
// console.log(aDate.toString() + ' - ' + today.toString());
// console.log(Date.parse('2016/05/20'));
// console.log(today.getDate());
// console.log(today.getDay());

// Check out developer.mozilla.org/en-US/docs/web/javascript/reference/Global_Objects/Date

//// Regular Expressions, searching regex(do your own research)
//
// var string = 'abc';
//
// var pattern = /bc/;
//
// console.log(pattern.exec(string));//gives us the match
// console.log(pattern.test(string));//tests if match is a hit
// console.log(string.match(pattern));//same as the first console.log

/////////// The DocumentObjectModel

// console.log(window);//All available properties on the window object
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(outerWidth);//+ any borders beyond the page
// console.log(outerHeight);
//
// localStorage.setItem('key', 1000);//store data in our running application sessionStorage is more temporary
//
// console.log(localStorage.getItem('key', 1000));
// console.log(window.location);
// window.open('https://www.google.com');//popup window method
//
// //////// location object
// console.log(location);//holds the host, url, pathname... window.location is the same as location
// console.log(location.pathname);
// //location.replace('https://www.google.com');//replaces url and loads it
// //location.reload();//reloads the page

///////////// Document Object
//
// console.log(document);//not helpful by itself
// console.log(document.title)//page title
// console.log(document.body)//page body
// console.log(document.body.children)//page body html tags with attributes and properties
// console.log(document.body.children[0]);//h1 element
// console.log(document.body.children[0].textContent = 'Something Else');//Change it without reloading the page
// document.body.children[0].style.backgroundColor = 'salmon';//Change color without reloading the page

/// there are easier ways to select these elements and element properties

/////////// Traversing the DOM

console.log(document.body.children[0].children[0]);
console.log(document.body.children[0].children[0].textContent);
console.log(document.body.firstElementChild.tagName);
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.textContent);
//parentElement is used to go back up the element hirearchy

//// selecting elements more convienantly

console.log(document.getElementsByTagName('li'));
/*
 Output:
 0: li
    childNodes: ...
    children: ...
    classList: ...
    className: ...
 1: li
 2: li
*/

console.log(document.getElementsByClassName('simple'));// effective to get an array of all elements with this class
/// Query selector(gives only the first element unless you use querySelectorAll method

console.log(document.querySelector('h1'));//You can select elements by class, name, id, tag name all in one method.
console.log(document.querySelector('.simple'));
console.log(document.querySelectorAll('li'));//Selected all li tags not just the first one
console.log(document.querySelectorAll('#easy'));
/*
 Output:
  0: body#easy
  1: li#easy
 */
document.querySelectorAll('#easy').style.backgroundColor = 'salmon';
document.querySelector('.simple').style.backgroundColor = 'salmon';
document.querySelectorAll('.simple')[1].style.backgroundColor = 'salmon';//the second element
document.querySelectorAll('.simple')[1].textContent = 'Whatever wateva';

var p = document.createElement('p');
p.textContent = 'A new Paragraph';
p.style.fontSize = '17px';

var a = document.querySelectorAll('a')[1];
a.appendChild(p);// put p inside of the link tag

var li = document.querySelectorAll('li')[1];// looks better
li.appendChild(p);
li.insertBefore(p, a);

///////////// event handlers

// window.onload = function () {
//   console.log('window loaded!');
// };

////

// var btn =
//   document.querySelector('button');
//
// btn.onclick = function() {
//   console.log('Clicked');
// };
//
// document.onclick = function() {
//   console.log('Clicked anywhere on the page!');
// };

////

// var btn =
//   document.querySelector('button');
//
// btn.addEventListener('click', firstListener);
// btn.addEventListener('click', secondListener);
//
// function firstListener() {
//   console.log('first Listener');
// }
//
// function secondListener() {
//   console.log('second Listener');
// }

////

// var btn =
//   document.querySelector('button');
//
// btn.addEventListener('click', firstListener);
// btn.addEventListener('click', secondListener);
//
// setTimeout(function() {
//   btn.removeEventListener('click', firstListener)
// }, 2000);
//
// function firstListener() {
//   console.log('first Listener');
// }
//
// function secondListener() {
//   console.log('second Listener');
// }
//
// ////
//
// var inner =
//   document.querySelector('#inner');
//
// var outer =
//   document.querySelector('#outer');
//
// inner.addEventListener('click', innerListener);
// outer.addEventListener('click', outerListener);
//
// function innerListener(event) {
//   //console.log(event.target); // get direct access to element object
//   console.log(event.clientX, event.clientY); // coordinates, There are many useful event object prop
//   console.log(event.bubbles);//check(true and false) for propagation for other elements..
//   event.stopPropagation();//prevents the outer div from being included with the event/propagated.
//   console.log('Clicked Inner Div!');
// }
//
// function outerListener(event) {
//   console.log('Clicked Outer Div!');
// }

/*
 <div id="outer" style="width: 100px;
 height: 100px;
 background-color: salmon;">
 <div id="inner" style="width: 35px;
 height: 35px;
 background-color: turquoise;">
 </div>
 </div>
 */

/* you can load or post data within JS with AJAX and XML requests
Often times will use a library or framework to handle this
 */

//// GET

// var http = new XMLHttpRequest();
// var url = 'https://jsonplaceholder.typicode.com/posts';
// var method = 'GET';
//
// http.open(method, url);
// http.onreadystatechange = function() {
//   if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//     console.log(JSON.parse(http.responseText)[0]);//index 0
//   } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
//     console.log('error');
//   }
// };
//
// http.send();

//// POST

// var http = new XMLHttpRequest();
// var url = 'https://jsonplaceholder.typicode.com/posts';
// var method = 'POST';
//
// var data = 'title=Post%20Title&body=Body';
//
// http.open(method, url);
// http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// http.onreadystatechange = function() {
//   if (http.readyState === 4 && http.status === 201) {
//     console.log(JSON.parse(http.responseText));
//   } else if (http.readyState === 4 && http.status !== 201) {
//     console.log('error');
//   }
// };
//
// http.send(data);

///////////// JQuery

///////////// Angular

///////////// writing modular code

/////////////
