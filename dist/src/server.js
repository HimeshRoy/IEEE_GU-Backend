import "dotenv/config";
import app from "./app.js";
import { prisma } from "./config/prisma.js";
const PORT = Number(process.env.PORT) || 5000;
async function startServer() {
    try {
        await prisma.$queryRaw `SELECT 1`;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        await prisma.$disconnect();
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=server.js.map