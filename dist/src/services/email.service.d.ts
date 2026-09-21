export type SendEmailInput = {
    to: string;
    toName?: string;
    subject: string;
    htmlContent: string;
    textContent?: string;
    attachments?: Array<{
        name: string;
        content: Buffer;
    }>;
};
export declare function sendEmail({ to, toName, subject, htmlContent, textContent, attachments, }: SendEmailInput): Promise<{
    success: boolean;
    messageId: string | null;
    skipped: boolean;
}>;
export type RegistrationEmailParticipant = {
    id: string;
    name: string;
    email: string;
    qrToken: string | null;
    registrationStatus: string;
    isTeamLeader: boolean;
};
export type RegistrationEmailEvent = {
    id: string;
    title: string;
    eventDate: Date;
    startTime: Date | null;
    endTime: Date | null;
    venue: string | null;
    participationType: string;
    enableQrAttendance: boolean;
};
export declare function sendRegistrationConfirmationEmail({ participant, event, teamName, }: {
    participant: RegistrationEmailParticipant;
    event: RegistrationEmailEvent;
    teamName?: string | null;
}): Promise<{
    success: boolean;
    messageId: string | null;
    skipped: boolean;
}>;
//# sourceMappingURL=email.service.d.ts.map