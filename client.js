const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541,// PORT number here,
  });

  conn.on("data", (data) =>{
    console.log("server message: " + data)
  });

  conn.on("connect", () =>{
    console.log("Successfully connected to game server");
    
  });

  conn.on("connect", () => {
    conn.write("Name: JAV")
    //conn.write("Move: up")
  })

  // conn.on("connect", () => {
  //   conn.write(w = "Move: up")
  // })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
}