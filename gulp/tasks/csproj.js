var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('csproj',function(){
  return gulp.src('MagicManagerWebSite/MagicManagerWebSite.csproj')
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
    .pipe(gulp.dest('MagicManagerWebSite/'))
})