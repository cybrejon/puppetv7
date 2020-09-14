
const   Discord = require("discord.js"),
{ aliases } = require("../ref/shiki_alias.json"),
{ data } = require("../ref/oa.json"),
{ path_dict } = require("../ref/images.json"),
fs = require("fs"),
{ prefix, mods } = require('../config.json'),
{ ownerID } = require('../config.json'),
{ stripIndents } = require("common-tags"),
{ embed_conf } = require('../config.json'),
embc = JSON.stringify(embed_conf),
embedConf = JSON.parse(embc);

module.exports = {
name: "shikigami",
aliases: ['shiki', 's'],
execute(message, args) {

// for use in comment moderations
const raw_modData = JSON.stringify(mods);
const modID = JSON.parse(raw_modData);

if (!args.length) return message.channel.send(stripIndents`
    :grey_question: **Usage instructions**

    :white_medium_small_square: Show all kit descriptions:
    \`${prefix}${this.name} shikigami-name\`
    type \`${prefix}list\` to see a list of shikigami names you can use.

    :white_medium_small_square: Using options
    \`${prefix}${this.name} shikigami-name <option>\` (without the '< >')
    :small_orange_diamond: Available options:
    trait, s1 (or passive), s2, s3, s4 (or ult), stats
`);

const noPerms = () => message.channel.send(':x: You do not have permission to use this command!');

let rawChannel = fs.readFileSync("./ref/channels.json"),
    channelp = JSON.parse(rawChannel);

let nameString;
const text1 = args[0].toLowerCase();

const sendErr = (warn) => {
    message.channel.send(warn);
    message.client.channels.cache.get('706461978545356872').send('shikigami');
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
} else return sendErr(`:x: Incorrect shikigami name, please type \`${prefix}list\``);

// predefine some json objects
const mainData = data[`${nameString}`],
    baseStats = data[`${nameString}`].\u5f0f\u795e\u57fa\u7840\u5c5e\u6027,
    growthStats = data[`${nameString}`].\u5f0f\u795e\u5c5e\u6027\u6210\u957f,
    skillData = data[`${nameString}`].\u5f0f\u795e\u6280\u80fd;

    // collect comment file names
    const dirContents = fs.readdirSync('./data/comments/');

    // Scaling data
    let scalingData_raw_s1 = mainData.式神技能.一技能.技能成长,
        scalingData_raw_s2 = mainData.式神技能.二技能.技能成长,
        scalingData_raw_s3 = mainData.式神技能.三技能.技能成长,
        scalingData_raw_s4 = mainData.式神技能.四技能.技能成长;

        let scalingNames_s1 = Object.keys(scalingData_raw_s1),
            scalingNames_s2 = Object.keys(scalingData_raw_s2),
            scalingNames_s3 = Object.keys(scalingData_raw_s3),
            scalingNames_s4 = Object.keys(scalingData_raw_s4);

            let scalingNames_count_s1 = (Object.keys(scalingData_raw_s1)).length - 1,
                scalingNames_count_s2 = (Object.keys(scalingData_raw_s2)).length - 1,
                scalingNames_count_s3 = (Object.keys(scalingData_raw_s3)).length - 1,
                scalingNames_count_s4 = (Object.keys(scalingData_raw_s4)).length - 1;

                let s1_scalingText = new Array(),
                    s2_scalingText = new Array(),
                    s3_scalingText = new Array(),
                    s4_scalingText = new Array();

                // store scaling data for s1
                for (var z1 = 0; z1 <= scalingNames_count_s1; z1++) {
                    s1_scalingText[z1] = (`**${scalingNames_s1[z1]}:** ${mainData.式神技能.一技能.技能成长[`${scalingNames_s1[z1]}`]}\n`);
                }
                // store scaling data for s2
                for (var z2 = 0; z2 <= scalingNames_count_s2; z2++) {
                    s2_scalingText[z2] = (`**${scalingNames_s2[z2]}:** ${mainData.式神技能.二技能.技能成长[`${scalingNames_s2[z2]}`]}\n`);
                }
                // store scaling data for s3
                for (var z3 = 0; z3 <= scalingNames_count_s3; z3++) {
                    s3_scalingText[z3] = (`**${scalingNames_s3[z3]}:** ${mainData.式神技能.三技能.技能成长[`${scalingNames_s3[z3]}`]}\n`);
                }
                // store scaling data for s4
                for (var z4 = 0; z4 <= scalingNames_count_s4; z4++) {
                    s4_scalingText[z4] = (`**${scalingNames_s4[z4]}:** ${mainData.式神技能.四技能.技能成长[`${scalingNames_s4[z4]}`]}\n`);
                }

        // images
        let thumbImg = mainData.式神方头像,
            thumbURL = path_dict[`${thumbImg}`],
                // skill images
                    // trait
                        traitImg = mainData.式神技能.天生被动.图标路径,
                        traitURL = path_dict[`${traitImg}`],
                    // s1
                        s1Img = mainData.式神技能.一技能.图标路径,
                        s1URL = path_dict[`${s1Img}`],
                    // s2
                        s2Img = mainData.式神技能.二技能.图标路径,
                        s2URL = path_dict[`${s2Img}`],
                    // s3
                        s3Img = mainData.式神技能.三技能.图标路径,
                        s3URL = path_dict[`${s3Img}`],
                    // s4
                        s4Img = mainData.式神技能.四技能.图标路径,
                        s4URL = path_dict[`${s4Img}`];

// okami 1
var okami1_data = [mainData.推荐装备['推荐装备-默认方案1'].length];
// loop through okami 1 and store names to okami1_data
for (var x1 = 0; x1 <= mainData.推荐装备['推荐装备-默认方案1'].length -1; x1++) {
    okami1_data[x1] = mainData.推荐装备['推荐装备-默认方案1'][x1];
}

// okami 2
var okami2_data = [mainData.推荐装备['推荐装备-默认方案2'].length];
// loop through okami 2 and store names to okami2_data
for (var x2 = 0; x2 <= mainData.推荐装备['推荐装备-默认方案2'].length -1; x2++) {
    okami2_data[x2] = mainData.推荐装备['推荐装备-默认方案2'][x2];
}

// okami 3
var okami3_data = [mainData.推荐装备['推荐装备-默认方案3'].length];
// loop through okami 3 and store names to okami3_data
for (var x3 = 0; x3 <= mainData.推荐装备['推荐装备-默认方案3'].length -1; x3++) {
    okami3_data[x3] = mainData.推荐装备['推荐装备-默认方案3'][x3];
}

let shikiDiff;

if (mainData.评分.难度 == 1) {
    shikiDiff = "Easy Tier 1/2";
} else if (mainData.评分.难度 == 2) {
    shikiDiff = "Easy Tier 2/2";
} else if (mainData.评分.难度 == 3) {
    shikiDiff = "Normal";
} else if (mainData.评分.难度 == 4) {
    shikiDiff = "Hard";
} else if (mainData.评分.难度 == 5) {
    shikiDiff = "Extreme (Onmyoji who have been in Heian-kyo for less than 7 days can't use them in battle for free.)";
}

    let dps = new String(),
    control = new String(),
    survive = new String(),
    buff = new String(),
    agility = new String();

    // dps
    if (mainData.评分.输出 == 1) {
        dps = "D";
    } else if (mainData.评分.输出 == 2) {
        dps = "C";
    } else if (mainData.评分.输出 == 3) {
        dps = "B";
    } else if (mainData.评分.输出 == 4) {
        dps = "A";
    } else if (mainData.评分.输出 == 5) {
        dps = "S";
    }
    // control
    if (mainData.评分.控制 == 1) {
        control = "D";
    } else if (mainData.评分.控制 == 2) {
        control = "C";
    } else if (mainData.评分.控制 == 3) {
        control = "B";
    } else if (mainData.评分.控制 == 4) {
        control = "A";
    } else if (mainData.评分.控制 == 5) {
        control = "S";
    }
    // survive
    if (mainData.评分.生存 == 1) {
        survive = "D";
    } else if (mainData.评分.生存 == 2) {
        survive = "C";
    } else if (mainData.评分.生存 == 3) {
        survive = "B";
    } else if (mainData.评分.生存 == 4) {
        survive = "A";
    } else if (mainData.评分.生存 == 5) {
        survive = "S";
    }
    // buff
    if (mainData.评分.增益 == 1) {
        buff = "D";
    } else if (mainData.评分.增益 == 2) {
        buff = "C";
    } else if (mainData.评分.增益 == 3) {
        buff = "B";
    } else if (mainData.评分.增益 == 4) {
        buff = "A";
    } else if (mainData.评分.增益 == 5) {
        buff = "S";
    }
    // agility
    if (mainData.评分.敏捷 == 1) {
        agility = "D";
    } else if (mainData.评分.敏捷 == 2) {
        agility = "C";
    } else if (mainData.评分.敏捷 == 3) {
        agility = "B";
    } else if (mainData.评分.敏捷 == 4) {
        agility = "A";
    } else if (mainData.评分.敏捷 == 5) {
        agility = "S";
    }

    // classes
    let classArray = Object.values(mainData.式神定位);

    // computing base dmg after lvl 18
    var finalDamage = Math.trunc((growthStats.\u7269\u7406\u4f24\u5bb3 * 17) + baseStats.\u7269\u7406\u4f24\u5bb3),
        finalArmor = Math.trunc(growthStats.\u62a4\u7532 * 17) + baseStats.\u62a4\u7532,
        finalMana = ((growthStats["魔法Top Lane限"] * 17) + baseStats["魔法Top Lane限"]),
        finalAS = ((growthStats.\u653b\u901f\u52a0\u6210 * 17) + baseStats.\u653b\u51fb\u901f\u5ea6),
        finalHP = Math.trunc((growthStats.\u751f\u547d\u503c * 17) + baseStats.\u751f\u547d\u503c),
        finalMres = Math.trunc((growthStats.\u9b54\u6297 * 17) + baseStats.魔抗);

        var hasComments;
        if (dirContents.includes(`${nameString}.json`)) {

            hasComments = true;

            const comment_data_String = fs.readFileSync(`./data/comments/${nameString}.json`);
            var comment_data = JSON.parse(comment_data_String);
            
            var comments_text = [comment_data.data[`${nameString}`].comments.length];
            
                // comment text
                for (var nya = 0; nya <= comment_data.data[`${nameString}`].comments.length - 1; nya++) {
                    comments_text[nya] = comment_data.data[`${nameString}`].comments[nya];
                }

                console.log(comments_text);
        } else {

            hasComments = false;
            var comments_text = new Array();
            comments_text[0] = 'No comments for this Shikigami yet';
            
        }

            const stats_comments = comments_text.slice(0, 5);

    const testEmb1 = new Discord.MessageEmbed()
        .setColor(embedConf.color)
        .setThumbnail(thumbURL)
        // .setImage(bodyURL)
        .setTitle(mainData.\u5f0f\u795e\u540d\u79f0)
        .setDescription(`***${mainData.\u5f0f\u795e\u4f20\u8bb0}***`)
        .addFields(
            { name: `:scales: Class Information`, value: `Class: **${classArray.join(", ")}**\nSpecialty: **${mainData.式神标签}**` },
            { name: `:microphone2: Caracter Voice`, value: `Japanese VA: ${mainData.cv名字[0]}\nChinese VA: ${mainData.cv名字[1]}\nEnglish VA: ${mainData.cv名字[2]}\nKorean VA: ${mainData.cv名字[3]}`, inline: true },
            { name: `:mens: Shikigami Score`, value: `:dagger: DPS: ${dps}\n:cyclone: Control: ${control}\n:heart: Survive: ${survive}\n:milky_way: Buff: ${buff}\n:woman_running: Agility: ${agility}\n:trident: Difficulty Score: ${shikiDiff}`, inline: true },
            { name: `\u200b`, value: `\u200b` },
            { name: `:bar_chart: Base Stats`, value: `> Base Attack Damage: ${baseStats.\u7269\u7406\u4f24\u5bb3}\n> Attack Speed: ${baseStats.\u653b\u51fb\u901f\u5ea6}\n> Base Mana: ${baseStats["魔法Top Lane限"]}\n> Base Magic Resist: ${baseStats.魔抗}\n> Base HP: ${baseStats.\u751f\u547d\u503c}\n> Base Armor: ${baseStats.\u62a4\u7532}\n> Base Movement Speed: ${baseStats.\u79fb\u52a8\u901f\u5ea6}`, inline: true },
            { name: `:bar_chart: Growth Stats`, value: `> Mana Regen: ${growthStats.\u9b54\u6cd5\u56de\u590d}\n> Mana Increase: ${growthStats["魔法Top Lane限"]}\n> Resistance: ${growthStats.\u9b54\u6297}\n> Attack Speed Bonus: ${growthStats.\u653b\u901f\u52a0\u6210}\n> Attack Damage Bonus: ${growthStats.\u7269\u7406\u4f24\u5bb3}\n> Health Regen Bonus: ${growthStats.\u751f\u547d\u6062\u590d}\n> Armor Bonus: ${growthStats.\u62a4\u7532}\n> HP Bonus: ${growthStats.\u751f\u547d\u503c}`, inline: true },
            { name: `:track_next: Skill Lvl-up Order:`, value: `> ${mainData.\u63a8\u8350\u52a0\u70b9\u987a\u5e8f}` },
            { name: `\u200b`, value: `\u200b` },
            { name: `:crossed_swords: Okami 1: **${mainData.推荐装备['推荐装备-默认方案1-说明']}**`, value: okami1_data, inline: true },
            { name: `:crossed_swords: Okami 2: **${mainData.推荐装备['推荐装备-默认方案2-说明']}**`, value: okami2_data, inline: true },
            { name: `:crossed_swords: Okami 3: **${mainData.推荐装备['推荐装备-默认方案3-说明']}**`, value: okami3_data, inline: true },
            { name: `\u200b`, value: `\u200b` },
            { name: `:arrow_double_up: Level 18 Base Stats`, value: stripIndents`
                Calculated using: ((growth stat * 17) + base stat)

                Decimal points are truncated except for attack speed. *These do not represent in-game data as it does not consider other factors such as onmyodos, items, and other possible stat bonuses if available!* 

                Base Atk Damage: **${finalDamage}**
                Base Armor: **${finalArmor}**
                Base Mana: **${finalMana}**
                Base Attack Speed: **${finalAS}**
                Base HP: **${finalHP}**
                Base Mres: **${finalMres}**
            `},
            { name: `\u200b`, value: `\u200b` },
            { name: `Last 5 comments | Show all comments: ${prefix}shiki ${text1} comments`, value: stats_comments, inline: true }, )
        .setFooter(`Requested by ${message.author.username}`);


    const testEmb2 = new Discord.MessageEmbed()
        .setColor(embedConf.color)
        .setThumbnail(traitURL)
        .addField(':beginner: **Trait**', `__**Skill Name:** ${skillData.\u5929\u751f\u88ab\u52a8.\u6280\u80fd\u540d\u79f0}__\n\n**Description:** ${skillData.\u5929\u751f\u88ab\u52a8.\u6280\u80fd\u63cf\u8ff0}`);
    
    const testEmb3 = new Discord.MessageEmbed()
        .setColor(embedConf.color)
        .setThumbnail(s1URL)
        .addField(':beginner: **Skill 1**', `__**Skill Name:** ${skillData.一技能.技能名称}__\n\n**Description:** ${skillData.一技能.技能描述}\n\n:yin_yang: Scaling Data:\n${s1_scalingText.join(" ")}`);

    const testEmb4 = new Discord.MessageEmbed()
        .setColor(embedConf.color)
        .setThumbnail(s2URL)
        .addField(':beginner: **Skill 2**', `__**Skill Name:** ${skillData.二技能.技能名称}__\n\n**Description:** ${skillData.二技能.技能描述}\n\n:yin_yang: Scaling Data:\n${s2_scalingText.join(" ")}`);

    const testEmb5 = new Discord.MessageEmbed()
        .setColor(embedConf.color)
        .setThumbnail(s3URL)
        .addField(':beginner: **Skill 3**', `__**Skill Name:** ${skillData.三技能.技能名称}__\n\n**Description:** ${skillData.三技能.技能描述}\n\n:yin_yang: Scaling Data:\n${s3_scalingText.join(" ")}`);

    const testEmb6 = new Discord.MessageEmbed()
        .setColor(embedConf.color)
        .setThumbnail(s4URL)
        .addField(':beginner: **Skill 4**', `__**Skill Name:** ${skillData.四技能.技能名称}__\n\n**Description:** ${skillData.四技能.技能描述}\n\n:yin_yang: Scaling Data:\n${s4_scalingText.join(" ")}`)
        .setFooter(`Requested by ${message.author.username}`);

const sendSkillEmbeds = () => {
    message.channel.send(testEmb2);
    message.channel.send(testEmb3);
    message.channel.send(testEmb4);
    message.channel.send(testEmb5);
    message.channel.send(testEmb6);
};

var hasOptions = true;

if (args.length == 1) {

    sendSkillEmbeds();

    hasOptions = false;

} else {

    const text2 = args[1].toLowerCase();

    console.log(`[shikigami] option provided: ${text2}`)

    if (text2.startsWith("trait")) { message.channel.send(testEmb2);
        } else if (text2.startsWith("s1") || text2.startsWith("passive")) { message.channel.send(testEmb3);
        } else if (text2.startsWith("s2")) { message.channel.send(testEmb4);
        } else if (text2.startsWith("s3")) { message.channel.send(testEmb5);
        } else if (text2.startsWith("s4") || text2.startsWith("ult")) { message.channel.send(testEmb6);
        } else if (text2 == 'stats' || text2 == 'stat') { message.channel.send(testEmb1);
        } else if (text2 == 'comments' || text2 == 'comment') {

            if (dirContents.includes(`${nameString}.json`)) {

                const comment_data_String = fs.readFileSync(`./data/comments/${nameString}.json`);
                var comment_data = JSON.parse(comment_data_String);
                
                var comments_text = [comment_data.data[`${nameString}`].comments.length];
                
                    // comment text
                    for (var nya = 0; nya <= comment_data.data[`${nameString}`].comments.length - 1; nya++) {
                        comments_text[nya] = comment_data.data[`${nameString}`].comments[nya];
                    }
        
                    console.log(comments_text);
        
                const commentEmbed = new Discord.MessageEmbed()
                    .setColor(embedConf.color)
                    .setThumbnail(thumbURL)
                    .setTitle(comment_data.data[`${nameString}`].name)
                    .addField("Comments", comments_text, true)
                message.channel.send(commentEmbed);
    
            } else return message.channel.send('<:jazz:710354050188574750> no comments for this shikigami yet!');

        } else if (text2 == 'clearcomment' || text2 == 'clearcom' || text2 == 'cc') {

            if (modID.includes(message.author.id)) {
                // do nothing
            }  else return noPerms();

            if (dirContents.includes(`${nameString}.json`)) {

                fs.unlink(`./data/comments/${nameString}.json`, (err) => {
                    if (err) throw err;
                    console.log(`\`./data/comments/${nameString}.json removed\``);
                    });
    
                message.channel.send(`:white_check_mark: /data/comments/${nameString}.json removed`);
    
            } else {
    
                message.channel.send(':ballot_box_with_check: comments clean for this shiki');
    
            }

        } else if (text2 == 'removecomment' || text2 == 'remcom' || text2 == 'rc') {

            if (modID.includes(message.author.id)) {
                // do nothing
            } else return noPerms();

            if (dirContents.includes(`${nameString}.json`)) {
                var comPos;
                if (args[2].startsWith("1")) {
                    comPos = 0;
                } else if (args[2].startsWith("2")) {
                    comPos = 1;
                } else if (args[2].startsWith("3")) {
                    comPos = 2;
                } else if (args[2].startsWith("4")) {
                    comPos = 3;
                } else if (args[2].startsWith("5")) {
                    comPos = 4;
                } else if (args[2].startsWith("6")) {
                    comPos = 5;
                } else if (args[2].startsWith("7")) {
                    comPos = 6;
                } else if (args[2].startsWith("8")) {
                    comPos = 7;
                } else if (args[2].startsWith("9")) {
                    comPos = 8;
                } else if (args[2].startsWith("10")) {
                    comPos = 9;
                }
            
                const rawCommentData = fs.readFileSync(
                    `./data/comments/${nameString}.json`);
                const commentData = JSON.parse(rawCommentData);
            
                commentData.data[`${nameString}`].comments.splice(comPos, 1);
            
                const jsonContent = {
                    data: {
                    [nameString]: {
                        name: nameString,
                        comments: commentData.data[`${nameString}`].comments
                    }
                    }
                };
            
                const uwu = JSON.stringify(jsonContent, null, 2);
                console.log(uwu);
            
                fs.writeFileSync(`./data/comments/${nameString}.json`, uwu);
            
                message.channel.send(":white_check_mark: comment has been removed");
                } else {
                message.channel.send(":x: no comments for that shiki yet!");
                }

        } else return message.channel.send(':grey_question: Available options are: trait, s1 or passive, s2, s3, s4 or ult, stats, comments.');

}

const callStatLogger = function(logParams) {
    const { target, option, author, comment } = logParams;
    const logcontent = {
        statLogger : {
            called: target,
            option: option,
            author: author,
            hasComments: comment
        }
    }; console.log(logcontent);
    const logSend = JSON.stringify(logcontent, null, 2);
        const logEmbed = new Discord.MessageEmbed()
            .setColor(embedConf.color)
            .setDescription(logSend)
        message.client.channels.cache.get('713732588443009024').send(logEmbed);
}

if (message.author.id == ownerID) return console.log('[shikigami]isDev: true');
callStatLogger({target: nameString, option:hasOptions, author: message.author.username, comment: hasComments});

},
};