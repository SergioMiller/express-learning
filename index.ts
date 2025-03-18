require('express-async-errors');
import express from 'express';
import {Request, Response} from 'express';
import router from './router';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app
    .get('/', (req: Request, res: Response) => {
        res.send('Hello World!');
    })
    .use('/api', router);

app.use((err: any, req: Request, res: Response, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
