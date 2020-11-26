const { Command } = require('discord.js-commando');
var image = "C:\Users\quent\Documents\BotDiscord\images\monstres\Armos.png"
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'baba mojo',
			memberName: 'baba mojo',
			group: 'divers',
			aliases: ['baba mojo','2'],
			description: 'description de baba mojo',
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
                title: ` Baba Mojo  `,
            
                fields: [
                    {
                        name: 'description',
                        value: 'Les Baba Mojo sont une espèce de plante carnivore agressive, qui peuple la forêt de Firone, les carrières de Lanelle ou les endroits sombres comme les donjons. Elles se dressent devant les chevaliers qui entrent dans leur périmètre d’attaque, et les agressent d’un coup de crâne ou d’une morsure douloureuse. Leurs têtes sont recouvertes d’une carapace très robuste et impénétrable, en revanche leurs tiges et le cœur de leurs bouches sont plus fragiles. Elles ouvrent leur gueules soit verticalement, soit horizontalement, pour la vaincre, il vous faudra attendre le bon moment pour couper sa tige ou lui trancher la bouche dans le sens de l’ouverture.',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Commentaire',
                        value: `*Cette plante agressive qui peuple les forêts attaque tout ce qui l'approche. Son enveloppe extérieure est robuste, mais l'intérieur est plus tendre. Elles s'ouvrent horizontalement et verticalement.*`,
                        inline: true,
                    },
                    {
                        name: 'Lieu',
                        value: `: #vallon-du-sceau #forêt-de-firone #coeur-de-la-forêt #grand-arbre #mine-de-lanelle :Chronolithe:  #grotte-de-lanelle :Chronolithe:  #désert-de-lanelle :Chronolithe:  #maison-du-capitaine #gorges-de-lanelle :Chronolithe: | #temple-de-la-contemplation 【:skull_crossbones:】 #caverne-antique  `,
                        inline: false,
                    },
                    
                ],    

                timestamp: new Date(),
                footer:{
                    text:'Par Reyden',
                },
                image: {
                     url: 'https://media.discordapp.net/attachments/690639671423926272/692323425271939152/Baba_Mojo.png',
                },   
                
                
                
            },
        }
        )

        

    }


	
};