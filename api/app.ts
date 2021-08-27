import express from 'express';
import morgan from 'morgan';

import routes from './src/routes/index';

dotenv.config();

const app = express();

// middleware
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));

// routes
app.use('/api', routes);

module.exports = app;
