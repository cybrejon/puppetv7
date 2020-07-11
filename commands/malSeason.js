const malScraper = require('mal-scraper')
const { stripIndents } = require("common-tags");
const fs = require("fs");

module.exports = {
    name: "mal.season",
    aliases: ['m.s'],
    execute(message, args) {

        const typeText = args[0].toLowerCase();
        const seasonText = args[1].toLowerCase();
        const yearText = args[2].toLowerCase();

        const season = seasonText;
        const year = yearText;
        var typeText_invoke = new String();

            var keywords_tv = ['tv', 'anime'],
                keywords_tvNew = ['tvnew', 'new'],
                keywords_tvCon = ['ongoing'],
                keywords_ova = ['ova', 'ovas'],
                keywords_ona = ['ona', 'onas'],
                keywords_movies = ['movie', 'movies', 'theatrical'],
                keywords_specials = ['special', 'specials', 'shorts'];

        if (keywords_tv.includes(typeText)) {
            typeText_invoke = 'TV';

        } else if (keywords_tvNew.includes(typeText)) {
            typeText_invoke = 'TVNew';

        } else if (keywords_tvCon.includes(typeText)) {
            typeText_invoke = 'TVCon';

        } else if (keywords_ova.includes(typeText)) {
            typeText_invoke = 'OVAs';

        } else if (keywords_ona.includes(typeText)) {
            typeText_invoke = 'ONAs';

        } else if (keywords_movies.includes(typeText)) {
            typeText_invoke = 'Movies';

        } else if (keywords_specials.includes(typeText)) {
            typeText_invoke = 'Specials';
        }

        malScraper.getSeason(year, season)
        // `data` is an object containing the following keys: 'TV', 'TVNew', 'TVCon', 'OVAs', 'ONAs', 'Movies' and 'Specials'
        .then((data) => {
            message.channel.send(stripIndents`
                **${typeText_invoke} aired (or Planned/To be Aired) by ${season} of ${year}**
                :small_orange_diamond: Type \`pup mal <title>\` to get anime detail.

                1. ${data[`${typeText_invoke}`][0].releaseDate} - **${data[`${typeText_invoke}`][0].title}**
                2. ${data[`${typeText_invoke}`][1].releaseDate} - **${data[`${typeText_invoke}`][1].title}**
                3. ${data[`${typeText_invoke}`][2].releaseDate} - **${data[`${typeText_invoke}`][2].title}**
                4. ${data[`${typeText_invoke}`][3].releaseDate} - **${data[`${typeText_invoke}`][3].title}**
                5. ${data[`${typeText_invoke}`][4].releaseDate} - **${data[`${typeText_invoke}`][4].title}**
                6. ${data[`${typeText_invoke}`][5].releaseDate} - **${data[`${typeText_invoke}`][5].title}**
                7. ${data[`${typeText_invoke}`][6].releaseDate} - **${data[`${typeText_invoke}`][6].title}**
                8. ${data[`${typeText_invoke}`][7].releaseDate} - **${data[`${typeText_invoke}`][7].title}**
                9. ${data[`${typeText_invoke}`][8].releaseDate} - **${data[`${typeText_invoke}`][8].title}**
                10. ${data[`${typeText_invoke}`][9].releaseDate} - **${data[`${typeText_invoke}`][9].title}**
            `);

            const dataStringed = JSON.stringify(data, null, ' ');
            fs.writeFileSync('./data/mal_season.json', dataStringed);
        })
        .catch((err) => console.log(err))

    },
};

