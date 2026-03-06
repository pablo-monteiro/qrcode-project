import { ask } from "../../utils/prompt.js";
import { promptSchemaQRCode } from "../../prompts-schema/prompt-qrcode.js";
import { handleQrCode } from "./handle.js";

export async function createQRCode() {
  const result = await ask(promptSchemaQRCode);
  await handleQrCode(null, result);
}
