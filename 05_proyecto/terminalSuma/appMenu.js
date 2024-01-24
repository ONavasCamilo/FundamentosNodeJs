import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

function displayMenu() {
  console.log(
    chalk.blueBright(
      "\n\n   Hola, bienvenido a la interfaz de calculadora para dos números"
    ),
    chalk.red(":)\n")
  );
  console.log(chalk.greenBright("¿Qué operación deseas hacer?"));
  console.log(chalk.blue("1.", chalk.green("Suma")));
  console.log(chalk.blue("2.", chalk.green("Resta")));
  console.log(chalk.blue("3.", chalk.green("Multiplicación")));
  console.log(chalk.blue("4.", chalk.green("División")));
}

// function nuevaSuma(num) {
//   rl.question(chalk.red("Digita el segundo número: "), (num2) => {
//     let suma = parseInt(num) + parseInt(num2);
//     console.log(chalk.green(`La suma de ${num} + ${num2} es ${suma}`));
//   });
// }

function añadirNum() {
    rl.question(chalk.red("Digita nuevo número: "), (num) => {
        numbers.push(num)
        let cont = 0;
        for (let i = 0; i < numbers.length; i++) {
          cont = cont + parseInt(numbers[i]);
        }
        console.log(chalk.green(`La suma da ${cont}\n`));
        volverOAñadir();
        optionVolver();
    })
}

function volverOAñadir() {
  console.log(chalk.black("¿Qué deseas hacer?"));
  console.log(chalk.black("1. Añadir otro número"));
  console.log(chalk.black("2. Volver al menú principal"));
}

function sumaDeNumeros() {
  let cont = 0;
  for (let i = 0; i < numbers.length; i++) {
    cont = cont + parseInt(numbers[i]);
  }
  console.log(chalk.green(`La suma da ${cont}\n`));
  volverOAñadir();
  optionVolver();
}

function nuevaSuma() {
  rl.question(chalk.red("Digita el segundo número: "), (num2) => {
    numbers.push(num2);
    sumaDeNumeros();
  });
}

function nuevaResta(num) {
    rl.question(chalk.red("Digita el número para restar: "), (num2) => {
        let resta = parseInt(num) - parseInt(num2)
        console.log(chalk.green(`La resta de ${num} - ${num2} es ${resta}`))
    })
}

function suma() {
  rl.question(chalk.red("Digita el primer número: "), (num) => {
    numbers.push(num);
    console.log(`Introduciste ${num}`);
    nuevaSuma();
  });
}

function resta() {
    rl.question(chalk.red("Digita el primer número: "), (num) => {
        console.log(`Introduciste ${num}`);
        nuevaResta(num);
    })
}

function optionVolver() {
  rl.question(chalk.red("Respuesta: "), (choice) => {
    switch (choice) {
      case "1":
        añadirNum();
        break;
      case "2":
        displayMenu();
        chooseOption();
        numbers = []
        break;
      default:
        displayMenu();
        chooseOption();
        numbers = []
        break;
    }
  });
}

function chooseOption() {
  rl.question(chalk.red("Respuesta: "), (choice) => {
    switch (choice) {
      case "1":
        suma();
        break;
      case "2":
        resta();
        break;
      case "3":
        break;
      case "4":
        break;
    }
  });
}

displayMenu();
chooseOption();
