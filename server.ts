    import express from 'express'
    import mongoose from 'mongoose';
    import cors from 'cors'
    import router from './routes/router';
    import dotenv from 'dotenv'
    dotenv.config();

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/games', router);

    mongoose.connect(`${process.env.REACT_APP_MONGODB}`)
    .then(() => {
        console.log('Database connected successfully');
        const port = process.env.REACT_APP_PORT || 5000;
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    }); 

    