    import express from 'express'
    import mongoose from 'mongoose';
    import cors from 'cors'
    import router from './routes/router';

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/games', router);

    mongoose.connect('mongodb+srv://itmarklimuelfernando:yXgQ8CHOeU0F2QDM@cluster0.z4spdh3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Database connected successfully');
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    }); 

    