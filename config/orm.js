//Require connection.js
var connection = require("./connection.js");

//Global functions---------------------------------------------------------------------
function printZQuestionMarks(num) {
   var arr = [];

   for (var i = 0; i < num; i++) {
      arr.push("?");
   }

   return arr.toString();
}

//question marks para el query 
function objToSql(ob) {
   var arr = [];

   for (var key in ob) {
      var value = ob[key];

      if (Object.hasOwnProperty.call(ob, key)) {

         if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
         }

         arr.push(key + "=" + value);
      }
   }

   return arr.toString();
}

//------------------------------------------------------------------------------------


var orm = {
   selectAll: function (tableName, callback) {
      var queryString = "SELECT * FROM " + tableName + ";";
      connection.query(queryString, function (err, result) {
         if (err) {
            throw err;
         }
         callback(result);
      });
   },
   insertOne: function (table, column, value, cb) {
      var queryString = "";
      queryString += `INSERT INTO ${table} (${column}) VALUES `;
      queryString += `('${value}');`
      
      console.log(queryString);

      connection.query(queryString, function (err, result) {
         if (err) {
            throw err;
         }

         cb(result);
      });
   },
   updateOne: function(table, column, value, id, cb){
      var queryString = "";
      queryString += `UPDATE ${table} SET ${column} = '${value}' `;
      queryString += `WHERE id = ${id};`

      console.log(queryString);

      connection.query(queryString, function (err, result) {
         if (err) {
            throw err;
         }

         cb(result);
      });
   }
};

module.exports = orm;