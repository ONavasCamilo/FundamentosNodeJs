import { createInterface } from "readline"
import chalk from "chalk"

const tasks = []

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})


function displayMenu() {
    console.log(chalk.yellow.bold("↨↨To Do App↨↨"))
    console.log(chalk.blueBright("Menu de Opciones"))
    console.log("1. Agregar tarea")
    console.log("2. Listar tareas")
    console.log("3. Completar tarea")
    console.log("4. Salir")
}

function chooseOption() {
    rl.question("Elige una opción, digita el número de tu opción:", (choice) => {
        switch (choice) {
            case "1": 
                console.log("Crear Tarea")
                break;
            case "2": 
                console.log("Listar Tareas")
                break;
            case "3": 
                console.log("Completando Tarea")
                console.log("Tarea Completada")
                break;
            case "4": 
                console.log(chalk.yellow("Adiós"))
                rl.close()
                break;
            default:
                console.log(chalk.red("Opción Inválida, intenta nuevamente, \n"))
                displayMenu()
                chooseOption()
                break;
        }
    }    
    )}
    

displayMenu()
chooseOption()