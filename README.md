#chrono.js


## Chrono
`new Chrono([timestamp])`

Initialize a new chrono object. If you set a number as first parameter, it will used as unix timestamp in milliseconds.

### .clone()
Copies/clones a chrono.js object, if you need a working copy that's not changing the original one.

### .getHour()
Returns the current hour from 0-23.

### .getMillisecond()
Returns the current millisecond from 0-999.

### .getMinute()
Returns the current minute from 0-59.

### .getSeconds()
Returns the current second from 0-59.

### .getYear()
Returns the current 4-digit year.

### .now()
Changes the date and time to the current date and time.