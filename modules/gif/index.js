'use strict';

var bot = require('../../bot');

module.exports = {
  expression: /^!gif/,
  action: function(data) {
    bot.sendMsg(data.channel, 'To be implemented');
  }
};
