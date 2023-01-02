const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  
  const conn = net.createConnection({
    host: IP, //"localhost", // IP address here,
    port: PORT//50541,// PORT number here,
  });

  conn.on("data", (data) =>{
    console.log("server message: " + data);
  });

  conn.on("connect", () =>{
    console.log("Successfully connected to game server");
    
  });

  conn.on("connect", () => {
    conn.write("Name: JAV");
    //conn.write("Move: up")
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};