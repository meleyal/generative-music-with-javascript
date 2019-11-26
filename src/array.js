export const closest = (arr, n) => {
  return arr.reduce((prev, curr) => {
    return Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev
  })
}

export const first = arr => {
  return arr[0]
}

export const last = arr => {
  return arr[arr.length - 1]
}

export const nth = (arr, n) => {
  return arr[n]
}

export const includes = (arr, n) => {
  return arr.includes(n)
}

export const length = arr => {
  return arr.length
}

export const range = (start = 0, end, step = 1) => {
  return Array.from(
    { length: Math.ceil((end - start + 1) / step) },
    (v, i) => i * step + start
  )
}
