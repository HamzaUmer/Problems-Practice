/* Q. Write a JavaScript program to display the current day and time in the following format. */
//Solution:
let d = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("Today is : "+ day[d.getDate()]);
console.log("current Time is : " + d.getUTCHours() + " PM : " + d.getMinutes() + ":" + d.getSeconds())