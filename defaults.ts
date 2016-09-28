let core = {
    options: {},
    sources: {}
}

function loadSourcesOrOptions(dataArr, dirName) {
    for (let [sourceName, sourceVersion] of dataArr) {
        core[dirName][sourceName] = require(`./${dirName}/${sourceName}/${sourceVersion}`);
        core[dirName][sourceName].version = sourceVersion;
    }
}


// load latest options
let options = [["BACKGROUND", 1]];
loadSourcesOrOptions(options, "options");


// load latest sources
let sources = [["TWITTER", 1], ["WEATHER", 1]];
loadSourcesOrOptions(sources, "sources");


const fs = require('fs');
// browser version
fs.writeFileSync('./dist/defaultsBrowser.js', "var defaults = " + JSON.stringify(core) , 'utf-8');

// pretty json file with indentation
fs.writeFileSync('./dist/data.json', JSON.stringify(core, null, 4) , 'utf-8'); 


module.exports = core;