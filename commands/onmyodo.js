const Discord = require("discord.js");
const { onmyodos } = require("../data/onmyodo.json");
const od = JSON.stringify(onmyodos);
const fod = JSON.parse(od);

const { embed_conf } = require('../config.json');
const embc = JSON.stringify(embed_conf);
const embedConf = JSON.parse(embc);

module.exports = {
    name: "onmyodo",
    aliases: ['on', 'onmyo'],
    cooldown: 2,
    execute(message, args) {
        
        if (!args.length) return message.channel.send(`**Available onmoyodos:**\n\n${Object.keys(onmyodos).join('\n')}`);

        const onname = args[0].toLowerCase();

        if (!Object.keys(onmyodos).includes(onname)) {
            return message.channel.send(`**:x: Wrong onmyodo name, please try again!**\n\n${Object.keys(onmyodos).join('\n')}`);
        } else {
            const onEmbed = new Discord.MessageEmbed()
                .setTitle(fod[`${onname}`].name)
                .addField('Description', `${fod[`${onname}`].desc}`)
            message.channel.send(onEmbed);
        }

    },
};