const { Command } = require('discord.js-commando');
var image = "C:\Users\quent\Documents\BotDiscord\images\monstres\Armos.png"
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'blob-bleu',
			memberName: 'blob-bleu',
			group: 'divers',
			aliases: ['blob-bleu','7'],
			description: 'description de blob-bleu',
	                guildOnly: false,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}

	async run(msg) {
        msg.channel.send(
                    
            {
                embed: {
                color: 1022040,
                title: ` Blob bleu  `,
            
                fields: [
                    {
                        name: 'description',
                        value: 'De couleur bleue, ils peuplent uniquement les points d’eau comme le lac Faroria et rampes au fond de ses derniers en attendant qu’un chevalier imprudent s’approche un peu trop près. Ils sont redoutables, car comme leurs congénères, ils chercheront à vous emprisonner dans leur corps gélatineux, hors sous l’eau, une telle perte de temps et d’énergie peut être mortel.',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Commentaire',
                        value: `*vide*`,
                        inline: true,
                    },
                    {
                        name: 'Lieu',
                        value: ` #lac-faroria | #caverne-antique `,
                        inline: false,
                    },
                    
                ],    

                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
                image: {
                     url: 'https://media.discordapp.net/attachments/690639671423926272/692331140274716672/Chuchu_Bleu.png',
                },   
                
                
                
            },
        }
        )

        

    }


	
};