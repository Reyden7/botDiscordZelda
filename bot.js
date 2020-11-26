const CommandoClient = require('./client'); // Chargement du client de Discord Commando
const path = require('path') // on ajoute la librairie
const Fs = require('fs');
const Discord = require("discord.js");

const client = new CommandoClient({
    commandPrefix: '?', // Préfixe des commandes (ex: ?help)
    owner: '348568636824354816', // ID de l'owner du bot, peut également être un tableau d'id pour plusieurs owners, ex: ['ID1', 'ID2']
    disableMentions: 'everyone' // Désactive, par sécurité, l'utilisation du everyone par le bot
});

const prefix = "?";
const prefixCommand = "!";
const uneHeure = 43200000;

//==Embed=====
const BombeEmbed = new Discord.MessageEmbed()
BombeEmbed.setColor('#000000')
BombeEmbed.setTitle('Ho non ! tu es tombé sur une bombe ...  Fin de partie !')
BombeEmbed.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/777606920117682186/240.png')
BombeEmbed.setDescription("Pas de rubis pour toi")
BombeEmbed.setTimestamp()

const VertEmbed = new Discord.MessageEmbed()
VertEmbed.setColor('#00FF00')
VertEmbed.setTitle('Cool ! tu a trouvé un rubis vert !')
VertEmbed.setThumbnail('https://cdn.discordapp.com/attachments/756619175417610321/776066408294383617/Rubis_Vert.png')
VertEmbed.setDescription("Continue comme  ça !")
VertEmbed.setTimestamp()

const bleuEmbed = new Discord.MessageEmbed()
bleuEmbed.setColor('#5cd2de')
bleuEmbed.setTitle('Super  ! tu a trouvé un rubis bleu  !')
bleuEmbed.setThumbnail('https://cdn.discordapp.com/attachments/756619175417610321/776066402309111818/Rubis_Bleu.png')
bleuEmbed.setDescription("Continue comme  ça !")
bleuEmbed.setTimestamp()

const RougeEmbed = new Discord.MessageEmbed()
RougeEmbed.setColor('#b72020')
RougeEmbed.setTitle('WOW ! tu a trouvé le rubis rouge !')
RougeEmbed.setThumbnail('https://cdn.discordapp.com/attachments/756619175417610321/776066406567116810/Rubis_Rouge.png')
RougeEmbed.setDescription("Continue comme  ça !")
RougeEmbed.setTimestamp()
//============

var x1y1, x1y2, x1y3, x1y4, x1y5,x2y1, x2y2, x2y3, x2y4, x2y5, x3y1, x3y2, x3y3, x3y4, x3y5, x4y1, x4y2, x4y3, x4y4, x4y5;
var creuse_x1y1 = 0, creuse_x1y2= 0, creuse_x1y3= 0, creuse_x1y4= 0, creuse_x1y5= 0,creuse_x2y1= 0, creuse_x2y2= 0, creuse_x2y3= 0, creuse_x2y4= 0, creuse_x2y5= 0, creuse_x3y1= 0, creuse_x3y2= 0, creuse_x3y3= 0, creuse_x3y4= 0, creuse_x3y5= 0, creuse_x4y1= 0, creuse_x4y2= 0, creuse_x4y3= 0, creuse_x4y4= 0, creuse_x4y5= 0;
var bombe = 0;
var rubisGagne = 0 ;
var tab =  Array(
    x1y1 = Math.floor(Math.random() * Math.floor(3)),
    x1y2 = Math.floor(Math.random() * Math.floor(2)),
    x1y3 = Math.floor(Math.random() * Math.floor(3)),
    x1y4 = Math.floor(Math.random() * Math.floor(4)),
    x1y5 = Math.floor(Math.random() * Math.floor(2)),
    x2y1 = Math.floor(Math.random() * Math.floor(3)),
    x2y2 = Math.floor(Math.random() * Math.floor(3)),
    x2y3 = Math.floor(Math.random() * Math.floor(3)),
    x2y4 = Math.floor(Math.random() * Math.floor(2)),
    x2y5 = Math.floor(Math.random() * Math.floor(2)),
    x3y1 = Math.floor(Math.random() * Math.floor(2)),
    x3y2 = Math.floor(Math.random() * Math.floor(2)),
    x3y3 = Math.floor(Math.random() * Math.floor(3)),
    x3y4 = Math.floor(Math.random() * Math.floor(3)),
    x3y5 = Math.floor(Math.random() * Math.floor(4)),
    x4y1 = Math.floor(Math.random() * Math.floor(2)),
    x4y2 = Math.floor(Math.random() * Math.floor(2)),
    x4y3 = Math.floor(Math.random() * Math.floor(4)),
    x4y4 = Math.floor(Math.random() * Math.floor(4)),
    x4y5 = Math.floor(Math.random() * Math.floor(2)),);


//----function ===========================================================
function convertMillisecondsToDigitalClock(ms) {
    hours = Math.floor(ms/3600000), // 1 Hour = 36000 Milliseconds
        minutes = Math.floor((ms % 3600000)/60000), // 1 Minutes = 60000 Milliseconds
        seconds = Math.floor(((ms % 360000) % 60000)/1000) // 1 Second = 1000 Milliseconds
    return {
        hours : hours,
        minutes : minutes,
        seconds : seconds,
        clock : hours + ":" + minutes + ":" + seconds
    };
}

function randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}

