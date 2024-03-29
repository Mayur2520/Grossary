var mysql = require('mysql');
var mysqlDump = require('mysqldump');

function Connection() {

  this.pool = mysql.createPool({
    connectionLimit: 100,
    multipleStatements: true,
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
  });

  this.acquire = function (callback) {
    this.pool.getConnection(function (err, connection) {
      callback(err, connection);
    });
  };

  /* try
  {
    mysqlDump({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fd',
    dest:'www/files/ThreesaDataBaseBackup.sql' // destination file 
},function(err){
    // create data.sql file; 
})
  }
  catch(e)
  {
	  console.log(e)
  }
   */
}

module.exports = new Connection();