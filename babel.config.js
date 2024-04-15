module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        module: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
  ],
}