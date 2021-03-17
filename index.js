const { Plugin } = require('powercord/entities');
const all_letters = ['SDFGJKL', 'WERUIAHVB', 'QTYOPZXCNM'];

module.exports = class Sdfghjkl extends Plugin {
	startPlugin() {
		powercord.api.commands.registerCommand({
			command: 'sdfghjkl',
			description:
				'UEYWASRFGWEYUJSGTFUWJKARFHDUKQWGFCUKWAJEGFDUKQWAHDKQWAHGKAQWDHUAWHAWHJKDHKfawGHQKJRFDwahKJIDRFQjkfGHASEkjFKJAWHJHSGAEDHFDjqkashkfvahkadfhjsd',
			usage: '{c} [length]',
			executor: (args) => this.sdfghjkl(args)
		});
	}

	pluginWillUnload() {
		powercord.api.commands.unregisterCommand('sdfghjkl');
	}

	sdfghjkl(args) {
		let lower = args.length >= 2 && args[1].toLowerCase() === 'l';

		let length;

		if (args.length >= 1) {
			length = parseInt(args[0]);
			if (isNaN(length)) return;
			length = Math.max(Math.min(length, 2000), 1);
		} else {
			length = Math.floor(Math.random() * 51 + 50);
		}

		let result = '';

		for (let i = 0; i < length; i++) {
			let letters;
			let n = Math.random();

			if (n >= 0.4) letters = all_letters[0];
			else if (n >= 0.1) letters = all_letters[1];
			else letters = all_letters[2];

			result += letters.charAt(Math.floor(Math.random() * letters.length));
		}

		if (lower) {
			result = result.toLowerCase();
		}

		return {
			send: true,
			result: result
		};
	}
};
