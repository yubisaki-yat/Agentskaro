import fs from "fs";
import path from "path";

export interface Subscriber {
  email: string;
  subscribedAt: string;
  source: string;
  welcomeEmailSent: boolean;
  status: "active" | "unsubscribed";
}

const DATA_DIR = path.join(process.cwd(), "data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "subscribers.json");

function ensureFileExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

export function getAllSubscribers(): Subscriber[] {
  ensureFileExists();
  try {
    const raw = fs.readFileSync(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(raw) as Subscriber[];
  } catch (error) {
    console.error("Error reading subscribers:", error);
    return [];
  }
}

export function saveSubscriber(email: string, source = "download_modal"): { subscriber: Subscriber; isNew: boolean } {
  ensureFileExists();
  const subscribers = getAllSubscribers();
  const normalizedEmail = email.trim().toLowerCase();
  
  const existingIdx = subscribers.findIndex((s) => s.email.toLowerCase() === normalizedEmail);

  if (existingIdx >= 0) {
    return { subscriber: subscribers[existingIdx], isNew: false };
  }

  const newSub: Subscriber = {
    email: normalizedEmail,
    subscribedAt: new Date().toISOString(),
    source,
    welcomeEmailSent: false,
    status: "active",
  };

  subscribers.push(newSub);
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), "utf-8");
  return { subscriber: newSub, isNew: true };
}

export function markEmailSent(email: string) {
  ensureFileExists();
  const subscribers = getAllSubscribers();
  const normalizedEmail = email.trim().toLowerCase();
  const idx = subscribers.findIndex((s) => s.email.toLowerCase() === normalizedEmail);
  if (idx >= 0) {
    subscribers[idx].welcomeEmailSent = true;
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), "utf-8");
  }
}
