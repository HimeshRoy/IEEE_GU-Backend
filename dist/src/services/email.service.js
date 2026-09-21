import { BrevoClient } from "@getbrevo/brevo";
import QRCode from "qrcode";
const brevoApiKey = process.env.BREVO_API_KEY;
const senderEmail = process.env.BREVO_SENDER_EMAIL;
const senderName = process.env.BREVO_SENDER_NAME || "IEEE Geeta University";
if (!brevoApiKey) {
    console.warn("BREVO_API_KEY is not configured. Email sending will be disabled.");
}
if (!senderEmail) {
    console.warn("BREVO_SENDER_EMAIL is not configured. Email sending will be disabled.");
}
const brevo = brevoApiKey && senderEmail
    ? new BrevoClient({
        apiKey: brevoApiKey,
        timeoutInSeconds: 30,
        maxRetries: 2,
    })
    : null;
export async function sendEmail({ to, toName, subject, htmlContent, textContent, attachments, }) {
    if (!brevo || !senderEmail) {
        console.warn(`Email not sent to ${to}: Brevo email configuration is missing.`);
        return {
            success: false,
            messageId: null,
            skipped: true,
        };
    }
    const normalizedEmail = to.trim().toLowerCase();
    if (!normalizedEmail) {
        throw new Error("Recipient email address is required.");
    }
    const result = await brevo.transactionalEmails.sendTransacEmail({
        sender: {
            email: senderEmail,
            name: senderName,
        },
        to: [
            {
                email: normalizedEmail,
                ...(toName?.trim()
                    ? {
                        name: toName.trim(),
                    }
                    : {}),
            },
        ],
        subject,
        htmlContent,
        ...(textContent
            ? {
                textContent,
            }
            : {}),
        ...(attachments && attachments.length > 0
            ? {
                attachment: attachments.map((attachment) => ({
                    name: attachment.name,
                    content: attachment.content.toString("base64"),
                })),
            }
            : {}),
    });
    return {
        success: true,
        messageId: result.messageId ?? null,
        skipped: false,
    };
}
function escapeHtml(value) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function formatEventDate(date) {
    return new Intl.DateTimeFormat("en-IN", {
        dateStyle: "full",
        timeZone: "Asia/Kolkata",
    }).format(date);
}
function formatEventTime(startTime, endTime) {
    const formatter = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
    });
    if (!startTime && !endTime) {
        return "Time will be announced";
    }
    if (startTime && endTime) {
        return `${formatter.format(startTime)} – ${formatter.format(endTime)}`;
    }
    if (startTime) {
        return formatter.format(startTime);
    }
    if (endTime) {
        return formatter.format(endTime);
    }
    return "Time will be announced";
}
function getStatusText(status) {
    switch (status) {
        case "REGISTERED":
            return "Registration Confirmed";
        case "WAITLISTED":
            return "Waitlisted";
        default:
            return "Registration Received";
    }
}
function getStatusDescription(status) {
    switch (status) {
        case "REGISTERED":
            return "Your registration has been confirmed successfully.";
        case "WAITLISTED":
            return "The event is currently full. You have been added to the waitlist.";
        default:
            return "We have received your registration successfully.";
    }
}
export async function sendRegistrationConfirmationEmail({ participant, event, teamName, }) {
    const safeParticipantName = escapeHtml(participant.name);
    const safeEventTitle = escapeHtml(event.title);
    const safeVenue = escapeHtml(event.venue || "Venue will be announced");
    const statusText = getStatusText(participant.registrationStatus);
    const statusDescription = getStatusDescription(participant.registrationStatus);
    const eventDate = formatEventDate(event.eventDate);
    const eventTime = formatEventTime(event.startTime, event.endTime);
    const safeTeamName = teamName ? escapeHtml(teamName) : null;
    const qrAttachmentName = `${event.title
        .replace(/[\\/:*?"<>|]/g, "")
        .replace(/\s+/g, "-")
        .trim() || "Event"}-${participant.name
        .replace(/[\\/:*?"<>|]/g, "")
        .replace(/\s+/g, "-")
        .trim() || "Participant"}-QR.png`;
    let attachments = [];
    if (participant.registrationStatus === "REGISTERED" &&
        event.enableQrAttendance &&
        participant.qrToken) {
        const qrBuffer = await QRCode.toBuffer(participant.qrToken, {
            type: "png",
            width: 800,
            margin: 2,
            errorCorrectionLevel: "H",
        });
        attachments = [
            {
                name: qrAttachmentName,
                content: qrBuffer,
            },
        ];
    }
    const qrSection = participant.registrationStatus === "REGISTERED" &&
        event.enableQrAttendance &&
        participant.qrToken
        ? `
        <div style="
          margin: 28px 0;
          padding: 24px;
          border: 1px solid #dbe3ef;
          border-radius: 16px;
          background: #f8fafc;
          text-align: center;
        ">
          <h2 style="
            margin: 0 0 8px;
            color: #0f172a;
            font-size: 18px;
          ">
            Your Event QR Code
          </h2>

          <p style="
            margin: 0;
            color: #64748b;
            font-size: 14px;
            line-height: 1.6;
          ">
            Your unique QR code is attached to this email.
            Please save it and show it at the event for attendance.
          </p>
        </div>
      `
        : "";
    const teamSection = safeTeamName
        ? `
        <tr>
          <td style="
            padding: 10px 0;
            color: #64748b;
            font-size: 14px;
          ">
            Team
          </td>

          <td style="
            padding: 10px 0;
            color: #0f172a;
            font-size: 14px;
            font-weight: 600;
            text-align: right;
          ">
            ${safeTeamName}
          </td>
        </tr>
      `
        : "";
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${safeEventTitle}</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background: #f1f5f9;
  font-family: Arial, Helvetica, sans-serif;
  color: #0f172a;
">

  <div style="
    width: 100%;
    padding: 32px 16px;
    box-sizing: border-box;
  ">

    <div style="
      max-width: 620px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
    ">

      <div style="
        padding: 28px 32px;
        background: #0b3b82;
        color: #ffffff;
      ">
        <div style="
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        ">
          IEEE Geeta University
        </div>

        <h1 style="
          margin: 12px 0 0;
          font-size: 26px;
          line-height: 1.25;
        ">
          ${statusText}
        </h1>
      </div>

      <div style="
        padding: 32px;
      ">

        <p style="
          margin: 0 0 8px;
          font-size: 16px;
        ">
          Hello <strong>${safeParticipantName}</strong>,
        </p>

        <p style="
          margin: 0;
          color: #475569;
          font-size: 15px;
          line-height: 1.7;
        ">
          ${statusDescription}
        </p>

        <div style="
          margin-top: 26px;
          padding: 20px;
          border-radius: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        ">

          <h2 style="
            margin: 0 0 14px;
            font-size: 18px;
            color: #0f172a;
          ">
            Event Details
          </h2>

          <table style="
            width: 100%;
            border-collapse: collapse;
          ">

            <tr>
              <td style="
                padding: 10px 0;
                color: #64748b;
                font-size: 14px;
              ">
                Event
              </td>

              <td style="
                padding: 10px 0;
                color: #0f172a;
                font-size: 14px;
                font-weight: 600;
                text-align: right;
              ">
                ${safeEventTitle}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 10px 0;
                color: #64748b;
                font-size: 14px;
              ">
                Date
              </td>

              <td style="
                padding: 10px 0;
                color: #0f172a;
                font-size: 14px;
                font-weight: 600;
                text-align: right;
              ">
                ${eventDate}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 10px 0;
                color: #64748b;
                font-size: 14px;
              ">
                Time
              </td>

              <td style="
                padding: 10px 0;
                color: #0f172a;
                font-size: 14px;
                font-weight: 600;
                text-align: right;
              ">
                ${escapeHtml(eventTime)}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 10px 0;
                color: #64748b;
                font-size: 14px;
              ">
                Venue
              </td>

              <td style="
                padding: 10px 0;
                color: #0f172a;
                font-size: 14px;
                font-weight: 600;
                text-align: right;
              ">
                ${safeVenue}
              </td>
            </tr>

            ${teamSection}

          </table>
        </div>

        ${qrSection}

        <p style="
          margin: 28px 0 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        ">
          This email was sent automatically by the IEEE Geeta University
          Student Branch registration platform.
        </p>

      </div>

      <div style="
        padding: 20px 32px;
        border-top: 1px solid #e2e8f0;
        background: #f8fafc;
        text-align: center;
      ">
        <p style="
          margin: 0;
          color: #64748b;
          font-size: 12px;
        ">
          IEEE Geeta University Student Branch
        </p>
      </div>

    </div>

  </div>

</body>
</html>
  `;
    const textContent = `
IEEE GEETA UNIVERSITY

${statusText}

Hello ${participant.name},

${statusDescription}

EVENT DETAILS
Event: ${event.title}
Date: ${eventDate}
Time: ${eventTime}
Venue: ${event.venue || "Venue will be announced"}
${teamName ? `Team: ${teamName}` : ""}

${participant.registrationStatus === "REGISTERED" &&
        event.enableQrAttendance &&
        participant.qrToken
        ? "Your unique event QR code is attached to this email. Please save it and show it at the event for attendance."
        : ""}

IEEE Geeta University Student Branch
  `.trim();
    return sendEmail({
        to: participant.email,
        toName: participant.name,
        subject: `${statusText} — ${event.title}`,
        htmlContent,
        textContent,
        attachments,
    });
}
//# sourceMappingURL=email.service.js.map