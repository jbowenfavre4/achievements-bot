const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

const txt = "src/data/helloworld.txt"

module.exports = {
	data: new SlashCommandBuilder()
		.setName('helloworld')
		.setDescription('Says hello!'),
	async execute(interaction) {
        console.log('hello world command was called.')
        let text = fs.readFileSync(txt, 'utf8')
        
        await interaction.reply(text)
    }
}
