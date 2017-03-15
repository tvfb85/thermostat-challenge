describe("Base Temperature", function() {

  beforeEach(function() {
    thermo = new Thermostat();
  });
  // describe("", function() {
    it("is set at 20 degrees", function() {
      expect(thermo.baseTemp).toEqual(20);
    });
  // });
});
