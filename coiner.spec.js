#! mocha
const assert = require('chai').assert;
const coiner = require('./coiner')

describe('Given yen', function() {
  let tab = coiner({
    "¥1000": 1000,
    "¥500": 500,
    "¥100": 100,
    "¥50": 50,
    "¥10": 10,
    "¥5": 5,
    "¥1": 1
  })

  it('¥345 should return ¥100: 3, ¥10: 4, ¥5: 1', function() {
    assert.deepEqual(tab(345), {"¥100":3, "¥10":4, "¥5":1})
  })
  it('¥73 should return ¥50: 1, ¥10: 2, ¥1: 3', function() {
    assert.deepEqual(tab(73), {"¥50":1, "¥10":2, "¥1":3})
  })
  it('-¥5 should return an empty object', function() {
    assert.deepEqual(tab(-5), {})
  })
  it('¥0 should return an empty object', function() {
    assert.deepEqual(tab(0), {})
  })
  it('Sending in a string should return an empty object', function() {
    assert.deepEqual(tab('Hello'), {})
  })
})

describe('Given US Dollar values', function() {
  let tab = coiner({
    "dollars": 1,
    "quarters": 0.25,
    "dimes": 0.10,
    "nickels": 0.05,
    "cents": 0.01
  })

  it('$1.67 should return dollars: 1, quarters: 2, dimes: 1, nickels: 1, cents: 2', function() {
    assert.deepEqual(tab(1.67), {dollars: 1, quarters: 2, dimes: 1, nickels: 1, cents: 2})
  })
  it('73¢ should return quarters: 2, dimes: 2, cents: 3', function() {
    assert.deepEqual(tab(0.73), {quarters: 2, dimes: 2, cents: 3})
  })
  it('$-5 should return an empty object', function() {
    assert.deepEqual(tab(-5), {})
  })
  it('$0 should return an empty object', function() {
    assert.deepEqual(tab(0), {})
  })
  it('Sending in a string should return an empty object', function() {
    assert.deepEqual(tab('Hello'), {})
  })
})

describe('Poorly ordered coins does not affect outcome', function() {
  it('Given f({"coin": 1, "bigger": 5})(7) should return bigger: 1, coin: 2', function() {
    let tab = coiner({"coin": 1, "bigger": 5})
    assert.deepEqual(tab(7), {bigger: 1, coin: 2})
  })
})

describe('Crazy named coins will not break it', function() {
  it('Given f({"万円": 10000, "千円": 1000})(17000) should return 万円: 1, 千円: 7', function() {
    let tab = coiner({"万円": 10000, "千円": 1000})
    assert.deepEqual(tab(17000), {"万円": 1, "千円": 7})
  })
})
十
