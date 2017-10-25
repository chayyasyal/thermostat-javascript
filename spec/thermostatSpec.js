describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees Celsius", function(){
    expect(thermostat.startTemp).toEqual(20);
  });
  it("can increase temperature", function(){
    thermostat.increaseTemp();
    expect(thermostat.startTemp).toEqual(21);
  });
  it("can decrease temperature", function(){
    thermostat.decreaseTemp();
    expect(thermostat.startTemp).toEqual(19);
  });

  it("has a minimum temperature of 10 degrees Celsius", function(){
    for(var i = 0; i < 11; i++){
      thermostat.decreaseTemp();
    };
    expect(thermostat.startTemp).toEqual(10);
  });
  it("has a power saving mode on by default", function(){
    expect(thermostat.powerSaveModeOn).toBe(true);
  });
});
