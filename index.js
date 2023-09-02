import express from 'express'
import openai from './test.js'



const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('hi bang')

})

app.get(`/api/v1/chatgpt/:text`, async (req, res) => {
    const getparams = req.params.text
    const getai = await openai(getparams)

    res.send(getai)



})

app.use('/', (req, res) => {
    res.send('<h1>Error 404</h1>')

})

app.listen(port, () => {
    console.log(`success run on http://localhost:3000`)

})