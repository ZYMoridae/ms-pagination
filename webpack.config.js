var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/PaginationComponent.tsx',
  output: {
    path: path.resolve('lib'),
    filename: 'PaginationComponent.js',
    libraryTarget: 'commonjs2'
  },
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".css"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
}