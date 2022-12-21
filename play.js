//const net = require("net");
const connect = require('./client');
const setUpInput = require('./input');
//const handleUserInput = require('./input')


console.log("Connecting ...");
connect();

setUpInput();
