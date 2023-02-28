import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3300

const app = express()
app.use(cors ())

app.get('/test', (req, res) => {
    res.send('🐳 docker is cool')
})

app.listen(PORT, ()=> {
    console.log(`listening on http://localhost:${PORT}...`)
}) 