var gulp = require('gulp');
var runSequence = require('run-sequence');
var bowerFiles = require('main-bower-files');
var gulpFilter = require('gulp-filter');
var series = require('stream-series');
var templateStream = require('../utilities/templateStream.js')
var sourcemaps = require('gulp-sourcemaps');
var angularFilesort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('concat',function(callback){
  runSequence(['concat:js'],callback);
});

gulp.task('concat:js',function(callback){
  runSequence(['concat:js:app','concat:js:bower'],callback);
});

gulp.task('concat:js:bower',function(){
  var jsFilter = gulpFilter('**/*.js');
  return gulp.src(bowerFiles())
    .pipe(jsFilter)
    .pipe(sourcemaps.init())
    .pipe(angularFilesort())
    .pipe(concat('vendor.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./MagicManagerWebSite/Scripts'));
});

gulp.task('concat:js:app',function(){
  return series(templateStream(),gulp.src('./MagicManagerWebSite/src/App/**/*.js'))
    .pipe(sourcemaps.init())
    .pipe(angularFilesort())
    .pipe(concat('App.js', {newLine: ';\n'}))
    .pipe(ngAnnotate({
      add: true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(
      gulp.dest('./MagicManagerWebSite/App')
    )
});

