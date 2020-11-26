const { Command } = require('discord.js-commando');
var image = "C:\Users\quent\Documents\BotDiscord\images\monstres\Armos.png"
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'blobvert',
			memberName: 'blobvert',
			group: 'divers',
			aliases: ['blobvert','4'],
			description: 'description de blobvert',
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
                title: ` Blob vert  `,
            
                fields: [
                    {
                        name: 'description',
                        value: 'Les Blobs ont une apparence gélatineuse et peuvent arborer plusieurs couleurs en fonction de l’élément auquel ils sont affiliés. Ils sont très lents et se déplacent en émettant un bruit de succion. On en trouve absolument partout et sont plus gênant que réellement dangereux bien qu’ils ont la possibilité de bondir et de vous faire prisonnier dans leur corps gluant et collant le temps que d’autres monstres se chargent de vous. Ils sont capables de fusionner pour devenir plus gros, ou bien de se diviser lorsqu’on les tranche en plusieurs parties. De couleur verte, ce sont les plus communs. Ils n’ont aucun pouvoir en particulier et se trouve dans les zones tempérées ou humide tel que la forêt de Firone ou l’île de Célesbourg où ils prolifèrent, mais ne se montrent que la nuit. ',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Commentaire',
                        value: `*Ce spécimen aime vivre dans un environnement humide. Il s'accroche à ses victimes et les absorbe. C'est un être asexué, qui se reproduit en se divisant.*`,
                        inline: true,
                    },
                    {
                        name: 'Lieu',
                        value: ` #chemin-vers-lécole ☽  #statue-de-la-déesse ☽ #grande-place ☽  #berges-de-célesbourg ☽ #quartier-résidentiel ☽ #cimetière ☽ #grotte-de-la-cascade #vallon-du-sceau #forêt-de-firone #coeur-de-la-forêt #grand-arbre | #caverne-antiqu `,
                        inline: false,
                    },
                    
                ],    

                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
                image: {
                     url: 'https://media.discordapp.net/attachments/690639671423926272/692326593653244004/Chuchu_Vert.png',
                },   
                
                
                
            },
        }
        )

        

    }


	
};