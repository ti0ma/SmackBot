'use strict';

var config = require('./config');
var slackBot = require('slackbotapi');

var bot = new slackBot({
  'token': config.slackToken,
  'logging': config.log
});

module.exports = bot;
