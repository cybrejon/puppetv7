const Discord = require('discord.js');
const { ownerID } = require('../config.json');

module.exports = {
    name: "send",
    aliases: ['note'],
    execute(message, args) {

        if (message.author.id =! ownerID) return message.channel.send('<:jazz:710354050188574750>');

        message.client.channels.cache.get('710450958462615622').send(args.join(' '));
        message.channel.send('<:PepeRotZoom:710351857738055750>');

    },
};