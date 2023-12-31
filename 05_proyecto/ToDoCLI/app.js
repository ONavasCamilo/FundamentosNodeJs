import { createInterface } from "readline";
import chalk from "chalk";
import { log } from "console";

const tasks = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.yellow.bold("↨↨To Do App↨↨"));
  console.log(chalk.blueBright("Menu de Opciones"));
  console.log("1. Agregar tarea");
  console.log("2. Listar tareas");
  console.log("3. Completar tarea");
  console.log("4. Salir");
  console.log("\n")
}

function addTask() {
  rl.question(chalk.bgMagentaBright("Escribe la tarea"), (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold("Tarea agregada con éxito"));
    displayMenu();
    chooseOption();
    // console.log(tasks)
  });
}

function listsTasks() {
  console.log(chalk.yellow.bold("\n↨ ↨ Tareas ↨ ↨\n"));
  if (tasks.length === 0) {
    console.log(chalk.green.bold("No hay tareas por hacer :)\n"))
  }
  tasks.forEach((task, index) => {
    let status = task.completed ? "Correct" : "Incorrect";

    if(status) {
        console.log(chalk.greenBright(`${index + 1}. ${status} - ${task.task}`));
    } else {
        console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
    }
  });
  displayMenu()
  chooseOption()
}

function chooseOption() {
  rl.question("Elige una opción, digita el número de tu opción:", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        listsTasks();
        break;
      case "3":
        console.log("Completando Tarea");
        console.log("Tarea Completada");
        break;
      case "4":
        console.log(chalk.yellow("Adiós"));
        rl.close();
        break;
      default:
        console.log(chalk.red("Opción Inválida, intenta nuevamente, \n"));
        displayMenu();
        chooseOption();
        break;
    }
  });
}

displayMenu();
chooseOption();
