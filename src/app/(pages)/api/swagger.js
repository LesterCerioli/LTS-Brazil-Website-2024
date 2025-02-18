

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "LTS Brazil Website API",
            version: "1.0.0",
            description: "LTS Brazil Website API documentation",
        },
        servers: [
            {
                url: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
            },
        ],
    },
    apis: ["./src/api/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
