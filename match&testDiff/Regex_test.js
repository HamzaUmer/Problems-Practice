// test() in Regular Expression just give true or false result like if Regex exists in string it will show true and if not so it will return false
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = codingRegex.test(extractStr);
console.log(result);//True
