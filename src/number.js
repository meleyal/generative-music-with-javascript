// import seedrandom from 'seedrandom'
// import cryptoRandomString from 'crypto-random-string'
//
// // const seed = '788215b'
// const seed = cryptoRandomString(7)
// console.log('seed:', seed)
// const rng = new seedrandom(seed)
//
// export const random = (lower, upper) => {
//   return lower + Math.floor(rng() * (upper - lower + 1))
// }

export const random = (lower, upper) => {
  return () => {
    return lower + Math.floor(Math.random() * (upper - lower + 1))
  }
}
