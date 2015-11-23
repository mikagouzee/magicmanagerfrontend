var gulp = require('gulp');
var runSequence = require('run-sequence');
var inject = require('gulp-inject');

gulp.task('inject',function(callback){
  runSequence('inject:js',callback)
})

gulp.task('inject:js',function(){
  return gulp.src('./MagicManagerWebSite/src/index.html')
    .pipe(inject(gulp.src('./MagicManagerWebSite/App/**/*.js', {read: false}),{relative:true,ignorePath:'..'}))
    .pipe(gulp.dest('./MagicManagerWebSite'));
})