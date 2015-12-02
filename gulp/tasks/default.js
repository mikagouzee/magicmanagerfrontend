//this is the gulp default task

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

// call the inquirer library
// A collection of common interactive command line user interfaces.
// https://www.npmjs.com/package/inquirer
// https://github.com/sboudrias/Inquirer.js
var inquirer = require('inquirer');


// Prepare the questions for inquirer
var questions = [
  {
    //this question detemines if we use build:dist or build:dev
    type: 'list',
    name: 'environment',
    message: 'What type of build do you want to run',
    choices: [ 'dev', 'dist'],
    default:'dist'
  },
  {
    //this question determines if we launch the gulp webserver task
    type:'confirm',
    name:'serve',
    message: 'Would you like to serve the build for visual testing?',
    default:false
  }
]

//the gulp default task itself
gulp.task('default',function(callback){
  //launch te prompts for the build questions
  inquirer.prompt( questions, function( answers ) {
    // create a variable to choose wich build task we will use depending on the environement
    var build = 'build:'+answers.environment;
    // detects if the user want to serve his project with gulp
    if(answers.serve) {
      // the user wants to serve his project we launch the correct build task depending on the environement and then the webserver
      runSequence(build,'webserver',callback)
    } else {
      // the user doesn't want to serve his project we launch the correct build task depending on the environement
      runSequence(build,callback)
    }     
  })
 
})