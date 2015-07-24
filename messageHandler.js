'use strict';

var modules = require('./modules');

exports.process = function(data) {
  if(!!modules && data.user !== 'USLACKBOT') {
    var message = data.text;
    modules.forEach(function(module) {
      if(module.expression.test(message)) {
        module.action(data);
      }
    });
  }
};
