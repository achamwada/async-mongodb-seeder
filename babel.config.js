module.exports = api => {
  api.cache(false)

  const presets = ['@babel/env']

  return {
    presets,
  }
}
