'use strict';
//this is for the heading and changes depending on the time of day
var today =  new Date ();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Good Evening! Welcome to Bus Mall!';
} else if (hourNow > 12) {
  greeting = 'Good Afternoon! Welcome to Bus Mall!';
} else if (hourNow > 0) {
  greeting = 'Good Morning! Welcome to Bus Mall!';
} else {
  greeting = 'Welcome!';
}

document.write('<h1>' + greeting + '<h/1>');
