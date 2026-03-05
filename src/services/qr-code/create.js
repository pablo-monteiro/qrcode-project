import prompt from "prompt";
import { promptSchemaQRCode } from "../../prompts-schema/prompt-qrcode.js";
import { handleQrCode } from "./handle.js";

export async function createQRCode() {
  prompt.get(promptSchemaQRCode, handleQrCode);

  prompt.start();
}
