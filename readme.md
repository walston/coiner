# Aren't you tired of counting coins in your head?
### Is 73¢ 2 quarters and 3 dimes? or 2 dimes? there's got to be a better way

Let's be honest: basic arithmetic is challenging, so I've implemented a module that can can tell you *exactly how many coins* you should give your customer.

===

Simply call my function that takes in a numeric value and it will return an object with the name of each coin and a number for how many coins of each.

```javascript
f(3.45) // { dollars: 3, quarters: 1, dimes: 2 }
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

register(5.45) // {"dollars": 5, "quarters": 1, "dimes": 2}
register(2)    // {"dollars": 2}
register(0.77) // {"quarters": 3, "pennies": 2}
```

the `coiner` module is a function that takes in an init object consisting of all names of coins & their respective values as simple `key: value` pairs.

The result of calling the `coiner` function is a `register` function, which in turn takes in a `Number` and returns an object consisting of only the necessary denominations required to rebuild the passed in value (although the remainder is floored, and as such 1.9¢ will be reduced to 1¢ upon return).
