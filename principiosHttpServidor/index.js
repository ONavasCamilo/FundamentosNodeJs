console.clear()
import { createServer } from "http"

const httpServer = createServer((req, res) => {
    console.log("PETICIÓN RECIBIDA");
    res.end("RECIBIDO ;)")
})

httpServer.listen(3000)