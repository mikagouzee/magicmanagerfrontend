//this is the file for the gulp csproj tasks

// call the gulp library
// The streaming build system
// https://www.npmjs.com/package/gulp
// https://github.com/gulpjs/gulp
var gulp = require('gulp');

// call the gulp-inject library
// A javascript, stylesheet and webcomponent injection plugin for Gulp, i.e. inject file references into your index.html
// https://www.npmjs.com/package/gulp-inject
// https://github.com/klei/gulp-inject
var inject = require('gulp-inject');

// the csproj injection gulp task
gulp.task('csproj',function(){
  //we load the csproj file
  return gulp.src('MagicManagerWebSite/MagicManagerWebSite.csproj')
    //we inject all src and generated files to csproj with custom start and end tags and following the xml pattern
    .pipe(inject(
      gulp.src(['MagicManagerWebSite/App/**/*','MagicManagerWebSite/Scripts/**/*','MagicManagerWebSite/fonts/**/*','MagicManagerWebSite/Content/**/*','MagicManagerWebSite/src/**/*','MagicManagerWebSite/mockApi/**/*']),
      {
        starttag: '<!-- gulpinject:{{ext}} -->',
        endtag: '<!-- endgulpinject -->',
     		transform: function (filepath) {
          filepath = filepath.replace("/MagicManagerWebSite/", "").replace(/\//g,'\\');  
        	return '<Content Include="' + filepath + '"/>';
      	}
    	}))
    //we overwrite the csproj file
    .pipe(gulp.dest('MagicManagerWebSite/'))
})