//it's a gulp task we need gulp
var gulp = require('gulp');
var runSequence = require('run-sequence');
var inquirer = require('inquirer');

var questions = [
  {
    type: "list",
    name: "environment",
    message: "What type of build do you want to run",
    choices: [ "dev", "dist"]
  }
]
gulp.task('default',function(callback){
  inquirer.prompt( questions, function( answers ) {
     runSequence('build:'+answers.environment,callback)
  })
 
})