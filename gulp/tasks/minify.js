var gulp = require('gulp');
var series = require('stream-series');
var templateStream = require('../utilities/templateStream.js')
var sourcemaps = require('gulp-sourcemaps');
var angularFilesort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var bytediff = require('gulp-bytediff');
var uglify = require('gulp-uglify');

gulp.task('minify',function(){
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
})