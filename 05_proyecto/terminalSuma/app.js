import { createInterface } from "readline";
import chalk from "chalk";

console.log(chalk.blue("ola"));

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(chalk.magentaBright("pon un numero compare: "), (num) => {
  const number = parseInt(num)
  console.log(chalk.green(`tu numero es ${number}`));
  numTwo(number);
});

function numTwo(num) {
 rl.question(chalk.black("pon otro numero para sumarlos: "), (numTwo) => {
    const numberTwo = parseInt(numTwo)
    let suma = num + numberTwo
    console.log(chalk.white(`la suma de ambos numeros es ${suma}`))
 })
}

//! APP para sumar