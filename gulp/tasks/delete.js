var gulp = require('gulp');
var del = require('del');

gulp.task('delete',function(callback){
  del('./MagicManagerWebSite/App/**/*',callback())
})