import fs from "fs";
import path from "path";

const historyFile = path.resolve("data/history.json");

export function saveHistory(data) {
  try {
    if (!data?.link || !data?.file) return;

    let history = [];

    if (fs.existsSync(historyFile)) {
      const fileContent = fs.readFileSync(historyFile);
      history = JSON.parse(fileContent);
    }

    history.push(data);

    fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
  } catch (error) {
    console.log("ERRO AO SALVAR HISTÓRICO: ", error);
  }
}

export function getHistory() {
  return JSON.parse(fs.readFileSync(historyFile));
}
