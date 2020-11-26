const { Command } = require('discord.js-commando');
var fruits = ['1 : Bela-Darma','2 : Da Ihloma','3 : Diadagos','4 : DL-0002T Capitaine Trucide','5 : Dl-002Z Capitaine Zigouille','6 : Le Banni','7 : Lézalfos Sombre','8 : Magmain','9 : Maître Stalfos',
'10 : Moblin Blindé','11 : Molgath','12 : Stalphos','13 : Stalfydre','14 : Peahat'];



module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'boss',
			memberName: 'boss',
			group: 'divers',
			aliases: ['boss', 'bosses'],
			description: 'renvoie la liste de tous les boss et mini boss',
	                guildOnly: false,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
                    },
                    
        });
        
	}
       
	async run(msg) {
        fruits.forEach(function(item, index, array) {
            msg.say(item);
        });
          
           
    }
    
    
};