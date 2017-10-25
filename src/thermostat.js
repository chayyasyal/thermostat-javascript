function Thermostat() {
  this.startTemp = 20;
  }

Thermostat.prototype.increaseTemp = function () {
  this.startTemp +=1;
};
