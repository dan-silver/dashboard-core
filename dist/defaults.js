/// <reference path="./typings/index.d.ts" />
var core = {
    options: {},
    sources: {}
};
function loadSourcesOrOptions(dataArr, dirName) {
    for (var _i = 0, dataArr_1 = dataArr; _i < dataArr_1.length; _i++) {
        var _a = dataArr_1[_i], sourceName = _a[0], sourceVersion = _a[1];
        core[dirName][sourceName] = require("../" + dirName + "/" + sourceName + "/" + sourceVersion);
        core[dirName][sourceName].version = sourceVersion;
    }
}
// load latest options
var options = [["BACKGROUND", 1]];
loadSourcesOrOptions(options, "options");
// load latest sources
var sources = [["TWITTER", 1], ["WEATHER", 1]];
loadSourcesOrOptions(sources, "sources");
module.exports = core;
//# sourceMappingURL=defaults.js.map