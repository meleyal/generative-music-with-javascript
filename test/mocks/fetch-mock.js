export default (url) => {
  return Promise.resolve(
    Promise.resolve({
      arrayBuffer: () => new ArrayBuffer(),
    })
  )
}
