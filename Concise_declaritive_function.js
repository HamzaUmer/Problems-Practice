/* Write Concise Declarative Functions with ES6
When defining functions within objects in ES5, we have to use the keyword function as follows:
*/

const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

/* With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax: */

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
