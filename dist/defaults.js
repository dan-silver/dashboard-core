/// <reference path="./typings/index.d.ts" />
var authSources = require('../authSources');
var core = {};
function loadSourcesOrOptions(dataArr, dirName) {
    core[dirName] = {};
    for (var _i = 0, dataArr_1 = dataArr; _i < dataArr_1.length; _i++) {
        var _a = dataArr_1[_i], sourceName = _a[0], sourceVersion = _a[1];
        core[dirName][sourceName] = require("../" + dirName + "/" + sourceName + "/" + sourceVersion);
        core[dirName][sourceName].version = sourceVersion;
    }
}
// load latest options
var options = [
    ["BACKGROUND", 1],
    ["LAYOUT", 1],
    ["THEME", 1],
    ["CARDS", 1]
];
loadSourcesOrOptions(options, "options");
// load latest sources
var sources = [
    ["TWITTER", 1],
    ["WEATHER", 1],
    ["YOUTUBE", 1],
    ["GOOGLE_CALENDAR", 1],
    ["COUNTDOWN", 1],
    ["RSS", 1],
    ["CLOCK", 1]
];
loadSourcesOrOptions(sources, "sources");
for (var _i = 0, _a = core["sources"]; _i < _a.length; _i++) {
    var _b = _a[_i], sourceName = _b[0], sourceVersion = _b[1];
    core["sources"][sourceName].position = null;
}
// load layouts
var layouts = [["auto", 1], ["3-col", 1], ["4-col", 1]];
loadSourcesOrOptions(layouts, "layouts");
core['authSources'] = authSources;
// URLs
core['URL'] = require("../URL");
module.exports = core;
//# sourceMappingURL=defaults.js.map