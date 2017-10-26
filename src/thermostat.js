function Thermostat(){
  this.MINIMUM_TEMP = 10;
  this.startTemp = 20;
  this.powerSaveModeOn = true;
  this.powerSaveModeOff = false;
  }

Thermostat.prototype.increaseTemp = function() {
  this.startTemp +=1;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.startTemp === 10) {
    return this.MINIMUM_TEMP;
  };
  this.startTemp -=1;
};
Thermostat.prototype.powerSaveModeOn = function() {
  return this.powerSaveMode === true;
};
Thermostat.prototype.powerSaveModeOff = function () {
  return this.powerSaveMode === false;
};
