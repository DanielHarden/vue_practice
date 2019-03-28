const express = require('express');

const app = express();


const bodyParser = require("body-parser");
//配置之后会给req 添加body属性,来获取请求体
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


const mysql = require('mysql');

var cont = mysql.createConnection({
	host: '127.0.0.1',
	user: 'wahaha',
	password: '*******',
	database: 'account'
});

cont.connect(function(err) {
	if (err) {
		console.log('Error connecting:' + error.stack);
		return;
	}
});

app.post('/registerReq', (req, res) => {
	let reqBody = req.body;
	console.log(reqBody);
	var email = reqBody.e;
	cont.query('select * from data where email = ?', [email], function(error, result) {
		// if(error) {
		// 	console.log('find error: ' + error.message);
		// 	return;
		// }
		// console.log(result);

		if (result.length != 0) res.send('Sorry!The email is in register yet. Please login');
		else {
			cont.query('insert into data values (?, ?, ?)', [reqBody.u, reqBody.p, reqBody.e]);
			res.send('Congrate to register a new account');
		}
	});
	
});

app.post('/loginReq', (req, res) => {
	let reqBody = req.body;
	console.log(reqBody);
    var name = reqBody.u;
    var pwd = reqBody.p;

    cont.query('select * from data where username = ?', [name], function(error, result) {
    	console.log(result);
    	for (var i = 0; i < result.length; i ++) {
    		if (result[i].password == pwd) {
    			console.log('login well');
    			res.json({allowed: true});
    			return;
    		}
    	}

    	res.json({allowed: false});
    });

	
	// console.log('This server deal the post');
});

// app.get('/back', (req, res) => {
// 	res.json({allowed: true});
// 	console.log('This server deal the get');
// });

app.listen(1088, () => console.log('The backend is listening on port 1088'));