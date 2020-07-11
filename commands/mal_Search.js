const malScraper = require('mal-scraper');
const { stripIndents } = require("common-tags");

module.exports = {
    name: "malsearch",
    aliases: "ms",
    execute(message, args) {

        const query = args.join(' ');

        malScraper.getResultsFromSearch(query)
        .then((data) => {
            message.channel.send(stripIndents`
            :mag_right: **Search results:**
            
            **1.** ${data[0].name}
            **2.** ${data[1].name}
            **3.** ${data[2].name}
            **4.** ${data[3].name}
            **5.** ${data[4].name}
            **6.** ${data[5].name}
            **7.** ${data[6].name}
            **8.** ${data[7].name}
            **9.** ${data[8].name}
            **10.** ${data[9].name}
            
            :ledger: \`pup mal <anime title>\` for additional info on specific result.
            `);
        })
        .catch((err) => console.log(err));

    },
};


