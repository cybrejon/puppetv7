var gis = require('g-i-s');
const fs = require("fs");
const Discord = require("discord.js");

const { embed_conf } = require('../config.json');
const embc = JSON.stringify(embed_conf);
const embedConf = JSON.parse(embc);

module.exports = {
    name: "search",
    aliases: ['google'],
    execute(message, args) {

      gis(args.join(" "), logResults);

      function logResults(error, results) {
        if (error) {
          console.log(error);
        }
        else {

          var strData = JSON.stringify(results, null, '  ');
          fs.writeFileSync('./data/imgres.json', strData);

          var rawImgData = fs.readFileSync("./data/imgres.json");
          var parsedImgData = JSON.parse(rawImgData);
            var searchEmb = new Discord.MessageEmbed()
            .setColor(embedConf.color)
            .setImage(parsedImgData[0].url)
            .addField("url", parsedImgData[0].url)
            .setFooter(`Resolution: ${parsedImgData[0].width} x ${parsedImgData[0].height}`)
              message.channel.send(searchEmb);
              
        }
      };

    },
};