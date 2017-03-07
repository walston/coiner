#! node

module.exports = function(initCoins) {
  const coins = initCoins || {
    dollar: 1,
    quarter: 0.25,
    dime: 0.10,
    nickel: 0.05,
    cent: 0.01
  }

  return coiner

  function coiner(change) {
    let hand = {}

    for(den in coins) {
      let grab = Math.floor(change/coins[den])
      
      if (grab > 0) {
        hand[den] = grab
        change -= grab * coins[den]
      }
    }

    return hand
  }
}
