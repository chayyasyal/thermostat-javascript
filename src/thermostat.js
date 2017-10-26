function Thermostat(){
  this.MINIMUM_TEMP = 10;
  this.getCurrentTemp = 20;
  this.powerSaveModeOn = true;
  this.powerSaveModeOff = false;
  this.upTemp = 25;
  }

Thermostat.prototype.getCurrentTemp = function (){
  return this.temp;
};

Thermostat.prototype.increaseTemp = function() {
  this.getCurrentTemp +=1;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.getCurrentTemp === 10) {
    return this.MINIMUM_TEMP;
  };
  this.getCurrentTemp -=1;
};
Thermostat.prototype.powerSaveModeOn = function() {
  return this.powerSaveMode === true;
};
Thermostat.prototype.powerSaveModeOff = function() {
  return this.powerSaveMode === false;
};

Thermostat.prototype.up = function() {
    return this.getCurrentTemp +=1;
};
