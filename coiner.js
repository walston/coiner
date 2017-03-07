#! node

module.exports = function(initCoins) {
  const coins = initCoins || {
    dollar: 1,
    quarter: 0.25,
    dime: 0.10,
    nickel: 0.05,
    cent: 0.01
  }
  const precision = getPrecision(coins)

  return coiner

  function coiner(change) {
    let hand = {}
    change = change * Math.pow(10, precision)

    for(den in coins) {
      let coinValue = coins[den] * Math.pow(10, precision)

      let grab = Math.floor(change/coinValue)

      if (grab > 0) {
        hand[den] = grab
        change -= grab * coinValue
      }
    }

    return hand
  }

  function getPrecision(coins) {
    let precision = 0;
    for (den in coins) {
      let valueString = coins[den].toString().split('.')
      let coinPrecision = valueString[1] ? valueString[1].length : 0
      if (coinPrecision > precision) precision = coinPrecision
    }
    return precision
  }
}
