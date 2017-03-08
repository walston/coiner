#! node

module.exports = function(initCoins) {
  const coins = validateCoins(initCoins)
  const precision = getPrecision(coins.values)

  return register

  function register(change) {
    let hand = {}
    change = change * Math.pow(10, precision)

    coins.values.forEach(function (v, i) {
      let value = v * Math.pow(10, precision)
      let grab = Math.floor(change/value)
      if (grab > 0) {
        hand[coins.names[i]] = grab
        change -= grab * value
      }
    })

    return hand
  }

  function getPrecision(coins) {
    return coins.reduce(function(precision, value) {
      let valueString = value.toString().split('.')
      let coinPrecision = valueString[1] ? valueString[1].length : 0
      return (coinPrecision > precision) ? coinPrecision : precision
    }, 0)
  }

  function validateCoins(coins) {
    let names = []
    let values = []

    for (den in coins) {
      let i = values.findIndex( n => n < coins[den] )
      if (i >= 0) {
        names = [].concat(names.slice(0,i), den, names.slice(i))
        values = [].concat(values.slice(0,i), coins[den], values.slice(i))
      }
      else {
        names = names.concat(den)
        values = values.concat(coins[den])
      }
    }

    return { names, values }
  }
}
