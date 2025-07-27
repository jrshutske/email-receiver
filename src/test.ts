import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import askQuestion from "./askQuestion";
import { isValidPort } from "./port-validator";

async function main() {
  const port = await askQuestion(
    "(Default: 2525) Enter a port number between 1 and 65535: ",
    "2525",
    undefined,
    isValidPort
  );
  console.info(`Attempting to send email to server on port: ${port}`);

  const smtpOptions: SMTPTransport.Options = {
    host: "localhost",
    port: parseInt(port),
    secure: false,
    tls: { rejectUnauthorized: false },
  };
  let transporter = nodemailer.createTransport(smtpOptions);

  transporter.sendMail(
    {
      from: "sender@example.com",
      to: "receiver@example.com",
      subject: "Test Email",
      text: "Email test text",
      html: "Email test html",
    },
    (err, info) => {
      if (err) console.error(err);
      else console.log("Email sent:", info.response);
    }
  );
}

main();
