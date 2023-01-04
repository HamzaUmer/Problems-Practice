//Destructuring Array via rest elements and Print Array without first two elements of an array
function removeFirstTwo(list) {
  // Only change code below this line
   const [,, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);
