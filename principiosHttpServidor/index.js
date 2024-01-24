console.clear()
import { createServer } from "http"

const httpServer = createServer((req, res) => {
    //Nos falta el verbo/método para indicar que quiere hacer el cliente

    console.log(req.method);
    //Nos falta el path/ruta para identificar el recurso
    console.log(req.url);
    // console.log("PETICIÓN RECIBIDA");
    res.end("RECIBIDO ;)") 
})

httpServer.listen(3000) 