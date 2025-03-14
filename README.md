# Hyper-ESpoofer

Simple email spoofer tool

## Description

Hyper-ESpoofer is a straightforward email spoofing tool built using [Typescript](https://www.typescriptlang.org/) and [Emailjs](https://www.npmjs.com/package/emailjs)
## Getting Started

### How to use

1. **Clone the repository**
    - `git clone [repository URL]`
    - `cd [repository folder]`
2. **Configure SMTP Settings**
    - Navigate to the `/config` folder and set up your SMTP server settings and credentials in the SMTP.json file.
3. **Set Up Email Fields**
    - In the same `/config` folder, configure the email fields in the email.json file.

## Custom bodies

1. **Add files**
    - Add your custom subject and message txt files to the `/custom-bodies` folder
2. **Configuration**
    - Set the `useCustomBody` in the email.json to `true`
    - Put your subject file name in the `subjectFileName` field
    - Put your message file name in the `messageFileName` field
3. **Replacements**
    - You can configure multiple string replacements by adding new objects with `from` and `to` in the `subjectReplacements` and `messageReplacements` fields

### Running the program

1. **Start the program**
    - `npm start`

And you're done!