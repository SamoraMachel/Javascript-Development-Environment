// this file isn't transpiled, so we must use common JS and ES6

// Register babel to transpile before our test runs
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
