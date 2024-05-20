#!/usr/bin/env node

import chalk from 'chalk';
import clipboardy from 'clipboardy';
import { Command } from 'commander';
import createPassword from './utils/createPassword.js';
import savePassword from './utils/savePassword.js';

const log = console.log;
const program = new Command();

program
    .name('passgen')
    .version('1.0.0')
    .description('Simple Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts<{
  length: string,
  save: boolean,
  numbers: boolean,
  symbols: boolean
}>();

// Convert length to a number
const passwordLength = parseInt(length, 10);

// Get Generated Password
const generatedPassword = createPassword(passwordLength, numbers, symbols);

// Save to file
if (save) {
    savePassword(generatedPassword);
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password copied to clipboard'));