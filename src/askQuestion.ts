import readline from "readline";

export default function askQuestion(
  prompt: string,
  defaultValue: string,
  validChoices?: string[],
  validationCallback?: (answer: string) => boolean
): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    const ask = () => {
      rl.question(prompt, (input) => {
        const answer = input.trim() || defaultValue;
        const isValid =
          (!validationCallback && !validChoices) ||
          validationCallback?.(answer) ||
          validChoices?.includes(answer);

        if (isValid) {
          rl.close();
          resolve(answer);
        } else {
          console.log("Invalid input.");
          ask();
        }
      });
    };
    ask();
  });
}
