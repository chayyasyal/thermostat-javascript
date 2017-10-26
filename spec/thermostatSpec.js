describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees Celsius", function(){
    expect(thermostat.getCurrentTemp).toEqual(20);
  });
  it("can increase temperature", function(){
    thermostat.increaseTemp();
    expect(thermostat.getCurrentTemp).toEqual(21);
  });
  it("can decrease temperature", function(){
    thermostat.decreaseTemp();
    expect(thermostat.getCurrentTemp).toEqual(19);
  });

  it("has a minimum temperature of 10 degrees Celsius", function(){
    for(var i = 0; i < 11; i++){
      thermostat.decreaseTemp();
    };
    expect(thermostat.getCurrentTemp).toEqual(10);
  });
  it("has a power saving mode on by default", function(){
    expect(thermostat.powerSaveModeOn).toBe(true);
  });
  describe("when power save mode is on", function(){
    it("has a max temp of 25 degrees Celsius", function(){
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp).toEqual(25);
    });
  });

  it("can switch power saving mode off", function(){
    expect(thermostat.powerSaveModeOff).toBe(false);
  });
});
