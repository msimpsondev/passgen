# Passgen

Passgen is a simple command-line tool for generating random passwords with various options.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the cloned directory.
3. Install dependencies using npm:
4. Set up a symlink using npm link:

## Usage

Generate a password using the default options (8 characters, includes numbers and symbols):


Options:
- `-l, --length <number>`: Specify the length of the password. Default is 8.
- `-s, --save`: Save the generated password to passwords.txt file.
- `--no-numbers`: Exclude numbers from the generated password.
- `--no-symbols`: Exclude symbols from the generated password.

Example usage:

passgen -l 12 --no-numbers


This command generates a 12-character password without including numbers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
