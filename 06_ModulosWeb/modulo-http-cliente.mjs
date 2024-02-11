import { get } from "https"

const urlSite = {
    hostname: "jonmircha.com",
    port: 443,
    path: "/cursos",
}

get(urlSite, (res) => {
    console.log(`El sitio ${urlSite.hostname} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}`)
}).on("error", (err) => {
    console.log(`El sitio ${urlSite.hostname} no ha respondido. Código: ${err.code}. Mensaje: ${err.message}`);
})

setTimeout(() => {
console.log("\n");
}, 1000);