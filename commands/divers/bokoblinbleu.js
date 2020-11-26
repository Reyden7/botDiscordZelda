const { Command } = require('discord.js-commando');
var image = "C:\Users\quent\Documents\BotDiscord\images\monstres\Armos.png"
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bokoblin-bleu',
			memberName: 'bokoblin-bleu',
			group: 'divers',
			aliases: ['bokoblin-bleu','10'],
			description: 'description de bokoblin-bleu',
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
                title: ` bokoblin bleu  `,
            
                fields: [
                    {
                        name: 'description',
                        value: 'De couleur bleue, ils sont un peu plus rare et bien plus résistant et puissant que leur congénère. Même seul, il représente une certaine menace, il faut être encore plus méfiant avec eux. Ils peuvent parfois se munir d’un petit bouclier en bois.',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Commentaire',
                        value: `*Ce spécimen est doté d'une force physique bien supérieure à celle du bokoblin rouge. Il se distingue de ses congénères par la couleur de sa peau et ses vêtements, mais partage la même passion pour les sous-vêtements.*`,
                        inline: true,
                    },
                    {
                        name: 'Lieu',
                        value: ` forêt-de-firone ☼ #coeur-de-la-forêt ☼ | #sanctuaire-ancien  `,
                        inline: false,
                    },
                    
                ],    

                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
                image: {
                     url: 'https://media.discordapp.net/attachments/690639671423926272/692350874067927150/Bokoblin_Bleu.png?width=825&height=677',
                },   
                
                
                
            },
        }
        )

        

    }


	
};