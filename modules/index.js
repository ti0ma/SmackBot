'use strict';

var fs = require('fs'),
    path = require('path');

function getDirectories() {
  return fs.readdirSync(__dirname).filter(function(file) {
    return file.charAt(0) !== '.' && fs.statSync(path.join(__dirname, file)).isDirectory();
  });
}

var dirs = getDirectories()
  , modules = [];

dirs.forEach(function(dir) {
  modules.push(require('./' + dir));
});

module.exports = modules;