function checkBomb(message, check, pos){
    console.log(pos);


    if(check == 1)
    {
        console.log("Tu as déja creusé ici !")
        message.channel.send("Tu as déja creusé ici !");
        return ;
    }
    console.log("Tu as un totale de " + rubisGagne + "rubis");


    switch (pos)
    {
        case 0 :
            console.log("bombe");
            message.channel.send(BombeEmbed);
            bombe = 0;

            if(rubisGagne > 0)
            {
                let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
                const gagneEmbed = new Discord.MessageEmbed()
                gagneEmbed.setColor('#00FF00')
                gagneEmbed.setTitle('Fin de la partie ! Bravo ! tu as gagné un total de ')
                gagneEmbed.setThumbnail('https://cdn.discordapp.com/attachments/756619175417610321/776066408294383617/Rubis_Vert.png')
                gagneEmbed.setDescription(rubisGagne + " rubis !")
                gagneEmbed.setTimestamp()
                message.channel.send(gagneEmbed);
                UserJSON[message.author.id].bal = UserJSON[message.author.id].bal + (rubisGagne);
                Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

            }


            break;
        case 1 :

            console.log("rubis bleu");
            message.channel.send(bleuEmbed);
            rubisGagne = rubisGagne + 5;


            break;
        case 2 :
            console.log("rubis vert");
            message.channel.send(VertEmbed);
            rubisGagne = rubisGagne + 1;


            break;
        case 3:
            console.log("rubis rouge");
            message.channel.send(RougeEmbed);
            rubisGagne = rubisGagne + 20;


        default:
            console.log("erreur lors du choix du rubis");
    }

}

//========================================================================

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['divers', 'Divers'], // la première valeur correspond à la section 'group' de votre commande, la deuxième valeur sera utilisée pour l'affichage du nom du groupe, dans l'aide par exemple.
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))
;

client.once('ready', () => {
    console.log(`Je suis prêt mon maïtre!`);
});

