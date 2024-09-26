export const MAIL_HOST = process.env.MAIL_HOST;
let mail_port = process.env.MAIL_PORT;
let number_mail_port = 0;
if (typeof mail_port === "string") {
    number_mail_port = parseInt(mail_port);
} else if (typeof mail_port === "number") {
    number_mail_port = mail_port;
}
export const MAIL_PORT: number = number_mail_port;
export const MAIL_USER = process.env.MAIL_USER;
export const MAIL_PASS = process.env.MAIL_PASS;
export const MAIL_ADDRESS = process.env.MAIL_ADDRESS;
