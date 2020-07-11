const Discord  = require("discord.js");
const { spells } = require("../ref/spells.json");

const { embed_conf } = require('../config.json');
const embc = JSON.stringify(embed_conf);
const embedConf = JSON.parse(embc);

module.exports = {
    name: "spell",
    aliases: ["sp"],
    cooldown: 2,
    execute(message, args) {

        if (!args.length) return message.channel.send('type `pup spell list` and type it after `spell`');

        const text1 = args[0].toLowerCase();

        if (text1.startsWith("list")) {

            message.channel.send("subdue\ncleanse\nbarrier\nflash\nbind\npace\ncorrode\nheal\nseeker\nshift");

        } else {

            const spellEmb = new Discord.MessageEmbed()
                .setColor(embedConf.color)
                .setTitle(spells[`${text1}`].name)
                .setDescription(spells[`${text1}`].desc)
                .setThumbnail(spells[`${text1}`].icon)
            message.channel.send(spellEmb);

        }

    },
};