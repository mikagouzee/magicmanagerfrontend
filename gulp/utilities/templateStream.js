var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

module.exports = function genTemplateStream () {
  return gulp.src('./MagicManagerWebSite/src/App/**/*.view.html')
  .pipe(templateCache({standalone:true,module:'magicManagerApp.templates'}));
}