client.on("message", async (message) => {

    if (message.content.startsWith(prefix))
    {
        var args = message.content.substr(prefix.length)
            .toLowerCase()
            .split(" ");

        if(args[0] == "create")
        {
            var ShopJSON = JSON.parse(Fs.readFileSync("./DB/shop.json"));

            ShopJSON = {
                Armurie:{
                    1:"Petit sac de bombe(5)",
                    2:"Petit Carquois(5)",
                    3:"Flèche en bois",
                    4:"Flèche Bombes",
                    5:"Flèche de feu",
                    6:"Flèche de glace",
                    7:"Lance pierre",
                    8:"Arc en bois",
                    9:"Arbalète en bois",
                    10:"Pavois en fer",
                    11:"Ecu sacré",
                    12:"Naginata Gravé",
                    13:"Sabre Gravé",
                },
                Potion:{
                    14:"Endurol",
                    15:"Potion d'Oxygène",
                    16:"Potion de Soin",
                    17:"Polypotion",
                    18:"Protectine",
                    19:"Potion Ignifuge",
                },
                BoutiqueVolante:{
                    20:"Grand Parachâle",
                    21:"Filet à Papillon",
                    22:"Boomerang",
                    23:"Médaille de Vie",
                    24:"Médaille Rubis",
                    25:"Médaille de Durabilité",
                    26:"Médaille Démoniaque",
                    27:"fée",
                },
                Coût:{
                    1:500,
                    2:200,
                    3:50,
                    4:50,
                    5:60,
                    6:60,
                    7:20,
                    8:30,
                    9:30,
                    10:600,
                    11:800,
                    12:500,
                    13:600,
                    14:40,
                    15:50,
                    16:70,
                    17:70,
                    18:80,
                    19:80,
                    20:90,
                    21:70,
                    22:10,
                    23:80,
                    24:80,
                    25:80,
                    26:70,
                    27:90,
                    28:0,

                },

            }
            Fs.writeFileSync("./DB/shop.json", JSON.stringify(ShopJSON));
        }
        if(args[0] == "help")
        {
            let HelpEmbed = new Discord.MessageEmbed();
            HelpEmbed.setTitle("Le grimoire des commandes !")
            HelpEmbed.setDescription("Listes de toutes les commandes !")
            HelpEmbed.setColor(1022040)
            HelpEmbed.setThumbnail('https://img1.freepng.fr/20180409/waq/kisspng-the-legend-of-zelda-ocarina-of-time-navi-link-fai-the-legend-of-zelda-5acb97e6185621.8119052515232921340997.jpg')
            HelpEmbed.addFields(
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: `Pour jouer a tous nos mini jeux :  :`,
                    value: `Vous inscrire en tapant la commande: ?register`,
                    inline: false,
                },
                {
                    name: `Vous souhaitez jouer a la roulette ?`,
                    value: `tapez la commande : *?help_r*  pour lire les règles !`,
                    inline: false,
                },
                {
                    name: `Vous souhaitez voir le magasin ?`,
                    value: `tapez la commande : *?magasin*`,
                    inline: false,
                },
                {
                    name: `Vous souhaitez voir votre inventaire ?`,
                    value: `tapez la commande : *?inventaire*`,
                    inline: false,
                },

                {
                    name:`Regarger votre total de rubis dans l'inventaire`,
                    value:`avec la commande : *?rubis*`,
                }

            )
            message.channel.send(HelpEmbed);
        }
        if(args[0] == "help_r")
        {
            let Help_rEmbed = new Discord.MessageEmbed();
            Help_rEmbed.setTitle("Le grimoire des commandes de la roulette!")
            Help_rEmbed.setDescription("Comment fonctionne la roulette ?")
            Help_rEmbed.setColor(1022040)
            Help_rEmbed.setThumbnail('https://img1.freepng.fr/20180409/waq/kisspng-the-legend-of-zelda-ocarina-of-time-navi-link-fai-the-legend-of-zelda-5acb97e6185621.8119052515232921340997.jpg')
            Help_rEmbed.addFields(
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: `1 ère étape :`,
                    value: `Vous inscrire en tapant la commande: ?register`,
                    inline: false,
                },
                {
                    name: `2 ème étape :`,
                    value: `Vous élancer dans les air et atterire sur la meilleur case possible ! en tapant la commande : ?roulette`,
                    inline: false,
                },

                {
                    name:`Regarger votre total de rubis dans l'inventaire`,
                    value:`avec la commande : ?rubis`,
                }

            )
            message.channel.send(Help_rEmbed);
        }
        if(args[0] == "acheter")
        {
            console.log("achat en cours");

            //==========Magasin affichage=================//

            var ShopJSON = JSON.parse(Fs.readFileSync("./DB/shop.json"));

            let ShopEmbedArmurie = new Discord.MessageEmbed();
            ShopEmbedArmurie.setColor('#32CD32');
            ShopEmbedArmurie.setTitle("Armuries");
            ShopEmbedArmurie.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/776829259817680926/acc83cfdc62688aa8933bb5af2.png');

            let ShopEmbedPotion = new Discord.MessageEmbed();
            ShopEmbedPotion.setColor('#32CD32');
            ShopEmbedPotion.setTitle("Potion");
            ShopEmbedPotion.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/776829595169194024/acc83cfdc62688aa8933bb5.png');

            let ShopEmbedObjet = new Discord.MessageEmbed();
            ShopEmbedObjet.setColor('#32CD32');
            ShopEmbedObjet.setTitle("Objet");
            ShopEmbedObjet.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/776829906478039040/h.png');

            for( var i = 1 ; i < 14 ; i++)
            {
                console.log("ID:" + i + ":" + ShopJSON.Armurie[i] + " : " + ShopJSON.Coût[i])
                ShopEmbedArmurie.addFields(
                    {
                        value: "ID:" + i  ,
                        name: ShopJSON.Armurie[i] + " : " + ShopJSON.Coût[i] + " Rubis",
                    }
                )
            }
            for( var j = 14 ; j < 20 ; j++)
            {
                console.log("ID:" + j +":" + ShopJSON.Potion[j] + " : " + ShopJSON.Coût[j])
                ShopEmbedPotion.addFields(
                    {
                        value:"ID:" + j ,
                        name:  ShopJSON.Potion[j] + " : " + ShopJSON.Coût[j]+ " Rubis",
                    }
                )
            }
            for( var k = 20 ; k < 28 ; k++)
            {
                console.log("ID:" + k +":" + ShopJSON.BoutiqueVolante[k] + " : " + ShopJSON.Coût[k])
                ShopEmbedObjet.addFields(
                    {
                        value:"ID:" + k,
                        name: ShopJSON.BoutiqueVolante[k] + " : " + ShopJSON.Coût[k]+ " Rubis",
                    }
                )
            }

            message.channel.send(ShopEmbedArmurie);
            message.channel.send(ShopEmbedPotion);
            message.channel.send(ShopEmbedObjet);
            //============================================//

            var username = message.author.username; // recuper le pseudo
            var id = message.author.id; // recupere l'id
            let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
            var rubis = UserJSON[message.author.id].bal; // recupère le nombre de rubis du joueur
            var potion = UserJSON[message.author.id].potions; // recupère les potions du joueur
            var armes1 = UserJSON[message.author.id].armes1; // recupère les armes du joueur
            var armes2 = UserJSON[message.author.id].armes2; // recupère les armes du joueur
            var objet = UserJSON[message.author.id].objet; // recupère les objets du joueur
            var artefact = UserJSON[message.author.id].artefacts; // recupère les artefacts du joueur
            var fleche = UserJSON[message.author.id].fleche; // recupère les flèches du joueur
            var nouveauRubis;
            var prefix2 = "!";



            client.on("message", async (message) => {

                if (message.content.startsWith(prefix2)) {
                    var id = message.content.substr(prefix2.length)
                        .toLowerCase()
                        .split(" ");
                    console.log(id);
                    var objetAcheter ;
                    var coutdeObjetAcheter;

                    if(id == "1" ||id == "2" ||id == "3" ||id == "4" ||id == "5" ||id == "6" ||id == "7" ||id == "8" ||id == "9" ||id == "10" ||id == "11" ||id == "12" ||id == "13" ||id == "13")
                    {
                        console.log("boucle 1 a 13");
                        for( var a = 1 ; a < 14 ; a++)
                        {

                            console.log("ID:" + a + ":" + ShopJSON.Coût[a]);
                            if(id == a)
                            {
                                console.log("trouvé !!")
                                objetAcheter = ShopJSON.Armurie[a];
                                coutdeObjetAcheter = ShopJSON.Coût[a];
                                console.log("fin de la recherche");
                                console.log(objetAcheter);
                                console.log(coutdeObjetAcheter);
                                console.log(rubis);
                                if(rubis < coutdeObjetAcheter)
                                {
                                    console.log("pas asser d'argent !");
                                    let PasDargentEmbed = new Discord.MessageEmbed();
                                    PasDargentEmbed.setTitle("Vous n'avez pas sufisement de rubis !");
                                    PasDargentEmbed.setDescription(`N'oubliez pas de jouer aux mini jeux et de faire des quêtes pour gagner de l'argent !`);
                                    PasDargentEmbed.setThumbnail("");
                                    PasDargentEmbed.setImage('https://cdn.discordapp.com/attachments/755752634782318626/777844736177733642/AS003453_15.png');
                                    message.channel.send(PasDargentEmbed);
                                    return;
                                }

                                console.log("ecriture dans le json");
                                UserJSON[message.author.id].bal = UserJSON[message.author.id].bal - (coutdeObjetAcheter);
                                if(UserJSON[message.author.id].bal < 0)
                                {
                                    UserJSON[message.author.id].bal = 0;
                                }
                                Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

                                console.log(UserJSON[message.author.id].bal);
                                let AchatEmbed = new Discord.MessageEmbed();
                                AchatEmbed.setTitle("Félicitation pour votre achat !");
                                AchatEmbed.setDescription(`${objetAcheter}`);
                                AchatEmbed.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/777843248794304562/c821010d0f4e135623ce49bbfcd84356a57314c2_00.png');
                                message.channel.send(AchatEmbed);
                                return;

                            }

                        }
                    }else if(id == "14" ||id == "15" ||id == "16" ||id == "17" ||id == "18" ||id == "19")
                    {
                        console.log("boucle 14 a 19");
                        for( var p = 14 ; p < 20 ; p ++)
                        {

                            console.log("ID:" + p + ":" + ShopJSON.Coût[p]);
                            if(id == p)
                            {
                                console.log("trouvé !!")
                                objetAcheter = ShopJSON.Potion[p];
                                coutdeObjetAcheter = ShopJSON.Coût[p];
                                console.log("fin de la recherche");
                                console.log(objetAcheter);
                                console.log(coutdeObjetAcheter);


                                if(rubis < coutdeObjetAcheter)
                                {
                                    console.log("pas asser d'argent !");
                                    return;
                                }


                                console.log("ecriture dans le json");
                                UserJSON[message.author.id].bal = UserJSON[message.author.id].bal - (coutdeObjetAcheter);
                                if(UserJSON[message.author.id].bal < 0)
                                {
                                    UserJSON[message.author.id].bal = 0;
                                }
                                Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
                                let AchatEmbed = new Discord.MessageEmbed();
                                AchatEmbed.setTitle("Félicitation pour votre achat !");
                                AchatEmbed.setDescription(`${objetAcheter}`);
                                AchatEmbed.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/777843248794304562/c821010d0f4e135623ce49bbfcd84356a57314c2_00.png');
                                message.channel.send(AchatEmbed);
                                return;
                            }


                        }

                    }else if(id == "20" ||id == "21" ||id == "22" ||id == "23" ||id == "24" ||id == "25" ||id == "26" ||id == "27")
                    {
                        console.log("boucle 20 a 27");
                        var n = 20;
                        for(n; n < 28 ;  n ++)
                        {

                            console.log("ID:" + n + ":" + ShopJSON.Coût[n]);
                            if(id == n)
                            {
                                console.log("trouvé !!")
                                objetAcheter = ShopJSON.BoutiqueVolante[n];
                                coutdeObjetAcheter = ShopJSON.Coût[n];
                                console.log("fin de la recherche");
                                console.log(objetAcheter);
                                console.log(coutdeObjetAcheter);
                                console.log("ecriture dans le json");



                                if(rubis < coutdeObjetAcheter)
                                {
                                    console.log("pas asser d'argent !");
                                    return;
                                }

                                console.log("ecriture dans le json");
                                UserJSON[message.author.id].bal = UserJSON[message.author.id].bal - (coutdeObjetAcheter);
                                if(UserJSON[message.author.id].bal < 0)
                                {
                                    UserJSON[message.author.id].bal = 0;
                                }
                                Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
                                let AchatEmbed = new Discord.MessageEmbed();
                                AchatEmbed.setTitle("Félicitation pour votre achat !");
                                AchatEmbed.setDescription(`${objetAcheter}`);
                                AchatEmbed.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/777843248794304562/c821010d0f4e135623ce49bbfcd84356a57314c2_00.png');
                                message.channel.send(AchatEmbed);

                                return;
                            }


                        }

                    }





                }

            })

        }
        if(args[0] == "magasin")
        {

            var ShopJSON = JSON.parse(Fs.readFileSync("./DB/shop.json"));

            let ShopEmbedArmurie = new Discord.MessageEmbed();
            ShopEmbedArmurie.setColor('#32CD32');
            ShopEmbedArmurie.setTitle("Armuries");
            ShopEmbedArmurie.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/776829259817680926/acc83cfdc62688aa8933bb5af2.png');

            let ShopEmbedPotion = new Discord.MessageEmbed();
            ShopEmbedPotion.setColor('#32CD32');
            ShopEmbedPotion.setTitle("Potion");
            ShopEmbedPotion.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/776829595169194024/acc83cfdc62688aa8933bb5.png');

            let ShopEmbedObjet = new Discord.MessageEmbed();
            ShopEmbedObjet.setColor('#32CD32');
            ShopEmbedObjet.setTitle("Objet");
            ShopEmbedObjet.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/776829906478039040/h.png');

            for( var i = 1 ; i < 14 ; i++)
            {
                console.log("ID:" + i + ":" + ShopJSON.Armurie[i] + " : " + ShopJSON.Coût[i])
                ShopEmbedArmurie.addFields(
                    {
                        value: "ID:" + i  ,
                        name: ShopJSON.Armurie[i] + " : " + ShopJSON.Coût[i] + " Rubis",
                    }
                )
            }
            for( var j = 14 ; j < 20 ; j++)
            {
                console.log("ID:" + j +":" + ShopJSON.Potion[j] + " : " + ShopJSON.Coût[j])
                ShopEmbedPotion.addFields(
                    {
                        value:"ID:" + j ,
                        name:  ShopJSON.Potion[j] + " : " + ShopJSON.Coût[j]+ " Rubis",
                    }
                )
            }
            for( var k = 20 ; k < 28 ; k++)
            {
                console.log("ID:" + k +":" + ShopJSON.BoutiqueVolante[k] + " : " + ShopJSON.Coût[k])
                ShopEmbedObjet.addFields(
                    {
                        value:"ID:" + k,
                        name: ShopJSON.BoutiqueVolante[k] + " : " + ShopJSON.Coût[k]+ " Rubis",
                    }
                )
            }

            message.channel.send(ShopEmbedArmurie);
            message.channel.send(ShopEmbedPotion);
            message.channel.send(ShopEmbedObjet);



        }
        if(args[0] == "inventaire")
        {
            var username = message.author.username;
            var id = message.author.id;
            let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
            var rubis = UserJSON[message.author.id].bal;
            var potion = UserJSON[message.author.id].potions;
            var armes1 = UserJSON[message.author.id].armes1;
            var armes2 = UserJSON[message.author.id].armes2;
            var objet = UserJSON[message.author.id].objet;
            var artefact = UserJSON[message.author.id].artefacts;
            var fleche = UserJSON[message.author.id].fleche;

            let inventaireEmbed= new Discord.MessageEmbed();
            inventaireEmbed.setTitle("Inventaire de :" );
            inventaireEmbed.setDescription(username);
            inventaireEmbed.setColor('#32CD32');
            inventaireEmbed.setThumbnail('https://cdn.discordapp.com/attachments/755752634782318626/776777764161454110/The_Legend_of_Zelda_Skyward_Sword_Logo.png')
            inventaireEmbed.addFields(
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name:'Armes 1 :crossed_swords: ',
                    value:`${armes1}`,
                    inline : false,
                },
                {
                    name:'Armes 2 :crossed_swords: ',
                    value:`${armes2}`,
                    inline : false,
                },
                {
                    name:'Flèche',
                    value:`${fleche}`,
                    inline: false,
                },
                {
                    name:'Objet',
                    value:`${objet}`,
                    inline : false,
                },
                {
                    name:'Potion :honey_pot: ',
                    value:`${potion}`,
                    inline : false,
                },
                {
                    name:'Artefact',
                    value:`${artefact}`,
                    inline : false,
                },


            )

            inventaireEmbed.setTimestamp()

            message.channel.send(inventaireEmbed);
        }
        if(args[0] == "rubis")
        {
            var username = message.author.username;
            var id = message.author.id;
            let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
            var rubis = UserJSON[message.author.id].bal;

            console.log("vous avez " + rubis);
            let RubisEmbed = new Discord.MessageEmbed();
            RubisEmbed.setColor('#32CD32');
            RubisEmbed.setTitle(`Inventaire`);
            RubisEmbed.setDescription(`Votre cagnotte ` + username);
            RubisEmbed.setThumbnail('https://static.wikia.nocookie.net/zelda/images/7/78/Bourse_Colossale_TPHD.png/revision/latest?cb=20160215220039&path-prefix=fr')
            RubisEmbed.addFields(
                {
                    name:`Vous avez en votre possession :`,
                    value:`${rubis} ! :moneybag: ` ,
                }
            )
            RubisEmbed.setTimestamp()

            message.channel.send(RubisEmbed);
        }

        if (args[0] == "register") {
            var UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

            UserJSON[message.author.id] = {
                bal: 0,
                lastclaim: 0,
                potions: "vide",
                armes1: "vide",
                armes2: "vide",
                fleche: "vide",
                objet:"vide",
                artefacts:"vide",
            }
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

            let SuccessEmbed = new Discord.MessageEmbed();
            SuccessEmbed.setTitle("Bienvenue !");
            SuccessEmbed.setDescription("Tu as bien été inscrit pour le jeux de la roulette  ! amuse toi bien ;)");
            message.channel.send(SuccessEmbed);
            return;

        }
        if (args[0] == "fouille") {

            console.log("Dans fouille");
            // 0 = bombes ; 1 = Rubis rouge ; 4 = Rubis bleu; 6 = Rubis vert
            rubisGagne = 0 ;
            creuse_x1y1 = 0;
            creuse_x1y2= 0;
            creuse_x1y3= 0;
            creuse_x1y4= 0;
            creuse_x1y5= 0;
            creuse_x2y1= 0;
            creuse_x2y2= 0;
            creuse_x2y3= 0;
            creuse_x2y4= 0;
            creuse_x2y5= 0;
            creuse_x3y1= 0;
            creuse_x3y2= 0;
            creuse_x3y3= 0;
            creuse_x3y4= 0;
            creuse_x3y5= 0;
            creuse_x4y1= 0;
            creuse_x4y2= 0;
            creuse_x4y3= 0;
            creuse_x4y4= 0;
            creuse_x4y5= 0;
            bombe = 1 ;
            Rubis_gagne = 0;
            lastRubis = 0;
            tab =  Array(
                x1y1 = Math.floor(Math.random() * Math.floor(3)),
                x1y2 = Math.floor(Math.random() * Math.floor(3)),
                x1y3 = Math.floor(Math.random() * Math.floor(3)),
                x1y4 = Math.floor(Math.random() * Math.floor(4)),
                x1y5 = Math.floor(Math.random() * Math.floor(2)),
                x2y1 = Math.floor(Math.random() * Math.floor(3)),
                x2y2 = Math.floor(Math.random() * Math.floor(4)),
                x2y3 = Math.floor(Math.random() * Math.floor(4)),
                x2y4 = Math.floor(Math.random() * Math.floor(3)),
                x2y5 = Math.floor(Math.random() * Math.floor(2)),
                x3y1 = Math.floor(Math.random() * Math.floor(2)),
                x3y2 = Math.floor(Math.random() * Math.floor(3)),
                x3y3 = Math.floor(Math.random() * Math.floor(3)),
                x3y4 = Math.floor(Math.random() * Math.floor(3)),
                x3y5 = Math.floor(Math.random() * Math.floor(4)),
                x4y1 = Math.floor(Math.random() * Math.floor(3)),
                x4y2 = Math.floor(Math.random() * Math.floor(3)),
                x4y3 = Math.floor(Math.random() * Math.floor(4)),
                x4y4 = Math.floor(Math.random() * Math.floor(4)),
                x4y5 = Math.floor(Math.random() * Math.floor(2)),);

            const WelcomEmbed = new Discord.MessageEmbed()
            WelcomEmbed.setColor('#00FF00')
            WelcomEmbed.setTitle('Bienvenue dans le jeux fouille rubis !')
            WelcomEmbed.setDescription(`Dans ce jeux il s'agit de trouver tous les rubis ! mais attention ! si tu tombe sur une bombe, c'est perdu !`)
            WelcomEmbed.addFields(
                {
                    name: "commandes",
                    value : `Pour creuser, tu dois rentrer les coordonées du trou : ***!x1y1*** par exxemple ***pour le premier trou*** de la premiere ligne ou ***!x1y2 pour le deuxieme trou de la première ligne***`,
                },
            )

            WelcomEmbed.setImage("https://cdn.discordapp.com/attachments/695197736210792508/776462857130213386/Fouille_Rubis.png")
            WelcomEmbed.setTimestamp()
            message.channel.send(WelcomEmbed);

            for( var i = 0; i< 20 ; i++)
            {
                console.log(tab[i]);
                if(i == 4 ||i == 9 ||i == 14)
                {
                    console.log("----------");
                }
            }

        }
        if (args[0] == "roulette") {
            console.log("Lancement du programme");
            let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));


            if(typeof UserJSON[message.author.id].lastclaim === 'undefined'|| UserJSON[message.author.id].lastclaim === null)
            {

                let Warning = new Discord.MessageEmbed()
                Warning.setTitle(`**Tu n'est pas inscrit !!**`);
                Warning.setColor('#ff0000');
                Warning.setThumbnail(`https://img.icons8.com/officel/2x/triforce.png`);
                Warning.setDescription(`Tu dois obligatoirement t'inscrire pour pour jouer ! **Pense a lire le règlement**`);
                message.channel.send(Warning);
                return;
            }
            if (Math.floor(new Date().getTime() - UserJSON[message.author.id].lastclaim) / (1000 * 60 * 60 * 12) < 1) {
                let WarningEmbed = new Discord.MessageEmbed()
                WarningEmbed.setTitle(`**Pas de triche !**`);

                console.log(43200000 - (new Date().getTime() - UserJSON[message.author.id].lastclaim) );
                var tempRestant = uneHeure - (new Date().getTime() - UserJSON[message.author.id].lastclaim);
                console.log(convertMillisecondsToDigitalClock(tempRestant));
                var clock = (convertMillisecondsToDigitalClock(tempRestant).clock);
                WarningEmbed.setDescription('Tu as déja récupéré ta récompense aujourd hui !' );
                WarningEmbed.addFields(
                    {
                        name:`Revien dans :`,
                        value:`${clock} :clock: `,
                        inline: false
                    }
                );
                message.channel.send(WarningEmbed);
                return;
            }
            console.log("la roulette");
            //------------ la roulette
            const {Message, User, ClientUser, Emoji} = require('discord.js');
            const {Command} = require('discord.js-commando');

            const rubis = [1, 1, 1, 1, 1, 5, 5, 5, 0, 0, 0, 20, 20, -10, -10, 50];
            const bonus = [1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 10];
