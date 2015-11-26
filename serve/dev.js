var connect = require('gulp-connect');
var config = require('../config/config.json').dev.server;

module.exports = function(){
  return connect.server({
     port: config.port,
      host: config.host,
      root: './MagicManagerWebSite'
  });
}