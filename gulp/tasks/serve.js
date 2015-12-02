//this is the file for the gulp webserver tasks

// call the gulp library
// The streaming build system
// https://www.npmjs.com/package/gulp
// https://github.com/gulpjs/gulp
var gulp = require('gulp');

//we call the server script
var server = require('../../serve/dev.js');


// the main gulp webserver task
gulp.task('webserver', function() {
  server();
});