import express from 'express'
import router from './router.js'
import dotenv from 'dotenv';
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
    .use(router)
app.get('/', (req, res) => {
    res.send('Hello World!')
}).use('/api', router)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})