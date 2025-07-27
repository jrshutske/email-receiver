import validator from "validator";

export function isValidPort(port: string): boolean {
  return validator.isInt(port, { min: 1, max: 65535 });
}
