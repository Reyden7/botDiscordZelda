const { Command } = require('discord.js-commando');


module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'monstre',
			memberName: 'monstre',
			group: 'divers',
			aliases: ['monstres', 'monster'],
			description: 'renvoie la liste de tous les monstres avec leur id',
	                guildOnly: false,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
                    },
                    
        });
        
	}
       
	async run(msg) {
        //fruits.forEach(function(item, index, array) {
           // msg.say(item);
       // });
		  
		msg.channel.send(
                    
            {
                embed: {
                color: 1022040,
                title: ` Liste des monstres  `,
					
				fields: [
					{
						name: '\u200b',
						value: '\u200b',
						inline: false,
					},

					{
						
						name: '1 : Armos',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '2 : Baba Mojo',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '3 : Barracoudboul',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '4 : Blob Vert',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '5 : Blob Rouge',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '6 : Blob Jaune',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '7 : Blob Bleu',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '8 : Bokoblin Rouge',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '9 : Bokoblin Archer',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '10 : Bokoblin Bleu',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '11 : Bokoblin Vert',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '12 : Chauve-Souris (Normal)',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '13 : Chauve-Souris de Feu',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '14 : Chauve-Souris de Foudre',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '15 : Chauve-Souris des Ténèbres',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '16 : Croustaroule',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '17 : Flamboiseau',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '18 : Gufu',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '19 : Toukors',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '20 : Lézalfos',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '21 : Minigath',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '22 : Moblin',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '23 : Octorok (Herbe)',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '24 : Octorok (Rocher)',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '25 : Aquapiout',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '26 : Électropiout',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '27 : Magmapiout',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '28 : Ténépiout',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '29 : Péliroc',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '30 : Pyrolermite',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '31 : Quadribaba',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '32 : Sentinelle',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '33 : Skulltula',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '34 : Skullwalltula ou Walltula',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '35 : Skytail',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '36 : Sphérodrone',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '37 : Technokoblin',
						value: '\u200b',
						inline: false,
					},
					{
						
						name: '38 : Zombokoblin',
						value: '\u200b',
						inline: false,
					},
					
               
				],
                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
               
                
                
                
            },
        }
        )
           
    }
    
    
};