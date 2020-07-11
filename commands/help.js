const Discord = require("discord.js");
const { stripIndents } = require('common-tags');
const fs = require('fs');
const { ownerID, prefix } = require('../config.json');

const { embed_conf } = require('../config.json');
const embc = JSON.stringify(embed_conf);
const embedConf = JSON.parse(embc);

module.exports = {
    name: "help",
    cooldown: 2,
    execute(message, args) {

        const helpJSON = fs.readFileSync('./data/help.json');
        const help_data = JSON.parse(helpJSON);

        if (args.length >= 1) {

            const text1 = args[0].toLowerCase();

                if(message.author.id != ownerID) return message.channel.send(':x: you do not have permission to use this command!');

                if (text1 == 'show') {
                    const printHelpData = JSON.stringify(help_data, null, 2);
                    message.channel.send(printHelpData);
                } else if (text1 == 'commit') {
                    const commitData = args.slice(1, args.length);
                    const joinCData = commitData.join(' ');
                    const writeData = JSON.stringify(joinCData, null, 2);
                        fs.writeFileSync('./data/help.json', writeData);
                            message.channel.send(':white_check_mark: help has been modified successfuly!')
                } else return message.channel.send(':x: err');

        } else {

            var mainCommands = new Array();
            var miscCommands = new Array();
                for (var x = 0; x <= help_data.main.length - 1; x++) {
                    mainCommands[x] = help_data.main[x];
                }
                for (var y = 0; y <= help_data.misc.length - 1; y++) {
                    miscCommands[y] = help_data.misc[y];
                }

            const helpEmb = new Discord.MessageEmbed()
                .setColor(embedConf.color)
                .setTitle('Puppeteer Commands')
                .setDescription(stripIndents`
                    Prefix: \`${prefix}\`

                    :grey_question: Simply type-in the command and you'll get usage instructions.

                    **Main commands:**
                    ${mainCommands.join(', ')}
    
                    **Misc commands:**
                    ${miscCommands.join(', ')}
                `)
            message.channel.send(helpEmb);

        }

    },
};