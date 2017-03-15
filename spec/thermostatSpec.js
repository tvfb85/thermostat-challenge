describe("Thermostat", function() {

  beforeEach(function() {
    thermo = new Thermostat();
  });
  describe("base temperature", function() {
    it("is set at 20 degrees", function() {
      expect(thermo.temperature).toEqual(20);
    });
  });

  
});
