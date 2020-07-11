const fs = require('fs');

module.exports = {
    name: 'build',
    execute(message, args) {

        const buildsPath = fs.readdirSync('./data/build_data/');

        const ifEmpty = () => {
            if (!buildsPath.length) {
                message.reply('builds path is empty, send warn');
            } else {
                try {
                    const bdp = fs.readFileSync(`./data/build_data/${message.author.id}.json`);
                    const bd  = JSON.parse(bdp);
                    message.channel.send(bd.build.join(''));
                } catch (error) {
                    // console.log(error);
                    message.reply('you have not created a build set yet! Start typing item names next to this command.');
                }
            }
        }

        if(!args.length) return ifEmpty();

        const ie = fs.readFileSync('./data/emojis_item.json');
        const iep  = JSON.parse(ie);

        if (!Object.keys(iep.item_emotes).includes(args[0])) return message.reply('that item does not exist!');

        const makeBuild = new Array();

        for (var x = 0; x <= args.length-1; x++) {
            makeBuild[x] = iep.item_emotes[`${args[x]}`];
        }

        const newSet = {
            "username" : message.author.username,
            "id" : message.author.id,
            "build" : makeBuild
        }

        console.log(newSet);

        const newSetString = JSON.stringify(newSet, null, 2);

        fs.writeFileSync(`./data/build_data/${message.author.id}.json`, newSetString);

        message.channel.send(newSet.build.join(''));

    }
};