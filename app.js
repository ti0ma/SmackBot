'use strict';

var messageHandler = require('./messageHandler');

var bot = require('./bot');

bot.on('message', function(data) {
  messageHandler.process(data);
});
