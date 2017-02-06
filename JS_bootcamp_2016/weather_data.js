"use strict";

function Weather(cityName, description) {//Caps function name to signify a constructor function
  this.cityName = cityName;
  this.description = description;
  this._temperature = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
  get: function() {
    return this._temperature;
  },
  set: function(value) {
    this._temperature = (value * 1.8 + 32).toFixed(2) + "F\u00B0";
  }
});
