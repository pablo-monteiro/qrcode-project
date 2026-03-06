import { ask } from "../../utils/prompt.js";
import fs from "fs";
import path from "path";
import chalk from "chalk";

const historyFile = path.resolve("data/history.json");

export function saveHistory(data) {
  try {
    if (!data?.link || !data?.file) return;

    let history = [];

    if (fs.existsSync(historyFile)) {
      const fileContent = fs.readFileSync(historyFile);
      history = JSON.parse(fileContent);
    }

    history.push({
      id: Date.now().toString(),
      ...data,
    });

    fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
  } catch (error) {
    console.log("ERRO AO SALVAR HISTÓRICO: ", error);
  }
}

export function getHistory() {
  if (!fs.existsSync(historyFile)) return [];

  const file = fs.readFileSync(historyFile);

  return JSON.parse(file);
}

export function showHistory() {
  const history = getHistory();

  if (!history.length) {
    console.log(chalk.yellow("Nenhum QRCode foi gerado ainda."));
    return;
  }

  console.log(chalk.blue.bold("\nHistórico de QRCodes\n"));

  console.log(chalk.gray("ID".padEnd(15) + "LINK".padEnd(60) + "DATA"));

  console.log(chalk.yellow("-".repeat(100)));

  for (const item of history) {
    const id = item.id.padEnd(15);
    const link = item.link.slice(0, 50).padEnd(60);
    const date = new Date(item.createdAt).toLocaleDateString();

    console.log(id + link + date);
  }

  console.log();
}

export function clearHistory() {
  const qrcodeFolder = path.resolve("qrcodes");

  if (fs.existsSync(qrcodeFolder)) {
    const files = fs.readdirSync(qrcodeFolder);

    for (const file of files) {
      fs.unlinkSync(path.join(qrcodeFolder, file));
    }
  }

  fs.writeFileSync(historyFile, JSON.stringify([], null, 2));

  console.log("Histórico e QRCodes removidos.");
}

export async function confirmClearHistory() {
  const { confirm } = await ask([
    {
      name: "confirm",
      description: chalk.red(
        "Tem certeza que deseja apagar todo o histórico e QR Codes? (y/n)",
      ),
      pattern: /^[yn]$/i,
      message: "Digite apenas y ou n",
      required: true,
    },
  ]);

  if (confirm.toLowerCase() === "y") {
    clearHistory();
  } else {
    console.log(chalk.yellow("Operação Cancelada."));
  }
}
