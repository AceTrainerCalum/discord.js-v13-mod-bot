/** @format */

const { Permissions } = require('discord.js');

const flagsPermissions = new Permissions([
	Permissions.FLAGS.MANAGE_CHANNELS,
]);

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "hello",
	description: "Hello!",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		message.reply("Hello!");
		// checkChannel = message.mentions.channels.first()
		// if (!checkChannel) return;
		// checkChannelID = checkChannel.id 
		// if (!checkChannelID) return;

		// let messageToSend = args.join(" ").slice(25);
		// if (!messageToSend) message.channel.send(`${message.author.tag} you need to have a message to send`)

		// message.channel.send(checkChannelID)
		// client.channels.cache.get(checkChannelID).send(`hello`);
	}
});
