const Discord = require('discord.js');
const { aliases } = require("../ref/shiki_alias.json");
const { stripIndents } = require('common-tags');
const fs = require('fs');
const { prefix } = require('../config.json');
const { path_dict } = require("../ref/images.json");
const { data } = require("../ref/oa.json");
const { ownerID } = require('../config.json');
const { text } = require('express');
// const { JsonBox } = require('jsonbox-node');

// require('dotenv').config();
// const BOX_ID = process.env.BOXID;

module.exports = {
    name: "addcomment",
    cooldown: 1000,
    aliases: ['addcom', 'adcom', 'ac'],
    execute(message, args) {

        if (!args.length) return message.reply(`${prefix}${this.name} shiki-name your comment text here`);

        // const jbn = new JsonBox();

        let nameString;
        const text1 = args[0].toLowerCase();

        const sendErr = (reason) => {
            message.channel.send('wrong shikigami keyword');
            message.client.channels.cache.get('706461978545356872').send('comments add\n' + `reason: ${reason}`);
        }

        if (aliases.kubinashi.includes(text1)) {
            nameString = "Kubinashi"
        } else if (aliases.susabi.includes(text1)) {
            nameString = "Susabi"
        } else if (aliases.kingyo.includes(text1)) {
            nameString = "Kingyo"
        } else if (aliases.yuki_onna.includes(text1)) {
            nameString = "Yuki Onna"
        } else if (aliases.maestro.includes(text1)) {
            nameString = "Maestro"
        } else if (aliases.shiro.includes(text1)) {
            nameString = "Shiro"
        } else if (aliases.shiro_mujou.includes(text1)) {
            nameString = "Shiro Mujou"
        } else if (aliases.aoandon.includes(text1)) {
            nameString = "Aoandon"
        } else if (aliases.hana.includes(text1)) {
            nameString = "Hana"
        } else if (aliases.menreiki.includes(text1)) {
            nameString = "Menreiki"
        } else if (aliases.kiyohime.includes(text1)) {
            nameString = "Kiyohime"
        } else if (aliases.ootengu.includes(text1)) {
            nameString = "Ootengu"
        } else if (aliases.momiji.includes(text1)) {
            nameString = "Momiji"
        } else if (aliases.oitsuki.includes(text1)) {
            nameString = "Oitsuki"
        } else if (aliases.arakawa.includes(text1)) {
            nameString = "Lord Arakawa"
        } else if (aliases.higanbana.includes(text1)) {
            nameString = "Higanbana"
        } else if (aliases.tamamonomae.includes(text1)) {
            nameString = "Tamamonomae"
        } else if (aliases.enma.includes(text1)) {
            nameString = "Enma"
        } else if (aliases.ittan_momen.includes(text1)) {
            nameString = "Ittan-momen"
        } else if (aliases.hangan.includes(text1)) {
            nameString = "Hangan"
        } else if (aliases.enenra.includes(text1)) {
            nameString = "Enenra"
        } else if (aliases.shuuten_doji.includes(text1)) {
            nameString = "Shuten Doji"
        } else if (aliases.inugami.includes(text1)) {
            nameString = "Inugami"
        } else if (aliases.jorogumo.includes(text1)) {
            nameString = "Jorogumo"
        } else if (aliases.kuro_mujou.includes(text1)) {
            nameString = "Kuro Mujou"
        } else if (aliases.kuro.includes(text1)) {
            nameString = "Kuro"
        } else if (aliases.ryomen.includes(text1)) {
            nameString = "Ryomen"
        } else if (aliases.inuyasha.includes(text1)) {
            nameString = "Inuyasha"
        } else if (aliases.puppeteer.includes(text1)) {
            nameString = "Puppeteer"
        } else if (aliases.yuki.includes(text1)) {
            nameString = "Yuki"
        } else if (aliases.hannya.includes(text1)) {
            nameString = "Hannya"
        } else if (aliases.karasu_tengu.includes(text1)) {
            nameString = "Karasu Tengu"
        } else if (aliases.ibaraki_doji.includes(text1)) {
            nameString = "Ibaraki Doji"
        } else if (aliases.aobozu.includes(text1)) {
            nameString = "Aobozu"
        } else if (aliases.shishio.includes(text1)) {
            nameString = "Shishio"
        } else if (aliases.kamaitachi.includes(text1)) {
            nameString = "Kamaitachi"
        } else if (aliases.yoto_hime.includes(text1)) {
            nameString = "Yoto Hime"
        } else if (aliases.ubume.includes(text1)) {
            nameString = "Ubume"
        } else if (aliases.kyonshi_imoto.includes(text1)) {
            nameString = "Kyonshi Imoto"
        } else if (aliases.kyuumei_neko.includes(text1)) {
            nameString = "Kyuumei Neko"
        } else if (aliases.itsumade.includes(text1)) {
            nameString = "Itsumade"
        } else if (aliases.yamakaze.includes(text1)) {
            nameString = "Yamakaze"
        } else if (aliases.hone_onna.includes(text1)) {
            nameString = "Hone Onna"
        } else if (aliases.mannendake.includes(text1)) {
            nameString = "Mannendake"
        } else if (aliases.sesshomaru.includes(text1)) {
            nameString = "Sesshomaru"
        } else if (aliases.kosodenote.includes(text1)) {
            nameString = "Kosodenote"
        } else if (aliases.yasha.includes(text1)) {
            nameString = "Yasha"
        } else if (aliases.vampira.includes(text1)) {
            nameString = "Vampira"
        } else if (aliases.yamawaro.includes(text1)) {
            nameString = "Yamawaro"
        } else if (aliases.tanuki.includes(text1)) {
            nameString = "Tanuki"
        } else if (aliases.samurai_x.includes(text1)) {
            nameString = "Samurai X"
        } else if (aliases.mouba.includes(text1)) {
            nameString = "Mouba"
        } else if (aliases.umibozu.includes(text1)) {
            nameString = "Umibozu"
        } else if (aliases.yumekui.includes(text1)) {
            nameString = "Yumekui"
        } else if (aliases.hououga.includes(text1)) {
            nameString = "Hououga"
        } else if (aliases.kusa.includes(text1)) {
            nameString = "Kusa"
        } else if (aliases.kaguya.includes(text1)) {
            nameString = "Kaguya"
        } else if (aliases.hiyoribou.includes(text1)) {
            nameString = "Hiyoribou"
        } else if (aliases.ebisu.includes(text1)) {
            nameString = "Ebisu"
        } else if (aliases.momo.includes(text1)) {
            nameString = "Momo"
        } else if (aliases.yamausagi.includes(text1)) {
            nameString = "Yamausagi"
        } else if (aliases.ichimokuren.includes(text1)) {
            nameString = "Ichimokuren"
        } else if (aliases.kikyo.includes(text1)) {
            nameString = "Kikyo"
        } else if (aliases.miketsu.includes(text1)) {
            nameString = "Miketsu"
        } else if (aliases.jikikaeru.includes(text1)) {
            nameString = "Jikikaeru"
        } else if (aliases.chin.includes(text1)) {
            nameString = "Chin"
        } else if (aliases.youko.includes(text1)) {
            nameString = "Youko"
        } else if (aliases.hakuro.includes(text1)) {
            nameString = "Hakuro"
        } else if (aliases.kanko.includes(text1)) {
            nameString = "Kanko"
        } else if (aliases.komatsu.includes(text1)) {
            nameString = "Komatsu"
        } else if (aliases.kubinashi.includes(text1)) {
            nameString = "Kubinashi"
        } else if (aliases.futakuchi.includes(text1)) {
            nameString = "Futakuchi"
        } else if (aliases.dodomeki.includes(text1)) {
            nameString = "Dodomeki"
        } else if (aliases.tesso.includes(text1)) {
            nameString = "Tesso"
        } else if (aliases.onikiri.includes(text1)) {
            nameString = "Onikiri"
        } else if (aliases.kyonshi_ani.includes(text1)) {
            nameString = "Kyonshi Ani"
        } else if (aliases.kisei.includes(text1)) {
            nameString = "Kisei"
        } else if (aliases.satori.includes(text1)) {
            nameString = "Satori"
        } else if (aliases.hakuzosu.includes(text1)) {
            nameString = "Hakuzosu"
        } else if (aliases.zashiki.includes(text1)) {
            nameString = "Zashiki"
        } else if (aliases.suzuka_gozen.includes(text1)) {
            nameString = "Suzuka Gozen"
        } else if (aliases.dai_shimei.includes(text1)) {
            nameString = "Dai Shimei"
        } else if (aliases.shiranui.includes(text1)) {
            nameString = "Shiranui" 
        } else if (aliases.kani.includes(text1)) {
            nameString = "Kani Hime"
        } else if (aliases.hako.includes(text1)) {
            nameString = "Hako Shoujo"
        } else return sendErr(); 

        const mainData = data[`${nameString}`];

        // images
        let thumbImg = mainData.式神方头像;
        let thumbURL = path_dict[`${thumbImg}`];

        const dirContents = fs.readdirSync('./data/comments/');

        if (dirContents.includes(`${nameString}.json`)) {

            const rawCommentData = fs.readFileSync(`./data/comments/${nameString}.json`);
            const commentData = JSON.parse(rawCommentData);

            // const commentData = await jbn.read(BOX_ID, `${nameString}`);

            // const raw_swear_data = fs.readFileSync(`./data/swear.json`);
            // const swear_data = JSON.parse(raw_swear_data);

            const ommit_shikiname = args.slice(1, args.length);

            if (ommit_shikiname.length >= 36) return message.channel.send('<:HanganKEK:560963801093242880> word limit reached, please try again!');
                if (commentData.data[`${nameString}`].comments.length >= 10) {
                    commentData.data[`${nameString}`].comments.shift();}

            const final_text = `**[${message.author.username}]**\n> ${ommit_shikiname.join(' ')}`;

            commentData.data[`${nameString}`].comments.push(`${final_text}`);

            message.channel.send(`:white_check_mark: ${message.author} your comment has been added!`);
            
                // log embed
                if (message.author.id != ownerID) {
                    const logEmbed = new Discord.MessageEmbed()
                        .setThumbnail(thumbURL)
                        .setColor('#2F3136')
                        .setTitle(nameString)
                        .setDescription(stripIndents`
                        **"${ommit_shikiname.join(' ')}"**
                        
                        Sender: **${message.author.username}**
                        Server: **${message.guild}**
                        `)
                    message.client.channels.cache.get('707082767648686111').send(logEmbed);
                }; 

            const writeContent = JSON.stringify(commentData, null, 2);

            fs.writeFileSync(`./data/comments/${nameString}.json`, writeContent);

            // await jbn.update(commentData, BOX_ID, `${commentData.recordId}`);

        } else {

            const ommit_shikiname = args.slice(1, args.length);

            if (ommit_shikiname.length >= 36) return message.channel.send('<:HanganKEK:560963801093242880> word limit reached, please try again!');
            
            const final_text = `**[${message.author.username}]**\n> ${ommit_shikiname.join(' ')}`;

                // log embed
                if (message.author.id != ownerID) {
                    const logEmbed = new Discord.MessageEmbed()
                        .setThumbnail(thumbURL)
                        .setColor('#2F3136')
                        .setTitle(nameString)
                        .setDescription(stripIndents`
                        **"${ommit_shikiname.join(' ')}"**
                        
                        Sender: **${message.author.username}**
                        Server: **${message.guild}**
                        `)
                    message.client.channels.cache.get('707082767648686111').send(logEmbed);
                };

            message.channel.send(`:white_check_mark: ${message.author} your comment has been added!`);

            const initContent = {
                "data" : {
                    [nameString] : {
                        "name" : nameString,
                        "comments" : [
                            final_text
                        ]}}};

            const initContent_final = JSON.stringify(initContent, null, 2);
            fs.writeFileSync(`./data/comments/${nameString}.json`, initContent_final);

            // await jbn.create(initContent, BOX_ID, `${nameString}`);

        }

    },
};