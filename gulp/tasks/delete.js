//this is the file for the gulp delete task

// call the gulp library
// The streaming build system
// https://www.npmjs.com/package/gulp
// https://github.com/gulpjs/gulp
var gulp = require('gulp');

// call the del library
// Delete files/folders using globs
// https://www.npmjs.com/package/del
// https://github.com/sindresorhus/del
var del = require('del');

// the gulp delete task
gulp.task('delete',function(callback){
  //we set an array of glob paths to delete and pass it to del
  del(['./MagicManagerWebSite/index.html','./MagicManagerWebSite/App/**/*','./MagicManagerWebSite/Scripts/**/*','./MagicManagerWebSite/Content/**/*','./MagicManagerWebSite/fonts/**/*'],callback())
})