const { mods } = require('../config.json');
const fs = require('fs');

module.exports = {
    name: 'clearall',
    aliases: ['call'],
    execute(message, args) {

        const raw_modData = JSON.stringify(mods);
        const modID = JSON.parse(raw_modData);

        console.log(modID);

        if (modID.includes(message.author.id)) {
            
            const dirContents = fs.readdirSync('./data/comments/');

            if (dirContents.length >= 1) {

                for (var x=0; x <= dirContents.length - 1; x++) {

                    fs.unlink(`./data/comments/${dirContents[x]}`, (err) => {
                        if (err) throw err;
                    });

                }

                message.channel.send(`:white_check_mark: all comment files have been removed!`);

            } else {

                message.channel.send(':ballot_box_with_check: no comment files have been found!');

            }
            
        } else return message.channel.send(':x: You do not have permission to use this command!');

    },
};