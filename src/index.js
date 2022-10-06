const modules = {};
const msgPath = require('path').join(__dirname, 'msg');
require('fs')
    .readdirSync(msgPath)
    .forEach((file) => {
        let tmp = require(`./msg/${file}`);
        for (var name in tmp) {
            modules[name] = tmp[name];
        }
    });

module.exports = modules;