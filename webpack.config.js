const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: 'production',  // Set mode to 'development' or 'production'
  optimization: {
    
    minimize: true, // Enable minification (this is true by default in production mode)
    minimizer: [
      
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, 
          },
        },
      }),
    ],
    
  },
  performance: {
    hints: false, 
    maxEntrypointSize: 240000, // Maximum size of an entry point (240 KB)
    maxAssetSize: 240000 // Maximum size of any asset (240 KB)
  },
  entry: './client/src/index.js',  // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'client/dist'),  // Output directory for the build
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client/dist'),  // Ensure this points to the 'dist' folder
    port: 3001,
    hot: true,
    historyApiFallback: true,  
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/index.html',  // Path to index.html
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'client/dist'),
    port: 3001,
    proxy: [
      {
        context: ['/superheroes'],
        target: 'http://localhost:3000',
        secure: false,
      },
    ],
    historyApiFallback: true,
  },
};
