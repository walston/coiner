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
