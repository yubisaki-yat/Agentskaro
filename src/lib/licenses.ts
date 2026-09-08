import fs from "fs";
import path from "path";

export interface LicenseRecord {
  email: string;
  planId: string;
  planName: string;
  licenseKey: string;
  paymentId: string;
  orderId: string;
  amount: number;
  activatedAt: string;
  expiresAt: string;
  status: "active" | "expired" | "revoked";
}

const DATA_DIR = path.join(process.cwd(), "data");
const LICENSES_FILE = path.join(DATA_DIR, "licenses.json");

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LICENSES_FILE)) {
    fs.writeFileSync(LICENSES_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

export function saveLicense(record: LicenseRecord): void {
  try {
    ensureDataFile();
    const content = fs.readFileSync(LICENSES_FILE, "utf-8");
    const list: LicenseRecord[] = JSON.parse(content || "[]");

    // Remove older record for same email/payment if exists, or append
    const filtered = list.filter(
      (l) => !(l.email.toLowerCase() === record.email.toLowerCase() && l.planId === record.planId)
    );
    filtered.push(record);

    fs.writeFileSync(LICENSES_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving license record:", err);
  }
}

export function getLicenseByEmail(email: string): LicenseRecord | null {
  try {
    ensureDataFile();
    const content = fs.readFileSync(LICENSES_FILE, "utf-8");
    const list: LicenseRecord[] = JSON.parse(content || "[]");
    const found = list.find((l) => l.email.toLowerCase() === email.trim().toLowerCase() && l.status === "active");
    return found || null;
  } catch (err) {
    console.error("Error reading license record:", err);
    return null;
  }
}
