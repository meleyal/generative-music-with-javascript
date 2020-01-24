export const pitches = {
  rest: null,
  a0: 21,
  as0: 22,
  b0: 23,
  c1: 24,
  cs1: 25,
  d1: 26,
  ds1: 27,
  e1: 28,
  f1: 29,
  fs1: 30,
  g1: 31,
  gs1: 32,
  a1: 33,
  as1: 34,
  b1: 35,
  c2: 36,
  cs2: 37,
  d2: 38,
  ds2: 39,
  e2: 40,
  f2: 41,
  fs2: 42,
  g2: 43,
  gs2: 44,
  a2: 45,
  as2: 46,
  b2: 47,
  c3: 48,
  cs3: 49,
  d3: 50,
  ds3: 51,
  e3: 52,
  f3: 53,
  fs3: 54,
  g3: 55,
  gs3: 56,
  a3: 57,
  as3: 58,
  b3: 59,
  c4: 60,
  cs4: 61,
  d4: 62,
  ds4: 63,
  e4: 64,
  f4: 65,
  fs4: 66,
  g4: 67,
  gs4: 68,
  a4: 69,
  as4: 70,
  b4: 71,
  c5: 72,
  cs5: 73,
  d5: 74,
  ds5: 75,
  e5: 76,
  f5: 77,
  fs5: 78,
  g5: 79,
  gs5: 80,
  a5: 81,
  as5: 82,
  b5: 83,
  c6: 84,
  cs6: 85,
  d6: 86,
  ds6: 87,
  e6: 88,
  f6: 89,
  fs6: 90,
  g6: 91,
  gs6: 92,
  a6: 93,
  as6: 94,
  b6: 95,
  c7: 96,
  cs7: 97,
  d7: 98,
  ds7: 99,
  e7: 100,
  f7: 101,
  fs7: 102,
  g7: 103,
  gs7: 104,
  a7: 105,
  as7: 106,
  b7: 107,
  c8: 108,
  cs8: 109,
  d8: 110,
  ds8: 111,
  e8: 112,
  f8: 113,
  fs8: 114,
  g8: 115,
  gs8: 116,
  a8: 117,
  as8: 118,
  b8: 119,
  c9: 120,
  cs9: 121,
  d9: 122,
  ds9: 123,
  e9: 124,
  f9: 125,
  fs9: 126,
  g9: 127
}

export const durations = {
  // Regular
  tn: 0.125, // thirtysecond note
  sn: 0.25, // sixteenth note
  en: 0.5, // eigth note
  qn: 1.0, // quarter note
  hn: 2.0, // half note
  wn: 4.0, // whole note

  // Triplets (1/3 shorter)
  tnt: 0.08333333333333333,
  snt: 0.16666666666666666,
  ent: 0.3333333333333333,
  qnt: 0.6666666666666666,
  hnt: 1.3333333333333333,

  // Dotted (1/3 longer)
  dtn: 0.125,
  dsn: 0.375,
  den: 0.75,
  dqn: 1.5,
  dhn: 3.0
}

export const velocities = {
  fff: 127, // fortississimo (very very loud)
  ff: 100, // fortissimo (very loud)
  f: 85, // forte (loud)
  mf: 70, // mezzo forte (average)
  mp: 60, // mezzo piano (average)
  p: 50, // piano (soft)
  pp: 25, // pianissimo (very soft)
  ppp: 10, // pianississimo (very very soft)
  silent: 0
}
