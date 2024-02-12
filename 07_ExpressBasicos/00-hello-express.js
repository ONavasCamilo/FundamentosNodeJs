import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.end("<h1>Hola mundo desde Express.js</h1>")
})



app.listen(3000, () => console.log("Iniciando Express desde http://localhost:3000"))