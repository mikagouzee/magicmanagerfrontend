var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:dev',function(callback){
  runSequence('delete',['concat','copy'],'inject',callback)
});

gulp.task('build:dist',function(callback){
  runSequence('delete',['minify','concat:css','copy'],'inject',callback) 
});