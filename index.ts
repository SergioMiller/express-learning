import express from 'express'
import {Request, Response} from 'express'
import router from './router'
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
    .use(router)
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
}).use('/api', router)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})