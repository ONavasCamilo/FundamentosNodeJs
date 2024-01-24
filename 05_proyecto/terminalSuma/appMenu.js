import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numbers = [];

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

function sumaDeNumeros() {
    let cont = 0
    for (let i = 0; i < numbers.length; i++) {
        cont = cont + parseInt(numbers[i])
    }
    console.log(chalk.green(`La suma da ${cont}`))
}

function nuevaSuma() {
    rl.question(chalk.red("Digita el segundo número: "), (num2) => {
        numbers.push(num2);
        sumaDeNumeros();
    })
}

function suma() {
  rl.question(chalk.red("Digita el primer número: "), (num) => {
    numbers.push(num);
    console.log(`Introduciste ${num}`);
    nuevaSuma();
  });
}

function chooseOption() {
  rl.question(chalk.red("Respuesta: "), (choice) => {
    switch (choice) {
      case "1":
        suma();
        break;
      case "2":
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
