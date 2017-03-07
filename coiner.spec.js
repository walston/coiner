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
})
