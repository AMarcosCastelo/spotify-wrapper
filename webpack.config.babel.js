import Path from 'path';

export default {
  entry: './index.js',
  // mode: 'production',
  output: {
    path: Path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'spotifyWrapper',
  },
  devtool: 'source-map',
  module: {
    rules: [{ exclude: /node_modules/, test: /\.js$/, use: 'babel-loader' }],
  },
};
