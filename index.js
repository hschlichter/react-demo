import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

var env = process.env.NODE_ENV;
var app = express();

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var routers = require('./pages');
routers.forEach((router) => {
	app.use(router);
});

app.use('/', express.static(path.join(__dirname, 'dist')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

module.exports = app;
