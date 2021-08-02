import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const { MONGO_HOST, MONGO_DB } = process.env;

const connect = (): void => {
    mongoose.connect(`mongodb://${MONGO_HOST}/${MONGO_DB}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
};

export default connect;
