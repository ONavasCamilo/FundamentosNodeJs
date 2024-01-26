console.clear()
import { createServer } from "http"
import express from 'express'

const PORT = 3000
const expressApp = express()

// expressApp.get('/mi-cuenta', (req, res) => {
//     res.send('Tu cuenta personal')
// })

expressApp.use(express.json())
expressApp.use(express.text())

expressApp.post("/cuenta", (req, res) => {
    console.log(req.query)
    res.send()
})

expressApp.put('/cuenta/:idcuenta', (req, res) => {
    // console.log(req.params.idcuenta);
    // console.log(req.params)
    // console.log(req.headers)
    // console.log(req.get("noexiste"));
    // res.send('Tu cuenta personal')
    // res.status(401).send({
    //     errorMessage: "No autorizado",
    // })
    console.log(req.body)
    res.send()
})

expressApp.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))

// const httpServer = createServer((req, res) => {
//     //Nos falta el verbo/método para indicar que quiere hacer el cliente

//     console.log(req.method);
//     //Nos falta el path/ruta para identificar el recurso
//     console.log(req.url);
//     //Nos faltan las cabeceras
//     console.log(req.headers)
//     //nos falta el body/payload
//     let data = ''
//     let chunkIndex = 0
//     req.on('data', (chunk) => {
//         data += chunk
//         chunkIndex++
//         console.log(chunkIndex);
//     })
//     req.on('end', () => {
//         console.log(data)
//     })
//     // console.log("PETICIÓN RECIBIDA");
//     res.end("RECIBIDO ;)") 
// })

// httpServer.listen(3000)