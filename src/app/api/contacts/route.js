
import { saveContactData } from "@/app/services/saveDataContacts";





export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        if (!name || !email || !phone || !message) {
            return new Response(
                JSON.stringify({ error: "All fields are required" }), 
                { status: 400 }
            );
        }

        // Armazena os dados diretamente sem criptografia
        await saveContactData({ name, email, phone, message });

        return new Response(
            JSON.stringify({ message: "Data received and stored successfully" }), 
            { status: 201 }
        );
    } catch (error) {
        console.error("Error processing request:", error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }), 
            { status: 500 }
        );
    }
}
