import smtpServer from "./smtpServer";
import askQuestion from "./askQuestion";
import { isValidPort } from "./port-validator";

async function main() {
  const port = await askQuestion(
    "(Default: 2525) Enter a port number between 1 and 65535: ",
    "2525",
    undefined,
    isValidPort
  );
  console.info(`Attempting to use port: ${port}`);

  //start server
  smtpServer.listen(port, () => {
    console.info(`SMTP server listening on port: ${port}`);
  });
}

main();
