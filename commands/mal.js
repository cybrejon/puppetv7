const Discord = require("discord.js");
const malScraper = require('mal-scraper');
const search = malScraper.search;
const fs = require("fs");
const { stripIndents } = require("common-tags");

const { embed_conf } = require('../config.json');
const embc = JSON.stringify(embed_conf);
const embedConf = JSON.parse(embc);

module.exports = {
    name: "mal",
    aliases: ['m'],
    execute(message, args) {

        const name = args.join(" ");

        malScraper.getInfoFromName(name)
        .then((data) => {
            const strData = JSON.stringify(data, null, ' ');
            fs.writeFileSync('./data/mal.json', strData);
                const jsonData = fs.readFileSync('./data/mal.json');
                const mainData = JSON.parse(jsonData);

                const characters_arr = new Array();
                for (var x = 0; x <= mainData.characters.length - 1; x++) {
                    characters_arr[x] = mainData.characters[x].name;
                }

                const prods_arr = new Array();
                for (var y = 0; y <= mainData.producers.length -1; y++) {
                    prods_arr[y] = mainData.producers[y];
                }

                const studio_arr = new Array();
                for (var z = 0; z <= mainData.studios.length -1; z++) {
                    studio_arr[z] = mainData.studios[z];
                }

                const genre_arr = new Array();
                for (var q = 0; q <= mainData.genres.length -1; q++) {
                    genre_arr[q] = mainData.genres[q];
                }

                const animeDetails = stripIndents`
                English title: ${mainData.englishTitle}
                Japanese title: ${mainData.japaneseTitle}
                Type: ${mainData.type}
                Episodes: ${mainData.episodes}
                Status: ${mainData.status}
                Aired: ${mainData.aired}
                Premiered: ${mainData.premiered}
                Producers: ${prods_arr.join(", ")}
                Studios: ${studio_arr.join(", ")}
                Source: ${mainData.source}
                Genres: ${genre_arr.join(", ")}
                Duration: ${mainData.duration}
                Rating: ${mainData.rating}
                Score: ${mainData.score}
                Ranked: ${mainData.ranked}
                Popularity: ${mainData.ranked}
                Link: ${mainData.url}
                `;

                    const mainEmb = new Discord.MessageEmbed()
                        .setAuthor("myanimelist.net", 'https://cdn.discordapp.com/attachments/679579547737522189/705270265432506379/OK6W_koKDTOqqqLDbIoPAiC8a86sHufn_jOI-JGtoCQ.png', 'https://myanimelist.net')
                        .setThumbnail(mainData.characters[0].picture)
                        .setTitle(mainData.title)
                        .setColor(embedConf.color)
                        .setURL(mainData.url)
                        .setImage(mainData.picture)
                        .setDescription(mainData.synopsis)
                        .addField("Details", animeDetails, true)
                        .addField('Characters', characters_arr, true)
                        .setFooter(message.author.username, message.author.avatarURL)
                    message.channel.send(mainEmb);
        })
        .catch((err) => console.log(err))

    },
};