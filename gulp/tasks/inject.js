var gulp = require('gulp');
var runSequence = require('run-sequence');
var inject = require('gulp-inject');
var series = require('stream-series');

gulp.task('inject',function(callback){
  runSequence('inject:js',callback)
})

gulp.task('inject:js',function(){
  var vendorJS = gulp.src('./MagicManagerWebSite/Scripts/**/*.js',{read: false})
  var appJS = gulp.src('./MagicManagerWebSite/App/**/*.js', {read: false});
  return gulp.src('./MagicManagerWebSite/src/index.html')
    .pipe(inject(series(vendorJS,appJS),{relative:true,ignorePath:'..'}))
    .pipe(gulp.dest('./MagicManagerWebSite'));
})