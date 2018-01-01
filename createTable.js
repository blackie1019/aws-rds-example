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
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
