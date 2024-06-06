import express from 'express';
import apiRoute from './src/routes/api.js'

const app = express();

const PORT = 8080;

app.get('/test', (req, res) => {
    res.send("Testing with new changes")
})

app.get('/anotherRoute', (req,res) => {
    res.send("Another route created!")
})

app.use('/api/', apiRoute)

app.listen(PORT, () => {
    console.log(`Application running on PORT ${PORT}`)
})
