describe("Thermostat", function() {

  beforeEach(function() {
    thermo = new Thermostat();
  });

  describe("temperature", function() {
    it("default is set at 20 degrees", function() {
      expect(thermo.temperature).toEqual(20);
    });
    it("goes up", function() {
      thermo.tempIncrease(5);
      expect(thermo.temperature).toEqual(25);
    });
    it("goes down", function() {
      thermo.tempDecrease(10);
      expect(thermo.temperature).toEqual(10);
    });
    it("doesn't go below 10 degrees", function() {
      thermo.tempDecrease(10);
      expect(thermo.tempDecrease(1)).toEqual("Cannot go below 10 degrees")
    });
  });

  describe("power-saving mode", function() {
    it("can turn power-saving mode off", function() {
      console.log(thermo);
      thermo.powerSavingOff();
      expect(thermo.powerSaving).toEqual(false);
    });
    it("can turn power-saving mode on", function() {
      thermo.powerSavingOff();
      console.log(thermo);
      thermo.powerSavingOn();
      expect(thermo.powerSaving).toEqual(true);
    });
    it("changes the max temperature while power-saving is on", function() {
      thermo.tempIncrease(5);
      expect(thermo.tempIncrease(1)).toEqual("Cannot go above 25 degrees when in power-saving mode")
    });
  });
});
