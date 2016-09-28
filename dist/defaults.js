/// <reference path="./typings/index.d.ts" />
var core = {
    options: {},
    sources: {}
};
function loadSourcesOrOptions(dataArr, dirName) {
    for (var _i = 0, dataArr_1 = dataArr; _i < dataArr_1.length; _i++) {
        var _a = dataArr_1[_i], sourceName = _a[0], sourceVersion = _a[1];
        core[dirName][sourceName] = require("./" + dirName + "/" + sourceName + "/" + sourceVersion);
        core[dirName][sourceName].version = sourceVersion;
    }
}
// load latest options
var options = [["BACKGROUND", 1]];
loadSourcesOrOptions(options, "options");
// load latest sources
var sources = [["TWITTER", 1], ["WEATHER", 1]];
loadSourcesOrOptions(sources, "sources");
var fs = require('fs');
// browser version
fs.writeFileSync('./dist/defaultsBrowser.js', "var defaults = " + JSON.stringify(core), 'utf-8');
// pretty json file with indentation
fs.writeFileSync('./dist/data.json', JSON.stringify(core, null, 4), 'utf-8');
module.exports = core;
//# sourceMappingURL=defaults.js.map