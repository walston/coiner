MacRonald's is tired of their employees giving out incorrect change.
===
And let's be honest, basic arithmetic is challanging, so MacRon would
like to implement a new cash-register format that displays easy exactly
*how many coins of each coin* the customer should recieve.

===

Write a function that takes in a numeric value and returns an object with the name of coins and an integer for how many coins.

```javascript
f(3.45) // => { dollars: 3, quarters: 1, dimes: 2 }
```

### How it works:

```javascript
const coiner = require('coiner')
const values = {
  "dollars": 1,
  "quarters": 0.25,
  "dimes": 0.10,
  "nickels": 0.05,
  "pennies": 0.01
}
const register = coiner(values);

register(5.45) // < {"dollars": 5, "quarters": 1, "dimes": 2}
register(2)    // < {"dollars": 2}
register(0.77) // < {"quarters": 3, "pennies": 2}
```

the `coiner` module is a function that takes in an init object
that object should consist of all names of coins & their respective values as `key: value` pairs.

The result of calling that `coiner` function is a `register` function: it takes in a `Number` and returns an object consisting of only the necessary denominations required to rebuild the passed in value (although the remainder is floored, and as such 1.9¢ will be reduced to 1¢ upon return).
