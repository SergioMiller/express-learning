import express from 'express'
import router from './router.js'

const app = express()
const port = 3000

app.use(express.json())
    .use(router)
app.get('/', (req, res) => {
    res.send('Hello World!')
}).use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})