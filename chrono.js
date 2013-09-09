/**
 * constructor for chrono class
 *
 * @param {?number|object} timestampOrInit you can use a unix timestamp in
 *     milliseconds and also with negative values; or you're using nothing, then
 *     the date/time will be set to now (depending on your system)
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
