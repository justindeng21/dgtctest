//server stuff
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 3000
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
//






////////////////////////////////////////////////
/*
	Database connection to a mySQL database
*/

// const mysql = require('mysql');  //mysql node driver

// if(process.env.JAWSDB_URL)
// {
// 	var connection = mysql.createConnection(process.env.JAWSDB_URL)
// }

// else
// {
// 	var connection /*This variable will be used in every query*/ = mysql.createConnection({	
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'password',
// 		database: 'CUThere',
// 	})
// }

// connection.connect() 

////////////////////////////////////////////////





app.use(express.static('public')) // forces external files to be inside /public


////////////////////////////////////////////////
app.get('/home',function(req,res)
{

	res.render('home')
				

})
////////////////////////////////////////////////
app.get('/',function(req,res)
{

	res.render('home')
				

})
////////////////////////////////////////////////
app.get('/privacy-policy',function(req,res)
{

	res.render('privacy-policy')
				

})
////////////////////////////////////////////////

app.listen(port)
console.log('Server is being hosted on port 3000')