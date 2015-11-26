//it's a gulp task we need gulp
var gulp = require('gulp');
var runSequence = require('run-sequence');
var inquirer = require('inquirer');

var questions = [
  {
    type: 'list',
    name: 'environment',
    message: 'What type of build do you want to run',
    choices: [ 'dev', 'dist'],
    default:'dist'
  },
  {
    type:'confirm',
    name:'serve',
    message: 'Would you like to serve the build for visual testing?',
    default:false
  }
]
gulp.task('default',function(callback){
  inquirer.prompt( questions, function( answers ) {
    var build = 'build:'+answers.environment;
    if(answers.serve) {
      runSequence(build,'webserver',callback)
    } else {
      runSequence(build,callback)
    }     
  })
 
})