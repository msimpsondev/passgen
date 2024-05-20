import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';

const savePassword = (password: string): void => {
  const filePath = path.join(__dirname, '../', 'passwords.txt');
  fs.open(filePath, 'a', 0o666, (e: any, id: any) => {
    if (e) {
      console.error(chalk.red('Failed to open the file.'));
      return;
    }
    fs.write(id, password + os.EOL, null, 'utf-8', (writeError: any) => {
      if (writeError) {
        console.error(chalk.red('Failed to write to the file.'));
        return;
      }
      fs.close(id, (closeError: any) => {
        if (closeError) {
          console.error(chalk.red('Failed to close the file.'));
          return;
        }
        console.log(chalk.green('Password saved to passwords.txt'));
      });
    });
  });
};

export default savePassword;
