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
let options = [
    ["BACKGROUND", 1],
    ["LAYOUT", 1],
    ["THEME", 1]
];

loadSourcesOrOptions(options, "options");


// load latest sources
let sources = [
    ["TWITTER", 1],
    ["WEATHER", 1],
    ["YOUTUBE", 1],
    ["GOOGLE_CALENDAR", 1],
    ["COUNTDOWN", 1]
];

loadSourcesOrOptions(sources, "sources");
for (let [sourceName, sourceVersion] of core["sources"]) {
    core["sources"][sourceName].position = null;
}



// load layouts
let layouts = [["auto", 1], ["3-col", 1], ["4-col", 1]];
loadSourcesOrOptions(layouts, "layouts");

module.exports = core;