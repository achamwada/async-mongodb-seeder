module.exports = api => {
  api.cache(false)

  const presets = ['@babel/env']
  const plugins = ['@babel/syntax-class-properties']

  return {
    presets,
    plugins,
  }
}
