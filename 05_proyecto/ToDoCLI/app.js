import { createInterface } from "readline";
import chalk from "chalk";

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
  console.log("\n\n")
}

function addTask() {
  rl.question(chalk.bgMagentaBright("Escribe la tarea: "), (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold("Tarea agregada con éxito"));
    displayMenu();
    chooseOption();
    console.log(tasks)
  });
}

function listsTasks() {
  console.log(chalk.yellow.bold("\n↨ ↨ Tareas ↨ ↨\n"));
  if (tasks.length === 0) {
    console.log(chalk.green.bold("No hay tareas por hacer :)\n"))
  }
  tasks.forEach((task, index) => {
    let status = task.completed ? "Correct" : "Incorrect";

    if(task.completed) {
        console.log(chalk.greenBright(`${index + 1}. ${status} - ${task.task}`));
    } else {
        console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
    }
  });
  displayMenu()
  chooseOption()
}

function completeTask() {
  rl.question(chalk.bgMagenta("Digita el número de la tarea a completar: "), (taskNumber) => {
    const index = parseInt(taskNumber) - 1
    if (index >= 0 && index < tasks.length) {{
      tasks[index].completed = true
      console.log(chalk.green.bold("Tarea marcada con éxito\n"))
    }} else {
      console.log(chalk.red.bold("Número de tarea inválido \n"))
    }
    displayMenu()
    chooseOption()
  })
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
        completeTask()
        break;
      case "4":
        console.log(chalk.yellow("Adiós"));
        rl.close();
        break;
      default:
        console.log(chalk.red("Opción Inválida, intenta nuevamente, \n\n"));
        displayMenu();
        chooseOption();
        break;
    }
  });
}

displayMenu();
chooseOption();
