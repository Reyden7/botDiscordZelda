const { Command } = require('discord.js-commando');
var image = "C:\Users\quent\Documents\BotDiscord\images\monstres\Armos.png"
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'blob-rouge',
			memberName: 'blob-rouge',
			group: 'divers',
			aliases: ['blob-rouge','5'],
			description: 'description de blob-rouge',
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
                title: ` Blob rouge  `,
            
                fields: [
                    {
                        name: 'description',
                        value: 'Les Blobs ont une apparence gélatineuse et peuvent arborer plusieurs couleurs en fonction de l’élément auquel ils sont affiliés. Ils sont très lents et se déplacent en émettant un bruit de succion. On en trouve absolument partout et sont plus gênant que réellement dangereux bien qu’ils ont la possibilité de bondir et de vous faire prisonnier dans leur corps gluant et collant le temps que d’autres monstres se chargent de vous. Ils sont capables de fusionner pour devenir plus gros, ou bien de se diviser lorsqu’on les tranche en plusieurs parties.De couleur rouge, ils peuplent essentiellement la région d’Ordinn. Ils peuvent s’enflammer sans prévenir, devant ainsi dangereux et pouvant rapidement causer de grave brûlure puisque que comme leurs congénères, ils chercheront à vous capturer dans leur corps gluant. Il faut également prendre gare à votre équipement inflammable. ',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Commentaire',
                        value: `*Ce spécimen incandescent peut enflammer vos vêtements et vos armes en bois en vous touchant.*`,
                        inline: true,
                    },
                    {
                        name: 'Lieu',
                        value: `  #pied-du-volcan #volcan-dordinn #souterrains #sommet-du-volcan #intérieur-du-volcan  | #temple-de-la-terre  #sanctuaire-ancien  `,
                        inline: false,
                    },
                    
                ],    

                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
                image: {
                     url: 'https://media.discordapp.net/attachments/690639671423926272/692328452467982366/Chuchu_Rouge.png',
                },   
                
                
                
            },
        }
        )

        

    }


	
};