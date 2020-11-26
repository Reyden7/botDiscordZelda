const { Command } = require('discord.js-commando');
var image = "C:\Users\quent\Documents\BotDiscord\images\monstres\Armos.png"
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bokoblin-rouge',
			memberName: 'bokoblin-rouge',
			group: 'divers',
			aliases: ['bokoblin-rouge','8'],
			description: 'description de bokoblin-rouge',
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
                title: ` bokoblin rouge  `,
            
                fields: [
                    {
                        name: 'description',
                        value: 'De couleur rouge, ils sont les plus communs et aussi les plus faciles à vaincre, il faut simplement être un peu plus prudent avec ceux possédant un bandana sur la tête, ils endossent souvent le rôle de chef de horde et sont donc plus résistant et plus intelligent. On les trouve un peu partout, principalement dans la forêt de Firone et dans la région d’Ordinn. Il est bon à noter que les bokoblins ont peur des insectes et des bombes.',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Commentaire',
                        value: `*Ces monstres peuplent tous les coins du monde depuis la nuit des temps. Leur organisation sociale détermine le rôle et l'armement de chaque individu. Ils sont plus à l'aise dans les attaques groupées. Leur intellect limité ne leur autorise qu'une étrange passion pour les sous-vêtements.*`,
                        inline: true,
                    },
                    {
                        name: 'Lieu',
                        value: `   #forêt-de-firone ☼ #coeur-de-la-forêt ☼ #grand-arbre ☼ #pied-du-volcan ☼ #souterrains ☼ #volcan-dordinn ☼ #camp-bokoblin #prison-bokoblin | #temple-de-la-terre  #caverne-antique #galion-des-sables  #sanctuaire-ancie `,
                        inline: false,
                    },
                    
                ],    

                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
                image: {
                     url: 'https://media.discordapp.net/attachments/690639671423926272/692333435850588180/Bokoblin_Rouge.png?width=796&height=677',
                },   
                
                
                
            },
        }
        )

        

    }


	
};