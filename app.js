import express from 'express';
import eventRoutes from './routes/eventRoutes.js';
import participantRoutes from './routes/participantRoutes.js';
import sessionRoutes from './routes/sessionRoutes.js';
import { AppDataSource } from './config/database.js';

const app = express();

AppDataSource.initialize()
    .then(() => {
        console.log('Database initialized');
    })
    .catch((error) => console.log('Database initialization failed', error));

app.use(express.json());
app.use('/api', eventRoutes);
app.use('/api', participantRoutes);
app.use('/api', sessionRoutes);


export default app;
