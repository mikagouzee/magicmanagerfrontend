//this is the file for the gulp build tasks

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

//the build task for the dev environment
gulp.task('build:dev',function(callback){
  runSequence(
    //we start by deleting the previous builds
    'delete',
    //we launch in parallel the task to concat the js and css files and the task to copy fonts and images
    ['concat','copy'],
    //we inject the references to our scripts and css in index.html
    'inject',
    //we generate the csproj for visual studio
    'csproj',
    callback
  )
});

//the build task for the distribution environment
gulp.task('build:dist',function(callback){
  runSequence(
    //we start by deleting the previous builds
    'delete',
    //we launch in parallel the task to concat css files, the task to minify the js files and the task to copy fonts and images
    ['minify','concat:css','copy'],
    //we inject the references to our scripts and css in index.html
    'inject',
    //we generate the csproj for visual studio
    'csproj',
    callback
  ) 
});