function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.MAX_TEMP = 25;
};

Thermostat.prototype.tempIncrease = function(amount) {
  if (this._checkMax(amount) === true)
    return "Cannot go above " + this.MAX_TEMP + " degrees" ;
  else {
    this.temperature += amount;
  };
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
  this.MAX_TEMP = 32;
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
  this.MAX_TEMP = 25;
};

Thermostat.prototype._checkMax = function(amount) {
  if (this.temperature + amount > this.MAX_TEMP)
  return true;
};
