const { Command } = require('discord.js-commando');
var image = "C:\Users\quent\Documents\BotDiscord\images\monstres\Armos.png"
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'blob-jaune',
			memberName: 'blob-jaune',
			group: 'divers',
			aliases: ['blob-jaune','6'],
			description: 'description de blob-jaune',
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
                title: ` Blob jaune  `,
            
                fields: [
                    {
                        name: 'description',
                        value: 'De couleur jaune, ils peuplent essentiellement la région de Lanelle. Ils peuvent générer de l’électricité dans leurs corps et deviennent alors très dangereux. S ils ne peuvent pas causer la mort d’un être humain, l’électrisation qu’ils entraînent est douloureuse et peut causer une paralysie temporaire ou perte de connaissance chez certaines personnes. En outre, les armes en métal sont extrêmement vulnérable face à l’électricité, et seront très désavantagées. Pour les éliminer, il vous faudra guetter le moment où ils tombent à cours de tension.',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Commentaire',
                        value: `*Ce spécimen envoie des décharges électriques à intervalles réguliers. Soyez sur vos gardes. Si vous le touchez pendant qu'il génère de l'électricité votre corps tout entier sera paralysé pendant un certain temps.*`,
                        inline: true,
                    },
                    {
                        name: 'Lieu',
                        value: `#grotte-de-lanelle #désert-de-lanelle #port-ancien #maison-du-capitaine #chantier-naval #repaire-pirates #gorges-de-lanelle | #raffinerie-de-lanelle  `,
                        inline: false,
                    },
                    
                ],    

                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
                image: {
                     url: 'https://media.discordapp.net/attachments/690639671423926272/692330384658006036/Chuchu_Jaune.png',
                },   
                
                
                
            },
        }
        )

        

    }


	
};