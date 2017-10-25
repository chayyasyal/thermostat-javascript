describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees Celsius", function() {
    expect(thermostat.startTemp).toEqual(20);
  });
});
