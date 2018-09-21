module.exports = {
  entry: './Components/app.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        },
        loader: 'babel-loader',
        test: /\.jsx$/,
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: ['style-loader', 'css-loader']

      }
    ]
  }
}
