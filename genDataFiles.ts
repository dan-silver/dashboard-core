/// <reference path="./typings/index.d.ts" />

let coreDefaults = require("./defaults");

const fs = require('fs');
// browser version
fs.writeFileSync('dist/defaultsBrowser.js', "var defaults = " + JSON.stringify(coreDefaults) , 'utf-8');

// pretty json file with indentation
fs.writeFileSync('dist/data.json', JSON.stringify(coreDefaults, null, 4) , 'utf-8'); 

