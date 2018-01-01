var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'ironman.cytcvb1fbzpb.ap-northeast-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'pass.123',
  database : 'ironman'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    
  });