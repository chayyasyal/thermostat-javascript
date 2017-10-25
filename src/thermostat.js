function Thermostat() {
  this.startTemp = 20;
  }

Thermostat.prototype.increaseTemp = function () {
  this.startTemp +=1;
};

Thermostat.prototype.decreaseTemp = function () {
  this.startTemp -=1;
};
