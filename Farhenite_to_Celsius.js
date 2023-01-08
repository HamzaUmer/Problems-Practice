//Use getters and setters to Control Access to an Object
// Only change code below this line
class Thermostat{
  constructor(temp_F) {
    this._farhenite = temp_F;
  }
  get temperature(){
    return (5/9) * (this._farhenite -32);
  }

  set temperature(cel) {
    this._farhenite = (cel * 9.0) / 5 + 32;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
