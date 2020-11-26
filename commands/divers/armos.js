const { Command } = require('discord.js-commando');
var image = "C:\Users\quent\Documents\BotDiscord\images\monstres\Armos.png"
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'armos',
			memberName: 'armos',
			group: 'divers',
			aliases: ['armos','1'],
			description: 'description de armos',
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
                title: ` Armos  `,
            
                fields: [
                    {
                        name: 'description',
                        value: 'Les Armos sont des statuts antique que l’on trouve uniquement dans le passé, dans la région de Lanelle. Ils sont ramenés à la vie par les chronolithes, dans le présent, ils ne sont que des tas de ruines. Ils gardent le plus souvent des portes ou des passages que les chevaliers souhaitent emprunter. Ils cachent dans leurs bouches les cristaux qui sont responsables de leur activation. Pour les vaincre, il vous faudra trouver un moyen de faire tourner l’hélice sur le sommet de leurs têtes, afin de vous laisser la chance de les désactiver. Si vous souhaitez les éviter, prenez garde à ne pas entrer dans leurs périmètres de détection. À tout moment, il vous est possible de fuir en vous éloignant suffisamment du monstre.',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Commentaire',
                        value: `*Il s'agit d'un dispositif de sécurité antique. Il attaque tout ce qui pénètre dans son périmètre de contrôle. Son point faible se situe dans sa bouche, mais il faudra d'abord trouver le moyen de lui faire ouvrir.*`,
                        inline: true,
                    },
                    {
                        name: 'Lieu',
                        value: ` #raffinerie-de-lanelle `,
                        inline: false,
                    },
                    
                ],    

                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
                image: {
                     url: 'https://media.discordapp.net/attachments/690639671423926272/692320837302485062/Armos.png',
                },   
                
                
                
            },
        }
        )

        

    }


	
};