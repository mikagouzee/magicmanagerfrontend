var gulp = require('gulp');
var inquirer = require('inquirer');
var server = require('../../serve/dev.js');



gulp.task('webserver', function() {
  server();
});