var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server({
     port: 3000,
      host: '0.0.0.0',
      root: '../'
  });
});