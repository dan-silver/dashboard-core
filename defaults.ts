let core = {
    options: {},
    sources: {}
}

// load latest options
core.options["BACKGROUND"] = require("./options/BACKGROUND/latest");


// load latest sources
let sources = ["TWITTER", "WEATHER"];
for (let source of sources) {
    core.sources[source] = require(`./sources/${source}/latest`);
}


const fs = require('fs');
fs.writeFileSync('./data.json', JSON.stringify(core, null, 4) , 'utf-8'); 



module.exports = core;