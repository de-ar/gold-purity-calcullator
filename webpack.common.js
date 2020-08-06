module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.html?$/i,
        use: ['html-loader'],
      },
    ],
  },
};
