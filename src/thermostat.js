function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.tempIncrease = function(amount) {
  this.temperature += amount;
};

Thermostat.prototype.tempDecrease = function(amount) {
  if (this.checkMin() === true)
  console.log("Cannot go below 10 degrees");
  else {
    this.temperature -= amount
  };
};

Thermostat.prototype.checkMin = function() {
  this.temperature <= 10
  true;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
};
