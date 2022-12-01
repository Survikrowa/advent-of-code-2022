import { readFileSync } from "node:fs";
import { join } from "node:path";

const elfsCalories = readFileSync(join(__dirname, "input.txt")).toString();
const calories = elfsCalories
  .split("\n\n")
  .map((elf) => elf.split("\n"))
  .flatMap((elf) => {
    return elf.reduce((a, b) => a + Number(b), 0);
  })
  .reduce((a, b) => {
    return Math.max(a, b);
  });

console.log(calories);
