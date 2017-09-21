'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Constants
/**
 * Shout
 *
 * A UI where you can write your words down and watch them fade away,
 * dissappearing from your mind.
 *
 * Author:  Anshul Kharbanda
 * Created: 9 - 21 - 2017
 */
// Imports
var PORT = 8080;

// Create app
var app = (0, _express2.default)();

// Add ui routes
app.use('/', _express2.default.static(_path2.default.join(__dirname, 'ui')));

// Add server
app.listen(PORT, function () {
  return console.log('Server listening on PORT: ' + PORT);
});