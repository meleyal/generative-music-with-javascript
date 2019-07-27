// import seedrandom from 'seedrandom'
// import cryptoRandomString from 'crypto-random-string'
//
// // const seed = '788215b'
// const seed = cryptoRandomString(7)
// console.log('seed:', seed)
// const rng = new seedrandom(seed)
//
// export const random = (min, max) => {
//   return min + Math.floor(rng() * (max - min + 1))
// }

export const random = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1))
}
