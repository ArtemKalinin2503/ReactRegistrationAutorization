//Подключим express
var express = require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var cors = require('cors');

var app = express();
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

//Библиотека для создания token
const jwtMW = exjwt({
	secret: 'firma as hui na ananas'
});

//Post запрос который отправит данные в Бд о новом пользователе
app.post('/users', function(req, res) {
	var newUser = {
		email: req.body.email,
		password: req.body.password
	};
	db.collection('users').insert(newUser, function(err, result) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(newUser);
	});
});

//Post запрос на страницу login который создаст token для нового пользователя, а также выполнит проверку что такой пользователь есть в БД
app.post('/login', function(req, res) {
	const { email, password } = req.body;
	db.collection('users').find().toArray(function(err, users) {
		for (let user of users) {
			// I am using a simple array users which i made above
			if (email == user.email && password == user.password /* Use your password hash checking logic here !*/) {
				//If all credentials are correct do this
				let token = jwt.sign({ id: user.id, email: user.email }, 'firma as hui na ananas', {
					expiresIn: 129600
				}); // Sigining the token
				res.json({
					sucess: true,
					err: null,
					token
				});
				return;
			}
		}
		res.status(401).json({
			sucess: false,
			token: null,
			err: 'Username or password is incorrect'
		});
	});
	// Use your DB ORM logic here to find user and compare password
});

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
	if (err) {
		return console.log(err);
	}
	db = client.db('users');
	//Старт сервера только после запуска базы данных
	app.listen(3012, function() {
		console.log('Api app started');
	});
});

//Команда для запуска mongodb mongod (в отдельной вкладке после запуска сервера)
//Команда для запуска сервера node server.js
//Ссылка на проект http://localhost:3012/user
