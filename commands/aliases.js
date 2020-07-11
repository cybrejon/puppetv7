const {stripIndents} = require('common-tags');
const Discord = require('discord.js');

module.exports = {
    name: 'list',
    aliases: ['aliases', 'alias', 'keys'],
    execute(message, args) {

        const embed1 = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setDescription(stripIndents`
            :warning: Don't use the bold text as the shikigami name.

            **aoandon** : aoa, aoandon
            **aobozu** : ao, aobozu
            **arakawa** : ara, arakawa, lord-arakawa
            **chin** : chin, eyebrows
            **dodomeki** : dodo, dodomeki
            **ebisu** : ebisu
            **enenra** : enen, enenra
            **enma** : en, enma
            **dai_shimei** : dai-shimei, dai, shimei
            **futakuchi** : futa, futakuchi
            **hakuro** : hakuro
            **hana** : hana
            **hangan** : hang, hangan
            **hannya** : hannya, hanya
            **higanbana** : higan, higanbana
            **hiyoribou** : hiyo, hiyoribou
            **hone_onna** : hone, hone-ona, hone-onna
            **hououga** : hou, hououga
            **ibaraki_doji** : iba, ibaraki, ibaraki-douji, ibaraki-doji
            **ichimokuren** : ichi, ichimokuren
            **inugami** : inu, inugami
            **inuyasha** : inu, inuyasha
            **itsumade** : itsu, itsumade
            **ittan_momen** : ittan, momen, ittan-momen
            **jikikaeru** : jiki, jikki, jikikaeru
            **jorogumo** : joro, jorogumo
            **kaguya** : kag, kaguya
            `);

        const embed2 = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setDescription(stripIndents`
            **kamaitachi** : kamai, kamaitachi
            **kanko** : kanko
            **karasu_tengu** : karasu, karasu tengu
            **kikyo** : kikyo
            **kingyo** : king, kingyo
            **kisei** : kis, kisei
            **kiyohime** : kiyo, kiyohime
            **komatsu** : komatsu
            **kosodenote** : koso, kosodenote
            **kubinashi** : kubi, kubinashi
            **kuro_mujou** : kurom, kuro-mujou
            **kuro** : kuro, kuro-douji
            **kusa** : kusa
            **kyonshi_ani** : ani, kyonshi-ani, kyonshi-aniki
            **kyonshi_imoto** : imoto, kyonshi-imoto, kyonshi-imouto
            **kyuumei_neko** : neko, kyumei-neko, kyuumei-neko
            **maestro** : maestro
            **mannendake** : mannen, mannendake
            **menreiki** : menre, menreiki
            **miketsu** : miketsu
            **momiji** : momi, momiji
            **momo** : momo
            **mouba** : moba, mouba
            **oitsuki** : oitsuki
            **onikiri** : oni, onikiri
            **ootengu** : oteng, ooteng, ootengu
            **puppeteer** : puppet, puppeteer, pup, kairaishi
            **ryomen** : ryo, ryomen
            **samurai_x** : samx, samurai-x
            `);

        const embed3 = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setDescription(stripIndents`
            **sesshomaru** : sessho, sesshomaru, sesshoumaru
            **shiro_mujou** : shirom, shiro-mujou
            **shiro** : shiro, shiro douji, shiro-doji
            **shishio** : shishio
            **shuuten_doji** : shuten, shuuten, shuten-doji, shuuten-doji
            **susabi** : susabi, susa
            **suzuka_gozen** : suzuka-gozen, gozen, suzuka
            **tamamonomae** : tamamo, tamamonomae
            **tanuki** : tanuki, tanooki
            **tesso** : tess, tesso
            **ubume** : ubume
            **umibozu** : umi, umibozu, umibouzu
            **vampira** : vamp, vampira
            **yamakaze** : yama, yamakaze
            **yamausagi** : yamausa, yamausagi
            **yamawaro** : yamawaro
            **yasha** : yasha
            **yoto_hime** : yoto, yoto-hime
            **youko** : yoko, youko
            **yuki_onna** : yukio, yukion, yuki-onna
            **yuki** : yuki
            **yumekui** : yume, yumekui
            **satori** : sat, satori
            **hakuzosu** : haku, kohaku, hakuzosu, zosu
            **zashiki** : zashi, zashiki, zas
            `);

            message.channel.send(embed1);
            message.channel.send(embed2);
            message.channel.send(embed3);

    },
};