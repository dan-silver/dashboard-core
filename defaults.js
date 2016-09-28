var core = {
    options: {},
    sources: {}
};
// load latest options
core.options["BACKGROUND"] = require("./options/BACKGROUND/1");
// load latest sources
var sources = ["TWITTER", "WEATHER"];
for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
    var source = sources_1[_i];
    core.sources[source] = require("./sources/" + source + "/latest");
}
var fs = require('fs');
fs.writeFileSync('./data.json', JSON.stringify(core, null, 4), 'utf-8');
//# sourceMappingURL=defaults.js.map