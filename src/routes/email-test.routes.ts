import { Router } from "express";
import { sendEmail } from "../services/email.service.js";

const router = Router();

router.get("/email", async (_req, res) => {
  try {
    const testEmail = process.env.BREVO_TEST_EMAIL;

    if (!testEmail) {
      return res.status(500).json({
        success: false,
        message: "BREVO_TEST_EMAIL is not configured.",
      });
    }

    const result = await sendEmail({
      to: testEmail,
      toName: "IEEE GU Test",
      subject: "IEEE Geeta University — Brevo Test Email",
      htmlContent: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:30px;">
          <h2 style="color:#0b3b82;">IEEE Geeta University</h2>
          <p>This is a test email from the IEEE Geeta University platform.</p>
          <p>If you're reading this, Brevo email delivery is working correctly.</p>
        </div>
      `,
      textContent:
        "IEEE Geeta University — This is a test email. Brevo email delivery is working correctly.",
    });

    return res.status(200).json({
      success: true,
      message: "Test email request completed.",
      result,
    });
  } catch (error) {
    console.error("Brevo test email failed:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send test email.",
    });
  }
});

export default router;