//const ayy = .cache.get("305818615712579584");

            var rubis_win;
            var bonus_win;
            var resultatFinal;
            var rubis_couleur = '';
            var url_rubis = '';



            rubis_win = rubis[Math.floor(Math.random() * rubis.length)];
            bonus_win = bonus[Math.floor(Math.random() * bonus.length)];
            resultatFinal = rubis_win * bonus_win;
            console.log(rubis_win);
            console.log(bonus_win);
            console.log('rubis_win :' + rubis_win)

            switch (rubis_win) // converti la valeur du rubis en couleur
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
                    rubis_couleur = 'Vide';

                    break;
                case 20:
                    console.log('rouge');
                    rubis_couleur = 'Rubis Rouge';

                    break;
                case -10:
                    console.log('roupir');
                    rubis_couleur = 'Roupir';

                    break;
                case 50:
                    console.log('or');
                    rubis_couleur = 'Rubis or';

                    break;
                default:
                    console.log('erreur sur la conversion des couleur rubis');
            }

            switch (rubis_win) // divise les rubis en 3 catégorie pour afficher un msg different suivant le gain
            {

                case 1:
                    console.log("1, 5, 20 rubis");
                    let Rubis_1 = new Discord.MessageEmbed();
                    Rubis_1.setColor(1022040)
                    Rubis_1.setTitle(` Bienvenu sur l'île de la roulette ! :ferris_wheel:  `)
                    Rubis_1.setDescription(`*Prêt ? C'est parti !*`)
                    Rubis_1.setThumbnail('https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg')
                    Rubis_1.addFields(
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
                            value: `${resultatFinal}  rubis !`,
                            inline: false,
                        },

                        {
                            name: `Tes rubis te seront versés à la fin de la journée`,
                            value: 'Reviens tenter ta chance demain !',
                            inline: false,
                        },
                    )
                    Rubis_1.setTimestamp()
                    Rubis_1.setFooter(
                        {text: 'Par Reyden'},
                    )
                    Rubis_1.setImage('https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png')
                    message.channel.send(Rubis_1);
                    break;
                case 5:
                    console.log("1, 5, 20 rubis");
                    let Rubis_5 = new Discord.MessageEmbed();
                    Rubis_5.setColor(1022040)
                    Rubis_5.setTitle(` Bienvenu sur l'île de la roulette ! :ferris_wheel:  `)
                    Rubis_5.setDescription(`*Prêt ? C'est parti !*`)
                    Rubis_5.setThumbnail('https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg')
                    Rubis_5.addFields(
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
                            value: `${resultatFinal}  rubis !`,
                            inline: false,
                        },

                        {
                            name: `Tes rubis te seront versés à la fin de la journée`,
                            value: 'Reviens tenter ta chance demain !',
                            inline: false,
                        },
                    )
                    Rubis_5.setTimestamp()
                    Rubis_5.setFooter(
                        {text: 'Par Reyden'},
                    )
                    Rubis_5.setImage('https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png')
                    message.channel.send(Rubis_5);

                    break;
                case 20:
                    console.log("1, 5, 20 rubis");
                    let Rubis_20 = new Discord.MessageEmbed();
                    Rubis_20.setColor(1022040)
                    Rubis_20.setTitle(` Bienvenu sur l'île de la roulette ! :ferris_wheel:  `)
                    Rubis_20.setDescription(`*Prêt ? C'est parti !*`)
                    Rubis_20.setThumbnail('https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg')
                    Rubis_20.addFields(
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
                            value: `${resultatFinal}  rubis !`,
                            inline: false,
                        },

                        {
                            name: `Tes rubis te seront versés à la fin de la journée`,
                            value: 'Reviens tenter ta chance demain !',
                            inline: false,
                        },
                    )
                    Rubis_20.setTimestamp()
                    Rubis_20.setFooter(
                        {text: 'Par Reyden'},
                    )
                    Rubis_20.setImage('https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png')
                    message.channel.send(Rubis_20);

                    break;
                case 0:
                    console.log('0, -10');
                    let Rubis_0 = new Discord.MessageEmbed();
                    Rubis_0.setColor(1022040)
                    Rubis_0.setTitle(` Bienvenu sur l'île de la roulette ! :ferris_wheel:  `)
                    Rubis_0.setDescription(`*Prêt ? C'est parti !*`)
                    Rubis_0.setThumbnail('https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg')
                    Rubis_0.addFields(
                        {
                            name: `Oh dommage, tu es tomber sur une case `,
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
                            value: `${resultatFinal}  rubis !`,
                            inline: false,
                        },

                        {
                            name: `Ne baisse pas les bras,`,
                            value: 'Reviens tenter ta chance demain !',
                            inline: false,
                        },
                    )
                    Rubis_0.setTimestamp()
                    Rubis_0.setFooter(
                        {text: 'Par Reyden'},
                    )
                    Rubis_0.setImage('https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png')
                    message.channel.send(Rubis_0);

                    break;
                case -10:
                    console.log('0, -10');
                    let Rubis_10 = new Discord.MessageEmbed();
                    Rubis_10.setColor(1022040)
                    Rubis_10.setTitle(` Bienvenu sur l'île de la roulette ! :ferris_wheel:  `)
                    Rubis_10.setDescription(`*Prêt ? C'est parti !*`)
                    Rubis_10.setThumbnail('https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg')
                    Rubis_10.addFields(
                        {
                            name: `Oh dommage, tu es tomber sur une case `,
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
                            value: `${resultatFinal}  rubis !`,
                            inline: false,
                        },

                        {
                            name: `Ne baisse pas les bras,`,
                            value: 'Reviens tenter ta chance demain !',
                            inline: false,
                        },
                    )
                    Rubis_10.setTimestamp()
                    Rubis_10.setFooter(
                        {text: 'Par Reyden'},
                    )
                    Rubis_10.setImage('https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png')
                    message.channel.send(Rubis_10);

                    break;
                case 50:
                    console.log("50");
                    let tRubis_10 = new Discord.MessageEmbed();
                    Rubis_50.setColor(1022040)
                    Rubis_50.setTitle(` Bienvenu sur l'île de la roulette ! :ferris_wheel:  `)
                    Rubis_50.setDescription(`*Prêt ? C'est parti !*`)
                    Rubis_50.setThumbnail('https://www.puissance-zelda.com/img/encyclopedie/Ile_Roulette/fiche.jpg')
                    Rubis_50.addFields(
                        {
                            name: `Bingo ! :tada: tu es tombé sur une case `,
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
                            value: `${resultatFinal}  rubis !`,
                            inline: false,
                        },

                        {
                            name: `Tes rubis te seront versés à la fin de la journée`,
                            value: 'Reviens tenter ta chance demain !',
                            inline: false,
                        },
                    )
                    Rubis_50.setTimestamp()
                    Rubis_50.setFooter(
                        {text: 'Par Reyden'},
                    )
                    Rubis_50.setImage('https://cdn.discordapp.com/attachments/718141505264681031/776435922764955658/Dodon.png')
                    message.channel.send(Rubis_50);

                    break
                default:
                    console.log(`erreur sur l'affichage du message en fonction des catégorie de gain`);

            }

            //------------

            console.log("ecriture dans le json");
            UserJSON[message.author.id].bal = UserJSON[message.author.id].bal + (resultatFinal);
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));


        }
    }

    if (message.content.startsWith(prefixCommand)) {
        var args = message.content.substr(prefixCommand.length)

            .toLowerCase()
            .split(" ");


        if (args[0] == "x1y1") {
            if(bombe == 1){
                checkBomb(message, creuse_x1y1, x1y1, rubisGagne);
                console.log("creuse : " +creuse_x1y1);
                creuse_x1y1 = 1;
            }
        }
        if (args[0] == "x1y2") {
            if(bombe == 1){
                checkBomb(message, creuse_x1y2, x1y2, rubisGagne);
                console.log("creuse : " +creuse_x1y2);
                creuse_x1y2 = 1;
            }
        }
        if (args[0] == "x1y3") {
            if(bombe == 1){
                checkBomb(message, creuse_x1y3, x1y3, rubisGagne);
                console.log("creuse : " +creuse_x1y3);
                creuse_x1y3 = 1;
            }
        }
        if (args[0] == "x1y4") {
            if(bombe == 1){
                checkBomb(message, creuse_x1y4, x1y4, rubisGagne);
                console.log("creuse : " +creuse_x1y4);
                creuse_x1y4 = 1;
            }
        }
        if (args[0] == "x1y5") {
            if(bombe == 1){
                checkBomb(message, creuse_x1y5, x1y5, rubisGagne);
                creuse_x1y5 = 1;
            }
        }
        if (args[0] == "x2y1") {
            if(bombe == 1){
                checkBomb(message, creuse_x2y1, x2y1, rubisGagne);
                creuse_x2y1 = 1;
            }
        }
        if (args[0] == "x2y2") {
            if(bombe == 1){
                checkBomb(message, creuse_x2y2, x2y2, rubisGagne);
                creuse_x2y2 = 1;
            }
        }
        if (args[0] == "x2y3") {
            if(bombe == 1){
                checkBomb(message, creuse_x2y3, x2y3, rubisGagne);
                creuse_x2y3 = 1;
            }
        }
        if (args[0] == "x2y4") {
            if(bombe == 1){
                checkBomb(message, creuse_x2y4, x2y4, rubisGagne);
                creuse_x2y4 = 1;
            }
        }
        if (args[0] == "x2y5") {
            if(bombe == 1){
                checkBomb(message, creuse_x2y5, x2y5, rubisGagne);
                creuse_x2y5 = 1;
            }
        }
        if (args[0] == "x3y1") {
            if(bombe == 1){
                checkBomb(message, creuse_x3y1, x3y1, rubisGagne);
                creuse_x3y1 = 1;
            }
        }
        if (args[0] == "x3y2") {
            if(bombe == 1){
                checkBomb(message, creuse_x3y2, x3y2, rubisGagne);
                creuse_x3y2 = 1;
            }
        }
        if (args[0] == "x3y3") {
            if(bombe == 1){
                checkBomb(message, creuse_x3y3, x3y3, rubisGagne);
                creuse_x3y3 = 1;
            }
        }
        if (args[0] == "x3y4") {
            if(bombe == 1){
                checkBomb(message, creuse_x3y4, x3y4, rubisGagne);
                creuse_x3y4 = 1;
            }
        }
        if (args[0] == "x3y5") {
            if(bombe == 1){
                checkBomb(message, creuse_x3y5, x3y5, rubisGagne);
                creuse_x3y5 = 1;
            }
        }
        if (args[0] == "x4y1") {
            if(bombe == 1){
                checkBomb(message, creuse_x4y1, x4y1 , rubisGagne);
                creuse_x4y1 = 1;
            }
        }
        if (args[0] == "x4y2") {
            if(bombe == 1){
                checkBomb(message, creuse_x4y2, x4y2, rubisGagne);
                creuse_x4y2 = 1;
            }
        }
        if (args[0] == "x4y3") {
            if(bombe == 1){
                checkBomb(message, creuse_x4y3, x4y3, rubisGagne);
                creuse_x4y3 = 1;
            }
        }
        if (args[0] == "x4y4") {
            if(bombe == 1){
                checkBomb(message, creuse_x4y4, x4y4, rubisGagne);
                creuse_x4y4 = 1;
            }
        }
        if (args[0] == "x4y5") {
            if(bombe == 1){
                checkBomb(message, creuse_x4y5, x4y5, rubisGagne);
                creuse_x4y5 = 1;
            }
        }
    }

})


client.on('error', console.error); // Afficher les erreurs

client.login(process.env.BOT_TOKEN);
