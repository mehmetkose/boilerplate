#!/usr/bin/env node
'use strict';

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _caporal = require('caporal');

var _caporal2 = _interopRequireDefault(_caporal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = console.log;

//Printing our magnificent name
(0, _clear2.default)();
log(_chalk2.default.yellow(_figlet2.default.textSync("Boilerplate", {
  font: 'Larry 3D',
  horizontalLayout: 'full'
})));

_caporal2.default.version('0.1.0').command("create").argument("name", "New Application name").option("-t <dir>", "Target direction").action(function (args, options, logger) {

  logger.info(args);
  logger.info(options);
  logger.info("Current Directory : " + process.cwd());
});

_caporal2.default.parse(process.argv);