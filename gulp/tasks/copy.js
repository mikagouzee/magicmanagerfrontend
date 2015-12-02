//this is the file for the gulp copy tasks

// call the gulp library
// The streaming build system
// https://www.npmjs.com/package/gulp
// https://github.com/gulpjs/gulp
var gulp = require('gulp');

// call the run-sequence library
// Run a series of dependent gulp tasks in order
// https://www.npmjs.com/package/run-sequence
// https://github.com/OverZealous/run-sequence
var runSequence = require('run-sequence');

// call the main-bower-files library
// Get main files from your installed bower packages.
// https://www.npmjs.com/package/main-bower-files
// https://github.com/ck86/main-bower-files
var bowerFiles = require('main-bower-files');

// call the gulp-filter library
// Filter files in a vinyl stream
// https://www.npmjs.com/package/gulp-filter
// https://github.com/sindresorhus/gulp-filter
var gulpFilter = require('gulp-filter');

// the main gulp copy task
gulp.task('copy',function(callback){
   //this task calls the fonts and images copy tasks in parralel
  runSequence(['copy:fonts','copy:images'],callback)
});

//the gulp task to copy fonts
gulp.task('copy:fonts',function(){
  //we prepare a filter to only take the font files from bower main files
	var fontsFilter = gulpFilter(['**/*.eot','**/*.svg','**/*.ttf','**/*.woff','**/*.woff2','**/*.otf']);
  
  //we load all the bower dependencies main files
  return gulp.src(bowerFiles())
   //we filter to only take the font files
	.pipe(fontsFilter)
  //we copy the files to the destination directory
  .pipe(gulp.dest('./MagicManagerWebSite/fonts'))
});

//the gulp task to copy the images
gulp.task('copy:images',function(){
  
  //we load all the jpg png and gif files from the content folder
  return gulp.src('./MagicManagerWebSite/src/Content/**/*.+(jpg|png|gif)')
    //we copy the files to the destination directory
    .pipe(gulp.dest('./MagicManagerWebSite/Content'));
})