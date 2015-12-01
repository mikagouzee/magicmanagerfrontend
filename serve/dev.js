
// call the gulp-connect library
// Gulp plugin to run a webserver (with LiveReload)
// https://www.npmjs.com/package/gulp-connect
// https://github.com/avevlad/gulp-connect
var connect = require('gulp-connect');

// we call the config file
var config = require('../config/config.json').dev.server;

// the server module with host,port and root config
module.exports = function(){
  return connect.server({
     port: config.port,
      host: config.host,
      root: './MagicManagerWebSite'
  });
}