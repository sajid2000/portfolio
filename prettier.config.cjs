/** @type {import("prettier").Config} */
module.exports = {
  pluginSearchDirs: [__dirname],
  plugins: [require.resolve('prettier-plugin-astro')],
  trailingComma: "es5",
  printWidth: 120,
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}