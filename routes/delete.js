var express = require("express");
var router=express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sugarbee"
});

router.put('/', function (req, res) {
    con.query('UPDATE `orders` SET `deleted` = true where `identifier`=?', [req.body.identifier], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

module.exports=router;