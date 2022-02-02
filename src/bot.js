var Discord = require('discord.io');
var logger = require('winston');
require('dotenv').config();

var bot = new Discord.Client();

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) == '!') {

        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch (cmd) {

            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;

            case 'sayhi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello and welcome to this server. I hope all of you are not in the toilet.'
                });
                break;
        }

    }
});

bot.login(process.env.BOT_TOKEN);
