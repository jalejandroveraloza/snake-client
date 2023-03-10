const {net, connect} = require('./client');
let connection;//stores the active TCP connection object

const setUpInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  //const stdin = process.stdin;
  // stdin.on("data", (key) => {
  //process.stdout.write('.');
  if (key === "w") {
    connection.write('Move: up');
    //console.log("Move: up")
  }
  if (key === "a") {
    connection.write('Move: left');
    //console.log("Move: left")
  }
  if (key === "s") {
    connection.write('Move: down');
    //console.log("Move: down")
  }
  if (key === "d") {
    connection.write('Move: right');
    //console.log("Move: rigth")
  }
  if (key === "f") {
    connection.write("Say: keep going");
  }
  if (key === "g") {
    connection.write("Say: you almost got it");
  }
  if (key === '\u0003') {
    process.exit();
  }
};


module.exports = {
  setUpInput
};
