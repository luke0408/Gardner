import fs from "fs";
import path from "path";

const envPath = path.resolve(__dirname, "..", ".env");
const envLocalPath = path.resolve(__dirname, "..", ".env.local");

if (!fs.existsSync(envPath)) {
  if (!fs.existsSync(envLocalPath))
    throw new Error("Missing .env.local – cannot seed default .env");

  fs.copyFileSync(envLocalPath, envPath, fs.constants.COPYFILE_EXCL);
}
