const { Command } = require('discord.js-commando');
var image = "C:\Users\quent\Documents\BotDiscord\images\monstres\Armos.png"
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'barracoudboul',
			memberName: 'barracoudboul',
			group: 'divers',
			aliases: ['barracoudboul','3'],
			description: 'description de barracoudboul',
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
                title: ` Barracoudboul  `,
            
                fields: [
                    {
                        name: 'description',
                        value: 'Le Barracoudboul est un énorme poisson de plus d’un mètre de long qui possède sur le sommet de sa tête une énorme bosse recouverte de cicatrice. La raison de ces blessures étant qu’il fonce imprudemment sur tout ce qui bouge, et heurte donc très souvent des murs ou des rochers. Cependant, ces aléas font que cette créature à une peau très solide et résiste très bien aux coups. Le seul moyen de le vaincre est d’attendre qu’il soit sonné –en frappant une surface dure- afin de le rendre vulnérable. Lorsqu’il a une cible en vue, il prend une couleur rouge avant de charger, si vous n’êtes pas trop distrait, vous aurez alors le temps d’esquiver, car imaginer contrer cette créature avec un bouclier est dangereux.',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Commentaire',
                        value: `*VIDE*`,
                        inline: true,
                    },
                    {
                        name: 'Lieu',
                        value: `lac-faroria #mer-de-sable `,
                        inline: false,
                    },
                    
                ],    

                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
                image: {
                     url: 'https://media.discordapp.net/attachments/690639671423926272/692324708552802364/Barracoudboul.png?width=968&height=677',
                },   
                
                
                
            },
        }
        )

        

    }


	
};