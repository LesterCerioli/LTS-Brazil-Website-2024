import crypto from "crypto";
import dotenv from "dotenv";
import { saveContactData } from "@/app/services/saveDataContacts";

dotenv.config();

if (!process.env.ENCRYPTION_KEY) {
    throw new Error("ENCRYPTION_KEY is missing from environment variables");
}

const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, "hex");
const IV_LENGTH = 16;

function encryptData(data) {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv("aes-256-cbc", ENCRYPTION_KEY, iv);

    let encrypted = cipher.update(JSON.stringify(data), "utf8", "hex");
    encrypted += cipher.final("hex");

    return iv.toString("hex") + encrypted;
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        if (!name || !email || !phone || !message) {
            return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
        }

        const encryptedData = encryptData({ name, email, phone, message });

        console.log("Encrypted Data:", encryptedData);

        saveContactData({ encryptedData });

        return new Response(JSON.stringify({ message: "Data received securely and stored", encryptedData }), { status: 201 });
    } catch (error) {
        console.error("Error processing request:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
