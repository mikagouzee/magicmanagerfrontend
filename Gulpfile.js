var requireDir = require('require-dir');
//get the package.json for info
var packageInfo = require('./package.json');
//create a list of available tasks
var taskList = [{name:'default'}];

//load gulp talk2me to inform user of what's happening with gulp
var gulpTalk2me = require('gulp-talk2me');
var talk2me = new gulpTalk2me(packageInfo,taskList);

//greet the user
console.log(talk2me.greeting);

//get all gulp tasks in the gulp/tasks directory and it's sub-directories
requireDir('./gulp/tasks', { recurse: true });