var gulp = require('gulp');
var inject = require('gulp-inject');
var series = require('stream-series');

gulp.task('inject',function(callback){
  var vendorJS = gulp.src('./MagicManagerWebSite/Scripts/**/*.js',{read: false})
  var appJS = gulp.src('./MagicManagerWebSite/App/**/*.js', {read: false});
  var vendorCSS = gulp.src('./MagicManagerWebSite/Content/**/vendor-*.css', {read: false});
  var appCSS = gulp.src('./MagicManagerWebSite/Content/**/app-*.css', {read: false});
  return gulp.src('./MagicManagerWebSite/src/index.html')
    .pipe(inject(series(vendorCSS,appCSS,vendorJS,appJS),{relative:true,ignorePath:'..'}))
    .pipe(gulp.dest('./MagicManagerWebSite'));
})
