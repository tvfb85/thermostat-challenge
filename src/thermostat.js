function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.tempIncrease = function(amount) {
  this.temperature += amount;
};

Thermostat.prototype.tempDecrease = function(amount) {
  if (this._checkMin(amount) === true)
    return "Cannot go below 10 degrees";
  else {
    this.temperature -= amount
  };
};

Thermostat.prototype._checkMin = function(amount) {
  if (this.temperature - amount < 10)
  return true;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
};

Thermostat.prototype
