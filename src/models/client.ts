import { SMTPClient } from "emailjs";
import { IEmailFields } from "./email.js";
import SMTPServerOptions from "../../config/SMTP.json" assert { type: "json" };

export class SMTP {

    private static _client = new SMTPClient({
        user: SMTPServerOptions.SMTP.credentials.user,
        password: SMTPServerOptions.SMTP.credentials.password,
        host: SMTPServerOptions.SMTP.host,
        port: +SMTPServerOptions.SMTP.port,
        tls: {
            ciphers: 'SSLv3',
        }
    })

    static sendEmail(emailFields: IEmailFields) {
        SMTP._client.send(
            {
                subject: `${emailFields.subject}`,
                text: `${emailFields.message}`,
                from: `${this._MIMEText(emailFields.fromName)} <${emailFields.fromEmail}>`,
                to: `${emailFields.to}`
            },
            (err, message) => {
                console.log(err || message);
            }
        )
    }

    private static _MIMEText(text: string) {
        return `=?UTF-8?B?${Buffer.from(text).toString('base64')}?=`;
    }

}