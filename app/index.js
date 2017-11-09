import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import controllers from './controllers';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

var db = require('./models/index');
app.use(middleware({ config, db }));
app.use('/api', controllers({ config, db }));
app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

module.exports = app;
