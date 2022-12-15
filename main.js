const discord = require("discord.js")
const fs = require('fs-extra')

const { Client, Intents, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [
GatewayIntentBits.AutoModerationConfiguration,
GatewayIntentBits.AutoModerationExecution,
GatewayIntentBits.DirectMessageReactions,
GatewayIntentBits.DirectMessageTyping,
GatewayIntentBits.DirectMessages,
GatewayIntentBits.GuildBans,
GatewayIntentBits.GuildEmojisAndStickers,
GatewayIntentBits.GuildIntegrations,
GatewayIntentBits.GuildInvites,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildMessageReactions,
GatewayIntentBits.GuildMessageTyping,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.GuildPresences,
GatewayIntentBits.GuildScheduledEvents,
GatewayIntentBits.GuildVoiceStates,
GatewayIntentBits.GuildWebhooks,
GatewayIntentBits.Guilds,
GatewayIntentBits.MessageContent
] });


const config = require("./config.json")

client.login(config.token);


var moment = require('moment-timezone');


const { EmbedBuilder } = require('discord.js');


client.on("ready", async() => {
  console.log(`${client.user.tag} hazır!`)
 // const mesaj = client.channels.cache.get("1022872529112662042")

  client.user.setPresence({ activities: [{ name: 'Swanex ❤️' }], status: 'idle' });
   //let pelin = moment().tz("Europe/Istanbul").locale("tr").format('LTS')  // 17:11:10
  // let now = moment().tz("Europe/Istanbul").locale("tr").format('LLL') // 15 Aralık 2022 17:10
  //let ben = moment().tz("Europe/Istanbul").locale("tr").format('DD')
  //let sana = moment().tz("Europe/Istanbul").locale("tr").format("HH:mm:ss")
  //console.log(ben);
  //console.log(pelin)
  //console.log(sana)
  setInterval(async() => {
    //let pelin = moment().tz("Europe/Istanbul").locale("tr").format(`DD-HH-mm-ss`)
    //console.log(pelin)
    let x = moment().tz("Europe/Istanbul").locale("tr").format(`DD`) // gün
    let y = moment().tz("Europe/Istanbul").locale("tr").format(`HH`) // saat
    let a = moment().tz("Europe/Istanbul").locale("tr").format(`mm`) // dakika
    let b = moment().tz("Europe/Istanbul").locale("tr").format(`ss`) // saniye
    const mesaj = client.channels.cache.get("941753761410470009") // mesajın bulunduğu kanal id
    //mesaj.send({ content:`gün ${x} saat ${y} dakika ${a} saniye ${b}`})  ${}
    let sen = await mesaj.messages.fetch('1053005684859490314') // botun attığı sadece embedden oluşan mesaj

    //console.log(x)
    let embed = new EmbedBuilder()
    .setColor("Black")
    .setTitle("Yeni Yıla Kalan")
    //embed.setDescription(`${x} gün ${y} saat ${a} dakika ${b} saniye`)
    //sen.edit({embeds: [embed]})
    if(31 - x == 0) {

    } else if(x == "01" && y == "00" && a == "00"){
      embed.setDescription("Yeni Yıla Girdik Oley")
      sen.edit({embeds : [embed]})
    } else if(31 - x <= 17) {
      let gun1 = 30 - x; // gün
      let saat1 = y - 23
      //let saat2 = Math.abs(saat1)
     
      //console.log(saat2)
      let dakika1 = a - 59
      //let dakika2 = Math.abs(dakika1)
      let saniye1 = b - 59
      //let saniye2 = Math.abs(saniye1)
      // ${}
      let saat2 = saat1 < 0 ? -saat1 : saat1;
      let dakika2 = dakika1 < 0 ? -dakika1 : dakika1;
      let saniye2 = saniye1 < 0 ? -saniye1 : saniye1;


      embed.setDescription(`
Yeni Yıla ${gun1} gün, ${saat2} saat, ${dakika2} dakika ve ${saniye2} saniye kaldı.
      `)
      sen.edit({embeds: [embed]})
    
    }

    //sen.edit({embeds: [embed]})
  }, 1000);

});
//const { EmbedBuilder } = require('discord.js');
//let sayiiki = "-6"
//let sener = Math.abs(sayiiki);

//console.log(sener)


const prefix = config.prefix
client.on("messageCreate", async message => {
  if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(prefix)) return;
  //if (message.author.id !== ayarlar.botOwner && message.author.id !== message.guild.owner.id) return;
  let args = message.content.split(' ').slice(1);
  let command = message.content.split(' ')[0].slice(prefix.length);
  if(command === "safe"){ // komutlar bu şekilde eklenecektir. if(command === "komut")
      // kullanımı !safe id şeklindedir
  // let abici = message.guild.members.cache.get(args[0])
    message.channel.send(`merhaba <@${args[0]}>`)
    //message.channel.send({ content: `${config.mesajsil}`})
    // args[0]
  }
  if(command === "eval"){
  //if (message.author.id !== owner) return message.channel.send({ content: `Sahibim sen değilsin <@${message.author.id}>, benim sahibim <@${owner}>`});;
  if (!args[0]) return message.channel.send({ content: `Kod belirtilmedi`});
  let code = args.join(' ');
  function clean(text) {
  if (typeof text !== 'string') text = require('util').inspect(text, { depth: 0 })
  text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
  return text;
};
let res;
try {
  res = eval(clean(code));
  if (typeof res !== 'string') res = require('node:util').inspect(res);
}  catch(err) { 
  console.error(err.stack);
  res = err.message;
   } 
   message.channel.send(res, {code: "js", split: true});
  } // buraya if eklenip komut eklenebilir
  if(command === "mee"){
      message.channel.send({content: "merhaba dünya"})
  }
return;
});

/*


!eval message.channel.messages.fetch('863478662841368586').then(message => message.edit({content: "abi oyun seç mk"}))
    if (ben == '08:00:00') {
      mesaj.send({ content: `Günaydınnn Arkadaşlarr` })
    } else if(ben == '23:59:59'){
mesaj.send({ content: `Son bir saniye` })
}

${}


setInterval(() => {
    let ben = moment().tz("Europe/Istanbul").locale("tr").format('LTS')
    //console.log(ben)
    if (ben == '08:00:00') {
      mesaj.send({ content: `Günaydınnn Arkadaşlarr` })
    }
    else if (ben == '13:00:00') {
      mesaj.send({ content: `İyi Öğlenler, Tünaydınnn arkadaşlarr` })
    }
    else if (ben == '20:00:00') {
      mesaj.send({ content: `İyi Akşamlar Arkadaşlarr` })
    }
    else if (ben == '23:00:00') {
      mesaj.send({ content: `İyi geceler Arkadaşlarr` })
    }
    else if (ben == '01:00:00') {
      mesaj.send({ content: `Hadi Uyumayan arkadaşlar uyuyun gözlerinize yazık` })
    }
    else if (ben == '03:00:00') {
      mesaj.send({ content: `Gecenin 3'ü oldu arkadaşlarr hadi yatın` })
    }
    else if (ben == '15:30:00') {
      mesaj.send({ content: `Bazen kendimi çok yalnız hissediyorum, kimse benimle konuşmak istemiyor gibi` })
    }
    else if (ben == '17:30:00') {
      mesaj.send({ content: `Akşam yemeği için annenize yardım edin isterseniz arkadaşlar` })
    }
    //console.log()       // console.log('işlem başarılı')
  }, 1000)




*/

