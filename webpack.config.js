// const path = require('path');

// module.exports = {
//     entry: './node_modules/uglify-js/bin/uglifyjs', // Replace with your path to uglify.js
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     node: {
//         __dirname: false,
//         __filename: false,
//         global: true,
//     },
//     mode: 'development',
    
// };
// const path = require('path');

// module.exports = {
//     mode: 'development',
//     entry: './node_modules/uglify-js/bin/uglifyjs',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     node: {
//         __dirname: false,
//         __filename: false,
//         global: true,
//     },
//     resolve: {
//         fallback: {
//             "path": require.resolve("path-browserify"),
//             "fs": require.resolve("browserify-fs")
//         }
//     },
// };


// const path = require('path');

// module.exports = {
//     mode: 'development',
//     entry: './node_modules/terser/bin/terser',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     node: {
//         __dirname: false,
//         __filename: false,
//         global: true,
//     },
//     resolve: {
//         fallback: {
//             "path": require.resolve("path-browserify"),
//             "fs": require.resolve("browserify-fs"),
//             "util": require.resolve("util/"),
//             "buffer": require.resolve("buffer/"),
//             "stream": require.resolve("stream-browserify")
//         },
//         alias: {
//             '../test/reduce': path.resolve(__dirname, './empty.js')
//         }
//     }
// };

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: 
    
    {
        contentScript: './contentScript.js',
        terser: './node_modules/terser/bin/terser',
        localScript:'./localScript.js'
        // ... other scripts you want to bundle
      },
    
    // ... other scripts you want to bundle

  output: {
    filename: '[name].bundle.min.js',
    path: __dirname + '/dist'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "child_process": false,
      "process": require.resolve("process")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        process: 'process/browser',
    }),
]
};