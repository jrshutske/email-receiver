import { simpleParser } from "mailparser";
import { SMTPServer } from "smtp-server";

export default new SMTPServer({
  authOptional: true,
  onData(stream, _, callback) {
    simpleParser(stream)
      .then((parsed) => {
        if (!parsed) {
          callback(new Error("Could not parse"));
          return;
        }
        console.info("----- New Email -----");
        console.info("From:", parsed.from?.text);
        if (!Array.isArray(parsed.to)) console.info("To:", parsed.to?.text);
        else {
          console.info("To:");
          parsed.to.forEach((to) => console.info(`${to?.text}, `));
        }
        console.info("Subject:", parsed.subject);
        console.info("Text:", parsed.html);
        console.info("---------------------");
        callback();
      })
      .catch((err) => {
        console.error("Error parsing email:", err);
        callback(err);
      });
  },
});
