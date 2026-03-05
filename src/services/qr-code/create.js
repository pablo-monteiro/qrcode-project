import prompt from "prompt";
import { promptQRCode } from "../../prompts/prompt-qrcode.js";
import { handleQrCode } from "./handle.js";

export async function createQRCode() {
  prompt.get(promptQRCode, handleQrCode);

  prompt.start();
}
