import qrcode from "qrcode-terminal";
import { saveQRCode } from "./save.js";
import { saveHistory } from "../history/history.js";

export async function handleQrCode(err, result) {
  if (err) {
    console.log("Erro ao gerar QRCode", err);
    return;
  }

  const { link, type } = result;
  const typeOption = Number(type);

  if (typeOption === 2) {
    qrcode.generate(link, { small: true });
    return;
  }

  const filePath = await saveQRCode(link);

  if (!filePath) return;

  saveHistory({
    link,
    file: filePath,
    createdAt: new Date().toISOString(),
  });

  console.log("QRCode salvo em: ", filePath);
}
