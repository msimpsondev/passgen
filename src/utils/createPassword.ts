const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const createPassword = (length: number = 8, hasNumbers: boolean = true, hasSymbols: boolean = true): string => {
  let chars = alpha;
  if (hasNumbers) {
    chars += numbers;
  }
  if (hasSymbols) {
    chars += symbols;
  }
  return generatePassword(length, chars);
};

const generatePassword = (length: number, chars: string): string => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

export default createPassword;
