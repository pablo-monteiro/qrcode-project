import chalk from "chalk";

export const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1- QRCode | (2 - Password | (3 - Ver Histórico | (4 - Limpar Histórico | (5 - Sair",
    ),
    pattern: /^[1-5]+$/,
    message: chalk.red.italic("Escolha apenas entre as opções 1, 2, 3, 4 e 5."),
    required: true,
  },
];
