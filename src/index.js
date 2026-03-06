import { ask } from "./utils/prompt.js";
import { promptSchemaMain } from "./prompts-schema/prompt-main.js";
import { createQRCode } from "./services/qr-code/create.js";
import { createPassword } from "./services/password/create.js";
import {
  confirmClearHistory,
  showHistory,
} from "./services/history/history.js";

(async function main() {
  while (true) {
    try {
      const { select } = await ask(promptSchemaMain);

      if (select == 1) await createQRCode();
      if (select == 2) await createPassword();
      if (select == 3) showHistory();
      if (select == 4) await confirmClearHistory();
      if (select == 5) {
        console.log("Encerrando...");
        process.exit(0);
      }

      console.log("\n--------------------------------------\n");
    } catch (error) {
      console.error("Erro:", error.message);
    }
  }
})();
