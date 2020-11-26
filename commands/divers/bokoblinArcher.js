const { Command } = require('discord.js-commando');
var image = "C:\Users\quent\Documents\BotDiscord\images\monstres\Armos.png"
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bokoblin-archer',
			memberName: 'bokoblin-archer',
			group: 'divers',
			aliases: ['bokoblin-archer','9'],
			description: 'description de bokoblin-archer',
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
                title: ` bokoblin archer  `,
            
                fields: [
                    {
                        name: 'description',
                        value: 'De couleur rouge, ses Bokoblins un peu plus agile sont muni d’un arc et de flèches. Ils sont le plus souvent placés en hauteur ou dans des lieux inaccessibles de sorte à ce que le seul moyen de les éliminer soit de jouer à leurs propres jeux. Leurs flèches sont parfois enflammées, faisant bien plus de dégâts.',
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
                        value: `  #coeur-de-la-forêt ☼ #grand-arbre ☼ #mer-de-sable :Chronolithe:  #volcan-dordinn ☼ #camp-bokoblin | #temple-de-la-terre  #galion-des-sables #sanctuaire-ancien  `,
                        inline: false,
                    },
                    
                ],    

                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
                image: {
                     url: 'https://media.discordapp.net/attachments/690639671423926272/692350416150724618/Bokoblin_Archer.png',
                },   
                
                
                
            },
        }
        )

        

    }


	
};