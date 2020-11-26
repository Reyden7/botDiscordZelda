const { Message, User, ClientUser, Emoji } = require('discord.js');
const { Command } = require('discord.js-commando');

const rubis = [1,1,1,1,1,5,5,5,0,0,0,20,20,-10,-10,50];
const bonus = [1,1,1,2,2,2,4,4,4,4,6,6,6,8,8,10];
//const ayy = .cache.get("305818615712579584");

var rubis_win;
var bonus_win;
var resultatFinal;
var rubis_couleur ='';
var url_rubis = '';
module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ttroulette',
			memberName: 'ttroulette',
			group: 'divers',
			aliases: ['rodulette'],
			description: 'Replies with a hello message.',
	                guildOnly: false,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}

   
	async run(msg) {



            rubis_win = rubis[Math.floor(Math.random() * rubis.length)];
            bonus_win = bonus[Math.floor(Math.random() * bonus.length)];
            resultatFinal = rubis_win * bonus_win;
            console.log(rubis_win);
            console.log(bonus_win);
            console.log('rubis_win :' + rubis_win)



            switch(rubis_win) // converti la valeur du rubis en couleur
            {
                case 1:
                    console.log('vert');
                    rubis_couleur = 'Rubis Vert';
                   
                    break;
                case 5:
                    console.log('bleu');
                    rubis_couleur = 'Rubis Bleu';
                    
                    break;
                case 0:
                    console.log('vide');
                    rubis_couleur ='Vide';
                   
                    break;
                case 20:
                    console.log('rouge');
                    rubis_couleur ='Rubis Rouge';
                    
                    break;
                case -10:
                    console.log('roupir');
                    rubis_couleur ='Roupir';
                    
                    break;
                case 50:
                    console.log('or');
                    rubis_couleur ='Rubis or';
                    
                    break;
                default:
                    console.log('erreur sur la conversion des couleur rubis');           
                 }
          



                 switch(rubis_win) // divise les rubis en 3 catégorie pour afficher un msg different suivant le gain
                 {
                     case 1:
                         console.log("1, 5, 20 rubis");

                         msg.channel.send(

                            {
                                embed: {
                                color: 1022040,
                                title: ` Bienvenu sur l'île de la roulette ! :ferris_wheel:  `,
                                description:`*Prêt ? C'est parti !*`,
                                thumbnail: {
                                    url: 'https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg',
                                },
                                fields: [

                                    {
                                        name: `Waouh ! Bonne pioche petit gars ! tu as attéris sur une case `,
                                        value: `${rubis_couleur} !`,
                                        inline: true,
                                    },
                                    {
                                        name: `avec un multiplicateur de `,
                                        value: `x${bonus_win} ! :balloon:`,
                                        inline: false,
                                    },

                                    {
                                        name: `ça fais un totale de `,
                                        value:`${resultatFinal}  rubis !`,
                                        inline: false,
                                    },

                                    {
                                        name: `Tes rubis te seront versés à la fin de la journée`,
                                        value: 'Reviens tenter ta chance demain !',
                                        inline: false,
                                    },
                                ],
                                timestamp: new Date(),
                                footer:{
                                    text:'Par Reyden',
                                },
                                image: {
                                    url: 'https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png',
                                },

                            },
                        })

                         break;
                         case 5:
                            console.log("1, 5, 20 rubis");

                            msg.channel.send(

                               {
                                   embed: {
                                   color: 1022040,
                                   title: ` Bienvenu sur l'île de la roulette ! :ferris_wheel:   `,
                                   description:`*Prêt ? C'est parti !*`,
                                   thumbnail: {
                                       url: 'https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg',
                                   },
                                   fields: [

                                       {
                                           name: `Waouh ! Bonne pioche petit gars ! tu as attéris sur une case `,
                                           value: `${rubis_couleur} !`,
                                           inline: true,
                                       },
                                       {
                                           name: `avec un multiplicateur de `,
                                           value: `x${bonus_win} ! :balloon:`,
                                           inline: false,
                                       },

                                       {
                                           name: `ça fais un totale de `,
                                           value:`${resultatFinal} rubis !`,
                                           inline: false,
                                       },

                                       {
                                           name: `Tes rubis te seront versés à la fin de la journée`,
                                           value: 'Reviens tenter ta chance demain !',
                                           inline: false,
                                       },
                                   ],
                                   timestamp: new Date(),
                                   footer:{
                                       text:'Par Reyden',
                                   },
                                   image: {
                                       url: 'https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png',
                                   },

                               },
                           })

                            break;
                            case 20:
                                console.log("1, 5, 20 rubis");

                                msg.channel.send(

                                   {
                                       embed: {
                                       color: 1022040,
                                       title: ` Bienvenu sur l'île de la roulette ! :ferris_wheel:   `,
                                       description:`*Prêt ? C'est parti !*`,
                                       thumbnail: {
                                           url: 'https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg',
                                       },
                                       fields: [

                                           {
                                               name: ` Waouh ! Bonne pioche petit gars ! tu as attéris sur une case `,
                                               value: `${rubis_couleur} !`,
                                               inline: true,
                                           },
                                           {
                                               name: `avec un multiplicateur de `,
                                               value: `x${bonus_win} ! :balloon:`,
                                               inline: false,
                                           },

                                           {
                                               name: `ça fais un totale de `,
                                               value:`${resultatFinal}  rubis !`,
                                               inline: false,
                                           },

                                           {
                                               name: `Tes rubis te seront versés à la fin de la journée`,
                                               value: 'Reviens tenter ta chance demain !',
                                               inline: false,
                                           },
                                       ],
                                       timestamp: new Date(),
                                       footer:{
                                           text:'Par Reyden',
                                       },
                                       image: {
                                           url: 'https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png',
                                       },

                                   },
                               })

                            break;    
                     case 0:
                         console.log('0, -10');
                         msg.channel.send(

                            {
                                embed: {
                                color: 1022040,
                                title: ` Bienvenu sur l'île de la roulette ! :ferris_wheel:   `,
                                description:`*Prêt ? C'est parti !*`,
                                thumbnail: {
                                    url: 'https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg',
                                },
                                fields: [

                                    {
                                        name: `Oh dommage, tu es tomber sur une case `,
                                        value:`${rubis_couleur} !`,
                                        inline: true,
                                    },
                                    {
                                        name: `avec un multiplicateur de`,
                                        value:`x${bonus_win} ! :balloon:`,
                                        inline: false,
                                    },

                                    {
                                        name: `ça fais un totale de `,
                                        value:`${resultatFinal}  rubis !`,
                                        inline: false,
                                    },

                                    {
                                        name: `Ne baisse pas les bras,`,
                                        value: 'Reviens tenter ta chance demain !',
                                        inline: false,
                                    },
                                ],
                                timestamp: new Date(),
                                footer:{
                                    text:'Par Reyden',
                                },
                                image: {
                                    url: 'https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png',
                                },

                            },
                        })
     
                         break;
                         case -10:
                            console.log('0, -10');
                            msg.channel.send(

                               {
                                   embed: {
                                   color: 1022040,
                                   title: ` Bienvenu sur l'île de la roulette ! :ferris_wheel:   `,
                                   description:`*Prêt ? C'est parti !*`,
                                   thumbnail: {
                                       url: 'https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg',
                                   },
                                   fields: [

                                       {
                                           name: `Oh dommage, tu es tomber sur une case `,
                                           value:`${rubis_couleur} !`,
                                           inline: true,
                                       },
                                       {
                                           name: `avec un multiplicateur de`,
                                           value:`x${bonus_win} ! :balloon:`,
                                           inline: false,
                                       },

                                       {
                                           name: `ça fais un totale de `,
                                           value:`${resultatFinal} rubis !`,
                                           inline: false,
                                       },

                                       {
                                           name: `Ne baisse pas les bras,`,
                                           value: 'Reviens tenter ta chance demain !',
                                           inline: false,
                                       },
                                   ],
                                   timestamp: new Date(),
                                   footer:{
                                       text:'Par Reyden',
                                   },
                                   image: {
                                       url: 'https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png',
                                   },

                               },
                           })
        
                            break;
                     case 50:
                         console.log("50");
                         msg.channel.send(

                            {
                                embed: {
                                color: 1022040,
                                title: ` Bienvenu sur l'île de la roulette ! :ferris_wheel:   `,
                                description:`*Prêt ? C'est parti !*`,
                                thumbnail: {
                                    url: 'https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg',
                                },
                                fields: [

                                    {
                                        name: `Bingo ! :tada: tu es tombé sur une case `,
                                        value:`${rubis_couleur} !*`,
                                        inline: true,
                                    },
                                    {
                                        name: `avec un multiplicateur de `,
                                        value:`x${bonus_win} :balloon:`,
                                        inline: false,
                                    },

                                    {
                                        name: `ça fais un totale de `,
                                        value:`${resultatFinal} rubis !`,
                                        inline: false,
                                    },

                                    {
                                        name: `Tes rubis te seront versés à la fin de la journée`,
                                        value: 'Reviens tenter ta chance demain !',
                                        inline: false,
                                    },
                                ],
                                timestamp: new Date(),
                                footer:{
                                    text:'Par Reyden',
                                },
                                image: {
                                    url: 'https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png',
                                },

                            },
                        })
     
                         break
                     default:
                         console.log (`erreur sur l'affichage du message en fonction des catégorie de gain`);

                 }




    };
}