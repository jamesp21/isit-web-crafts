var path = require('path');
var webpack = require('webpack');

module.exports = {
   entry: './source/ReactMain.js',
   output: {path: __dirname, filename: 'bundle.js'},
   module: {
       loaders: [
           {
               test: /.js?$/,
               loader: 'babel-loader',
               exclude: /node_modules/,
               query: {presets: ['env', 'react']}
           }
       ]
   },
};
