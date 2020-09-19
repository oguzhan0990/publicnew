const Rochelle = require('discord.js');
const db = require("quick.db");
const client = new Rochelle.Client();
String.prototype.replaceA = function (find, replace) {
  return this.replace(new RegExp(find, 'g'), replace);
}

const donustur = function(sayi) {
  let gorunum = sayi.toString().replace('0', '0')
    .replaceA('1', '<a:1sa:751051703620730911>')
    .replaceA('2', '<a:2sa:751051730682118144>')
    .replaceA('3', '3')
    .replaceA('4', '4')
    .replaceA('5', '5')
    .replaceA('6', '6')
    .replaceA('7', '7')
    .replaceA('8', '8')
    .replaceA('9', '9')
  
  gorunum = gorunum
    .replaceA("0a", '0')
    .replaceA("1a", "1")
    .replaceA("2a", "2")
    .replaceA("3a", "3")
    .replaceA("4a", '4')
    .replaceA("5a", '5')
    .replaceA("6a", '6')
    .replaceA("7a", '7')
    .replaceA("8a", '8')
    .replaceA("9a", '9')
  
  return gorunum
}

exports.run = async (client, message, args, presence) => {
const emoji = client.emojis.find(emoji => emoji.name === "hac")

if(!message.member.roles.has('723088302453817406') && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu komutu kullanmağa yetkin yok`)
      let rochelle = message.mentions.users.first();

  if (!rochelle) rochelle = message.author;

 
// Tarih hesaplama son.
  const member = message.guild.member(rochelle);
  let kız = await db.fetch(`kadın.${rochelle.id}`);
  let erkek = await db.fetch(`erkek.${rochelle.id}`);
  let isimdeğiştirme = await db.fetch(`isim.${rochelle.id}`);
  let jail = await db.fetch(`devtr.jail_${rochelle.id}`);
  let mute = await db.fetch(`muted.${rochelle.id}`);
  let smute = await db.fetch(`smuted.${rochelle.id}`);


  let k_uses = ""
  let e_uses = ""
  let n_uses = "" 
  let j_uses = "" 
  let m_uses = "" 
let sm_uses = "" 

  if (!kız) {
    if (kız  === null || kız === undefined || kız === NaN)
    k_uses = 0
  } else {
  k_uses = kız
  }

  if (!erkek) {
    if (erkek === null || erkek === undefined || erkek === NaN)
    e_uses = 0
  } else {
    e_uses = erkek
  }
  
 if (!isimdeğiştirme){
if (isimdeğiştirme === null || isimdeğiştirme === undefined || isimdeğiştirme === NaN)
    n_uses = 0
  } else {
    n_uses = isimdeğiştirme
  }
 if (!jail){
if (jail === null || jail === undefined || jail === NaN)
    j_uses = 0
  } else {
    j_uses = jail
  }
  if (!mute) {
    if (mute  === null || mute === undefined || mute === NaN)
    m_uses = 0
  } else {
  m_uses = mute
  }

 if (!smute) {
    if (smute  === null || smute === undefined || smute === NaN)
    sm_uses = 0
  } else {
  sm_uses = mute
  }
let total = e_uses + k_uses
  
const rochelle1 = new Rochelle.RichEmbed()

  .setColor("0a0039")
.setThumbnail(message.author.avatarURL)
.setDescription(`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Toplam **${donustur(e_uses)}** Adet Kullanıcıyı Erkek Kayıt Etmiş. <a:sd:747412284938125375>
Toplam **${donustur(k_uses)}** Adet Kullanıcıyı Kadın Kayıt Etmiş. <a:sd:747412284938125375>
Toplam **${donustur(n_uses)}** Adet Kullanıcının İsmini Değişmiş. <a:sd:747412284938125375>
Toplam **${donustur(j_uses)}** Adet Kullanıcıyı Jaile Atmış. <a:sd:747412284938125375>
Toplam **${donustur(m_uses)}** Adet Kullanıcıya Chat Mute Atmış. <a:sd:747412284938125375>
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Toplam ${donustur(e_uses + k_uses)} Kullanıcıyı Kayıt Etmiş <a:sd:747412284938125375>
`)
//setDescription(`**Teyit Bilgileri**\n\n \`Erkek Teyit\` : **${e_uses}**\n\n\`Kadın Teyit\` : **${k_uses}**\n\n\`ToplamTeyit\` : **${e_uses + k_uses}**\n\n**İsim Değişme**\n\n\`Toplam İsim Değişme\` : **${n_uses}** `)
.setFooter('SΞD')
      console.log("Komut " + message.author.username + " tarafından kullanıldı.")
      message.channel.sendEmbed(rochelle1).then(m => m.delete(5000))
  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sicil"], 
    permLevel: 0,
};

exports.help = {
    name: 'sicilbilgi',
    usage: 'kullanımı',
    description: 'açıklama',
};