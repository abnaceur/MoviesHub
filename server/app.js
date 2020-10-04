require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./config/dbConnection');
var bodyParser = require('body-parser');
const helmet = require('helmet');
let mongoose = require('mongoose');
const swaggerDocument = require('./docs/openApiDocumentation/BasicInformation');
const swaggerUi = require('swagger-ui-express');
var schedule = require('node-schedule');
var commands = require('./commands/removeMovieByDate');

const passport = require('passport');

// Main app
var app = express();

// Display API Docs
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Use hamlet
app.use(helmet());

// Initialize passprt
app.use(passport.initialize());

// Logs
app.use(logger('dev'));

// important if behind a proxy to ensure client IP is passed to req.ip
//app.enable('trust proxy');

//Map global promise
mongoose.Promise = global.Promise;

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Fix CORS errors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
		return res.status(200).json({});
	}
	next();
});

// Routes
var indexRouter = require('./api/routes/index');
var usersRouter = require('./api/routes/users');
var moviesRouter = require('./api/routes/movie');

// Open connection to the database
db.once('open', function () {
	console.log('Connected to mongodb!');
});

// Catch errors on database connection failure
db.on('error', function (err) {
	console.log('Error while connecting to database: ', err);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Call routes API
app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/movies', moviesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send('error ' + err);
});

// Schedule corn like tab
// [ENCH MINUT FOR TEST] var j = schedule.scheduleJob('* * * * *', function () {
var j = schedule.scheduleJob('* * 1 * *', function () {
	console.log('Monthly cron tab like to remove not seen movies for one month !');
	commands.removeMovieByDate()
});

module.exports = app;
