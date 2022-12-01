import { readFileSync } from "node:fs";
import { join } from "node:path";

const elfsCalories = readFileSync(join(__dirname, "input.txt")).toString();
//Part 1
const calories = elfsCalories
  .split("\n\n")
  .map((elf) => elf.split("\n"))
  .flatMap((elf) => {
    return elf.reduce((a, b) => a + Number(b), 0);
  })
  .reduce((a, b) => {
    return Math.max(a, b);
  });

//Part 2
const [firstElf, secondElf, thirdElf] = elfsCalories
  .split("\n\n")
  .map((elf) => elf.split("\n"))
  .flatMap((elf) => {
    return elf.reduce((a, b) => a + Number(b), 0);
  })
  .sort((a, b) => b - a);

const totalCalories = firstElf + secondElf + thirdElf;

console.log(totalCalories);
