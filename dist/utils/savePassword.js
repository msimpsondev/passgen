import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';
const savePassword = (password) => {
    const filePath = path.join(__dirname, '../', 'passwords.txt');
    fs.open(filePath, 'a', 0o666, (e, id) => {
        if (e) {
            console.error(chalk.red('Failed to open the file.'));
            return;
        }
        fs.write(id, password + os.EOL, null, 'utf-8', (writeError) => {
            if (writeError) {
                console.error(chalk.red('Failed to write to the file.'));
                return;
            }
            fs.close(id, (closeError) => {
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
