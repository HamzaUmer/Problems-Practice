class Planets {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("Musk will live into " + this.targetPlanet + "!");
  }
}

const musk = new Planets('Mars');
musk.takeOff();
