var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "ironman.cytcvb1fbzpb.ap-northeast-1.rds.amazonaws.com",
  user: "<user>",
  password: "<password>",
  database: "<database>"
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Blackie', '天龍國')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
