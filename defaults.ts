/// <reference path="./typings/index.d.ts" />


let core = {
    options: {},
    sources: {}
}

function loadSourcesOrOptions(dataArr, dirName) {
    for (let [sourceName, sourceVersion] of dataArr) {
        core[dirName][sourceName] = require(`../${dirName}/${sourceName}/${sourceVersion}`);
        core[dirName][sourceName].version = sourceVersion;
    }
}


// load latest options
let options = [["BACKGROUND", 1]];
loadSourcesOrOptions(options, "options");


// load latest sources
let sources = [["TWITTER", 1], ["WEATHER", 1]];
loadSourcesOrOptions(sources, "sources");

module.exports = core;