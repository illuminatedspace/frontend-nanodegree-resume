$("#main").append("Liz Phillips");

var firstName = "Liz";
var age = 25;

console.log(firstName);

var awesomeThoughts = "I am " + firstName + " and I am AWESOME!";

console.log(awesomeThoughts);

var email = "lizkristinaphillips@gmail.com";
var newEmail = email.replace ("gmail", "hired");

console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

console.log(funThoughts);

$("#main").append(funThoughts);