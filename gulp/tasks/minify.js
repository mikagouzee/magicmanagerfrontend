var gulp = require('gulp');
var runSequence = require('run-sequence');
var series = require('stream-series');
var templateStream = require('../utilities/templateStream.js')
var sourcemaps = require('gulp-sourcemaps');
var angularFilesort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var bytediff = require('gulp-bytediff');
var uglify = require('gulp-uglify');
var bowerFiles = require('main-bower-files');
var gulpFilter = require('gulp-filter');

gulp.task('minify',function(callback){
  runSequence(['minify:app','minify:bower'],callback)
})

gulp.task('minify:app',function(){
  return series(templateStream(),gulp.src('./MagicManagerWebSite/src/App/**/*.js'))
    .pipe(sourcemaps.init())
    .pipe(angularFilesort())
    .pipe(concat('App.js', {newLine: ';\n'}))
    .pipe(ngAnnotate({
      add: true
    }))
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(bytediff.start())
    .pipe(uglify({mangle: true}))
    .pipe(bytediff.stop())
    .pipe(sourcemaps.write('./'))
    .pipe(
      gulp.dest('./MagicManagerWebSite/App')
    )
});

gulp.task('minify:bower',function(){
  var jsFilter = gulpFilter('**/*.js');
  return gulp.src(bowerFiles())
    .pipe(jsFilter)
    .pipe(sourcemaps.init())
    .pipe(angularFilesort())
    .pipe(concat('vendor.js'))
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(bytediff.start())
    .pipe(uglify({mangle: true}))
    .pipe(bytediff.stop())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./MagicManagerWebSite/Scripts'));
});