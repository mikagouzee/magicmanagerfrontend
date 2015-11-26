var gulp = require('gulp');
var runSequence = require('run-sequence');
var bowerFiles = require('main-bower-files');
var gulpFilter = require('gulp-filter');

gulp.task('copy',function(callback){
  runSequence(['copy:fonts','copy:images'],callback)
});

gulp.task('copy:fonts',function(){
	var fontsFilter = gulpFilter(['**/*.eot','**/*.svg','**/*.ttf','**/*.woff','**/*.woff2','**/*.otf']);
  return gulp.src(bowerFiles())
	.pipe(fontsFilter)
  .pipe(gulp.dest('./MagicManagerWebSite/fonts'))
});

gulp.task('copy:images',function(){
  return gulp.src('./MagicManagerWebSite/src/Content/**/*.+(jpg|png|gif)')
    .pipe(gulp.dest('./MagicManagerWebSite/Content'));
})