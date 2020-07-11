const fs = require("fs");

module.exports = {
    name: "reee",
    execute(message) {
        
        if (message.author.id = "568685551914582016") {

            let y = {
                "channelid" : [
                    `${message.channel.id}`
                ]
            };

            let x = JSON.stringify(y, null, 2);
            fs.writeFileSync("./ref/channels.json", x);

            message.channel.send("disabled `shikigami` command in this channel!")

        } else {

            message.channel.send("You are not allowed to use this command!");

        }

    },
};