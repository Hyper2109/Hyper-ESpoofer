import emailConfig from "../../config/email.json" assert { type: "json" };

export interface IEmailFields {
    fromName: string,
    fromEmail: string,
    to: string,
    subject: string,
    message: string
}

export const emailFields: IEmailFields = {
    fromName: emailConfig.email.from.name,
    fromEmail: emailConfig.email.from.email,
    to: emailConfig.email.to,
    subject: emailConfig.email.body.subject,
    message: emailConfig.email.body.message
}