/** @format */

const { Permissions } = require('discord.js');

const flagsPermissions = new Permissions([
	Permissions.FLAGS.MANAGE_CHANNELS,
]);

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "raid",
	description: "protects members from raids",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        let user = message.member
        let role = role

       
        if (!message.member.permissions.has("MANAGE_GUILD"))  return message.channel.send("you lack permisions to opperate this command if the server is being raided then @ a modorator for help")
        if (user.permissions.has("MANAGE_GUILD")) {
            message.channel.send(`${user} has shutdown the server for a raid when the raid is over a modorator can use the command munraid to unmute the channels`)
            
            const channel = client.channels.cache.get('849355309700087878');
            channel.permissionOverwrites.edit({SEND_MESSAGES: false})
        }
        

	}
});
