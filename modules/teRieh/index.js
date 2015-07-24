'use strict';

var bot = require('../../bot');

module.exports = {
  expression: /[Jj][Aa][JjAa]+/,
  action: function(data) {
    bot.sendMsg(data.channel, 'TE RIEH?!?!?!?');
  }
};
