var gulp = require('gulp');
var del = require('del');

gulp.task('delete',function(callback){
  del(['./MagicManagerWebSite/index.html','./MagicManagerWebSite/App/**/*'],callback())
})