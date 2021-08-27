import dotenv from 'dotenv'

import app from '.app'
import connect from './src/database'

const PORT: string | number = process.env['PORT'] || 3001;

// connect to mongoDB
try {
    connect();
} catch(err) {
    console.error(err, 'error mongo connect');
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
