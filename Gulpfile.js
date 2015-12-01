// Call the require-dir library
// A module for importing a directory of Node.js modules and adding them into an array or as properties of the module variable.
// https://www.npmjs.com/package/requiredir
// https://github.com/JamesEggers1/node-requiredir
var requireDir = require('require-dir');

//get the package.json containing details about the npm package of this app to extract info for gulp-talk2me
var packageInfo = require('./package.json');

//create a list of available tasks in gulp
var taskList = [{name:'default'},{name:'delete'},{name:'build:dev'},{name:'build:dist'},{name:'csproj'}];

// Call the gulp-talk2me library and load it
// A little package to generate help texts for gulp tasks
// https://www.npmjs.com/package/gulp-talk2me
// https://github.com/belgac/gulp-talk2me
var gulpTalk2me = require('gulp-talk2me');
var talk2me = new gulpTalk2me(packageInfo,taskList);

//greet the user with gulp talk2me
console.log(talk2me.greeting);

//get all gulp tasks in the gulp/tasks directory and it's sub-directories
requireDir('./gulp/tasks', { recurse: true });