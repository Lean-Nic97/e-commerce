import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import routes from './src/routes';
import connect from './src/database';

dotenv.config();

const app = express();

const PORT: string | number = process.env['PORT'] || 3001;

// middleware
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));

// connect to mongoDB
try {
    connect();
} catch(err) {
    console.error(err, 'error mongo connect');
}

// routes
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
