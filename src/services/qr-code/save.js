import QRCode from "qrcode";
import fs from "fs";
import path from "path";

export async function saveQRCode(link) {
  try {
    const folder = path.resolve("qrcodes");

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }

    const url = new URL(link);
    const domain = url.hostname.replace(/\./g, "-");
    const timestamp = Date.now();
    const filePath = path.join(folder, `qrcode-${domain}-${timestamp}.png`);

    await QRCode.toFile(filePath, link);

    return filePath;
  } catch (error) {
    console.log("Erro ao salvar QRCode:", error);
  }
}
