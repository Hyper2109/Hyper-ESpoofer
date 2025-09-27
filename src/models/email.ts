import emailConfig from "../../config/email.json" with { type: "json" };
import { CustomEmailBuilder } from "./custom-email-builder.js";

const email = emailConfig.email;
const emailBody = email.useCustomBody
    ? CustomEmailBuilder.build()
    : email.body;

export interface IEmailFields {
    fromName: string,
    fromEmail: string,
    to: string,
    subject: string,
    message: string
}

export const emailFields: IEmailFields = {
    fromName: email.from.name,
    fromEmail: email.from.email,
    to: email.to,
    subject: emailBody.subject,
    message: emailBody.message
}