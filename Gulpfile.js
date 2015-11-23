var requireDir = require('require-dir');

//get all gulp tasks in the gulp/tasks directory and it's sub-directories
requireDir('./gulp/tasks', { recurse: true });