import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import emailConfig from "../../config/email.json" with { type: "json" };

declare type Replacement = {
    from: string,
    to: string
}

export abstract class CustomEmailBuilder {

    private static _email = emailConfig.email;
    private static _customBody = this._email.customBody;
    private static __filename = fileURLToPath(import.meta.url);
    private static __dirname = path.dirname(this.__filename);

    static build(): { subject: string, message: string } {
        const subject = this._getSubject();
        const message = this._getMessage();

        return {
            subject: subject,
            message: message
        };
    }

    private static _getSubject() {
        let subjectText = "";
        try {
            const filePath = path.join(this.__dirname, `../../custom-bodies/${this._customBody.subjectFileName}`);
            subjectText = fs.readFileSync(filePath, 'utf-8');
        } catch (error) {
            throw "The custom subject file path is not valid";
        }

        return this._useReplacements(this._customBody.subjectReplacements, subjectText);
    }

    private static _getMessage() {
        let messageText = "";
        try {
            const filePath = path.join(this.__dirname, `../../custom-bodies/${this._customBody.messageFileName}`);
            messageText = fs.readFileSync(filePath, 'utf-8');
        } catch (error) {
            throw "The custom message file path is not valid";
        }

        return this._useReplacements(this._customBody.messageReplacements, messageText)
    }

    private static _useReplacements(replacements: Replacement[], text: string) {
        for (const replacement of replacements) {
            text = text.replaceAll(replacement.from, replacement.to);
        }

        return text;
    }

}