/// <reference path="./typings/index.d.ts" />


let core = {}

function loadSourcesOrOptions(dataArr, dirName) {
    core[dirName] = {}
    for (let [sourceName, sourceVersion] of dataArr) {
        core[dirName][sourceName] = require(`../${dirName}/${sourceName}/${sourceVersion}`);
        core[dirName][sourceName].version = sourceVersion;
    }
}


// load latest options
let options = [["BACKGROUND", 1]];
loadSourcesOrOptions(options, "options");


// load latest sources
let sources = [["TWITTER", 1], ["WEATHER", 1], ["YOUTUBE", 1]];
loadSourcesOrOptions(sources, "sources");

// load layouts
let layouts = [["3-col", 1], ["4-col", 1]];
loadSourcesOrOptions(layouts, "layouts");

module.exports = core;