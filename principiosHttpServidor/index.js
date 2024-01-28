console.clear();
// import { createServer } from "http"
import express from "express";
import dotenv from "dotenv";
import { USERS_BBDD } from "./bbdd.js";

dotenv.config();

const PORT = 3000;
const expressApp = express();

// expressApp.get('/mi-cuenta', (req, res) => {
//     res.send('Tu cuenta personal')
// })

expressApp.use(express.json());
expressApp.use(express.text());

//Obtener los detalles de una cuenta a partir del guid
expressApp.get("/account/:guid", (req, res) => {
  // console.log(req.params.guid)
  const { guid } = req.params;
  const user = USERS_BBDD.find((user) => user.guid === req.params.guid);
  if (!user) return res.status(404).send();
  return res.send(user);
});
//Crear una nueva cuenta a partir de guid y name
expressApp.post("/account", (req, res) => {
    const { guid, name } = req.body
    if (!guida || !name) return res.state(400).send()
    const user = USERS_BBDD.find((user) => user.guid === guid)
if(user) res.status(409).send()
USERS_BBDD.push({
    guid,
    name
})
return res.send()
});
//Actualizar el nombre de una cuenta
expressApp.patch("/account/:guid", (req, res) => {
  const { guid } = req.params;
  const {name} = req.body
  if (!name) return res.state(400).send()
  const user = USERS_BBDD.find((user) => user.guid === req.params.guid);
  if (!user) res.status(404).send();
  user.name = name
  return res.send()

});
//Eliminar una cuenta
expressApp.delete("/account/:guid", (req, res) => {
  const { guid } = req.params;
  const userIndex = USERS_BBDD.findIndex((user) => user.guid === req.params.guid);
  if (userIndex === -1) return res.status(404).send();
  USERS_BBDD.splice(userIndex, 1)
  return res.send()
});

expressApp.listen(PORT, () =>
  console.log(`Servidor levantado en el puerto ${PORT}`)
);

// expressApp.post("/cuenta", (req, res) => {
//     console.log(req.query)
//     res.send()
// })

// expressApp.put('/cuenta/:idcuenta', (req, res) => {
// console.log(req.params.idcuenta);
// console.log(req.params)
// console.log(req.headers)
// console.log(req.get("noexiste"));
// res.send('Tu cuenta personal')
// res.status(401).send({
//     errorMessage: "No autorizado",
// })
//     console.log(req.body)
//     res.send()
// })

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
