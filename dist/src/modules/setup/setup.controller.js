import { initialSetupSchema } from "./setup.dto.js";
import { createInitialWebmaster } from "./setup.service.js";
export async function initialSetup(req, res) {
    try {
        const input = initialSetupSchema.parse(req.body);
        const result = await createInitialWebmaster(input);
        return res.status(201).json({
            success: true,
            message: "Initial Webmaster setup completed successfully",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            const statusCode = error.message ===
                "Initial setup has already been completed"
                ? 409
                : error.message.includes("Invalid setup secret")
                    ? 401
                    : 400;
            return res.status(statusCode).json({
                success: false,
                message: error.message,
            });
        }
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}
//# sourceMappingURL=setup.controller.js.map