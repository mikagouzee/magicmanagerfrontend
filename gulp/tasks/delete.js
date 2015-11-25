var gulp = require('gulp');
var del = require('del');

gulp.task('delete',function(callback){
  del(['./MagicManagerWebSite/index.html','./MagicManagerWebSite/App/**/*','./MagicManagerWebSite/Scripts/**/*','./MagicManagerWebSite/Content/**/*','./MagicManagerWebSite/fonts/**/*'],callback())
})