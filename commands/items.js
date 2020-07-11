const Discord = require("discord.js");
const { items } = require("../ref/db_items.json");
const { stripIndents } = require('common-tags');
const { prefix } = require('../config.json');

const { embed_conf } = require('../config.json');
const embc = JSON.stringify(embed_conf);
const embedConf = JSON.parse(embc);

module.exports = {
    name: "item",
    aliases: ['it', 'i'],
    cooldown: 2,
    execute(message, args) {

        if (!args.length) return message.channel.send(stripIndents`
            **Usage:**
            :white_check_mark: \`${prefix}item <item type> <item code | item name>\`

            Example: \`${prefix}item weapon shadow-blade\` or \`${prefix}i w sb\`

            **Show available items**
            ${prefix}item weapon list
            ${prefix}item magic list
            ${prefix}item defense list
            ${prefix}item jungle list
            ${prefix}item movement list
            ${prefix}item support list
        `);

        const lowCaseText = args[0].toLowerCase();
        const lowCaseText_2 = args[1].toLowerCase();

        if (Object.keys(items[0]['support'])
                .includes(lowCaseText_2) || 

            Object.keys(items[1]['movement'])
                .includes(lowCaseText_2) || 

            Object.keys(items[2]['jungle'])
                .includes(lowCaseText_2) || 

            Object.keys(items[3]['weapon'])
                .includes(lowCaseText_2) || 
                
            Object.keys(items[4]['magic'])
                .includes(lowCaseText_2) || 

            Object.keys(items[5]['defense'])
                .includes(lowCaseText_2) ||
            lowCaseText_2 == "list" ||
            lowCaseText_2 == "help") {} else return message.channel.send("That is not a valid item name/acronym!");

        const spEmb = new Discord.MessageEmbed()
            .setColor(embedConf.color)
            .setTitle("Support Items")
            .setDescription("Usage:\n\`pup item support little-bells\n\`or\n\`pup i sp lb\`\nor\`pup i sup lb\`")
            .setImage("https://cdn.discordapp.com/attachments/665574898177015818/665575211298717697/sp.png");

        const mvEmb = new Discord.MessageEmbed()
            .setColor(embedConf.color)
            .setTitle("Movement Items")
            .setDescription("Usage:\n\`pup item movement hagakure-boots\n\`or\n\`pup i mv hb`")
            .setImage("https://cdn.discordapp.com/attachments/665574898177015818/665575211411701782/movement.png");

        const jgEmb = new Discord.MessageEmbed()
            .setColor(embedConf.color)
            .setTitle("Jungle Items")
            .setDescription("Usage:\n\`pup item jungle unholy-halberd\n\`or\n\`pup i jg uh`")
            .setImage("https://cdn.discordapp.com/attachments/665574898177015818/665575189689401364/jg.png");

        const wEmb = new Discord.MessageEmbed()
            .setColor(embedConf.color)
            .setTitle("Weapon Items")
            .setDescription("Usage:\n\`pup item weapon heaven's-thunder\n\`or\n\`pup i w ht`")
            .setImage("https://cdn.discordapp.com/attachments/665574898177015818/665575243540070420/weapon.png");

        const magEmb = new Discord.MessageEmbed()
            .setColor(embedConf.color)
            .setTitle("Magic Items")
            .setDescription("Usage:\n\`pup item magic mandala-sutra\n\`or\n\`pup i m ms`")
            .setImage("https://cdn.discordapp.com/attachments/665574898177015818/665575262376951818/magic.png");

        const defEmb = new Discord.MessageEmbed()
            .setColor(embedConf.color)
            .setTitle("Defense Items")
            .setDescription("Usage:\n\`pup item defense demon-mask\n\`or\n\`pup i def dm\`\nor\n\`pup i armor dm\`")
            .setImage("https://cdn.discordapp.com/attachments/665574898177015818/665575258568392705/def.png");

        if (lowCaseText.startsWith("support") || lowCaseText.startsWith("sp") || lowCaseText.startsWith("sup") || lowCaseText.startsWith("s")) {

            if (lowCaseText_2.startsWith("list") || lowCaseText_2.startsWith("help")) return message.channel.send(spEmb);
    
            if (message.channel.id != "463624419248570379") return message.channel.send(`**${items[0].support[lowCaseText_2].name}**\n\n${items[0].support[lowCaseText_2].desc}`);
            
            const itemEmb = new Discord.MessageEmbed()
                .setColor("#2F3136")
                .setTitle(items[0].support[lowCaseText_2].name)
                .setDescription(items[0].support[lowCaseText_2].desc)
                .setFooter("Item category: support")
            message.channel.send(itemEmb);

        } else if (lowCaseText.startsWith("movement") || lowCaseText.startsWith("mv") || lowCaseText.startsWith("boots") || lowCaseText.startsWith("b")) {

            if (lowCaseText_2.startsWith("list") || lowCaseText_2.startsWith("help")) return message.channel.send(mvEmb);

            if (message.channel.id != "463624419248570379") return message.channel.send(`**${items[1].movement[lowCaseText_2].name}**\n\n${items[1].movement[lowCaseText_2].desc}`);

            const itemEmb = new Discord.MessageEmbed()
                .setColor("#2F3136")
                .setTitle(items[1].movement[lowCaseText_2].name)
                .setDescription(items[1].movement[lowCaseText_2].desc)
                .setFooter("Item category: movement")
            message.channel.send(itemEmb);
            
        } else if (lowCaseText.startsWith("jungle") || lowCaseText.startsWith("jg") || lowCaseText.startsWith("j")) {

            if (lowCaseText_2.startsWith("list") || lowCaseText_2.startsWith("help")) return message.channel.send(jgEmb);

            if (message.channel.id != "463624419248570379") return message.channel.send(`**${items[2].jungle[lowCaseText_2].name}**\n\n${items[2].jungle[lowCaseText_2].desc}`);

            const itemEmb = new Discord.MessageEmbed()
                .setColor("#2F3136")
                .setTitle(items[2].jungle[lowCaseText_2].name)
                .setDescription(items[2].jungle[lowCaseText_2].desc)
                .setFooter("Item category: jungle")
            message.channel.send(itemEmb);
            
        } else if (lowCaseText.startsWith("weapon") || lowCaseText.startsWith("w")) {

            if (lowCaseText_2.startsWith("list") || lowCaseText_2.startsWith("help")) return message.channel.send(wEmb);

            if (message.channel.id != "463624419248570379") return message.channel.send(`**${items[3].weapon[lowCaseText_2].name}**\n\n${items[3].weapon[lowCaseText_2].desc}`);

            const itemEmb = new Discord.MessageEmbed()
                .setColor("#2F3136")
                .setTitle(items[3].weapon[lowCaseText_2].name)
                .setDescription(items[3].weapon[lowCaseText_2].desc)
                .setFooter("Item category: weapon")
            message.channel.send(itemEmb);
            
        } else if (lowCaseText.startsWith("magic") || lowCaseText.startsWith("m")) {

            if (lowCaseText_2.startsWith("list") || lowCaseText_2.startsWith("help")) return message.channel.send(magEmb);

            if (message.channel.id != "463624419248570379") return message.channel.send(`**${items[4].magic[lowCaseText_2].name}**\n\n${items[4].magic[lowCaseText_2].desc}`);

            const itemEmb = new Discord.MessageEmbed()
                .setColor("#2F3136")
                .setTitle(items[4].magic[lowCaseText_2].name)
                .setDescription(items[4].magic[lowCaseText_2].desc)
                .setFooter("Item category: magic")
            message.channel.send(itemEmb);
            
        } else if (lowCaseText.startsWith("defense") || lowCaseText.startsWith("def") || lowCaseText.startsWith("armor") || lowCaseText.startsWith("a") || lowCaseText.startsWith("d")) {

            if (lowCaseText_2.startsWith("list") || lowCaseText_2.startsWith("help")) return message.channel.send(defEmb);

            if (message.channel.id != "463624419248570379") return message.channel.send(`**${items[5].defense[lowCaseText_2].name}**\n\n${items[5].defense[lowCaseText_2].desc}`);

            const itemEmb = new Discord.MessageEmbed()
                .setColor("#2F3136")
                .setTitle(items[5].defense[lowCaseText_2].name)
                .setDescription(items[5].defense[lowCaseText_2].desc)
                .setFooter("Item category: defense")
            message.channel.send(itemEmb);
            
        }

    },
};