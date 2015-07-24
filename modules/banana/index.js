'use strict';

var bot = require('../../bot');

module.exports = {
  expression: /[Bb][Aa][NnAa]+/,
  action: function(data) {
    bot.sendMsg(data.channel, 'MINION!!!!!!');
  }
};
