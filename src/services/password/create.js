import chalk from "chalk";
import { handlePassword } from "./handle.js";

export async function createPassword() {
  console.log(chalk.green("password"));
  const password = await handlePassword();
  console.log(password);
}
