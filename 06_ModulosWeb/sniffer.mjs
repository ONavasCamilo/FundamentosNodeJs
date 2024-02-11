import { createServer } from "http"
import { get } from "https"

const hostname = "localhost",
port = 3000,
options = {
    host: "jonmircha.com",
    port: 443,
    path: "/cursos",
}

let htmlCode = ""

const httpClient = res => {
    console.log(`El sitio ${options.host} ha respondido. Código: ${res.statusCode}`);

    res.on("data", data => {
        htmlCode += data
        console.log(data);
    })
}

const httpError = err => {
    console.error(`El sitio ${err.message} no ha respondido. Código: ${err.code}`);
}

const webServer = (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.end(htmlCode)
}


//!INSTANCIA CLIENTE HTTP O HTTPs
get(options, httpClient).on("error", httpError)

createServer(webServer).listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
})
