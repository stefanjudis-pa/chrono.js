/**
 * constructor for chrono class
 *
 * @param {?number|object} timestampOrInit you can use a unix timestamp in
 *     milliseconds and also with negative values; or you're using nothing, then
 *     the date and time will be set to now
 */
var Chrono = function(timestampOrInit) {
  this._currentTime = timestamp || Date.now();
};


/**
 * clones the current chrono object
 *
 * @return {Chrono} clone of the current chrono object
 */
Chrono.prototype.clone = function() {
  return new Chrono(this._currentTime);
};


/**
 * Returns the current hour from 0-23
 *
 * @return {number} the current setted hour
 */
Chrono.prototype.getHour = function() {
  return (new Date(this._currentTime)).getHours();
};


/**
 * Returns the current minute from 0-59
 *
 * @return {number} the current setted minute
 */
Chrono.prototype.getMinute = function() {
  return (new Date(this._currentTime)).getMinutes();
};


/**
 * sets date and time to the current time
 *
 * @return {Chrono} this chrono object
 */
Chrono.prototype.now = function() {
  this._currentTime = Date.now();

  return this;
};


// are we using node.js?
if (module && module.exports) {
  module.exports = Chrono;
}
