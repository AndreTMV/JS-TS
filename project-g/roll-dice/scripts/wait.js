// wait library
'use strict';

// implement setTimeout as a promise
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
