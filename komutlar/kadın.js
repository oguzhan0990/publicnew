 const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

  const emoji = client.emojis.find(emoji => emoji.name === "bildirim")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const emoji1 = client.emojis.find(emoji => emoji.name === "kitap")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const emoji2 = client.emojis.find(emoji => emoji.name === "mor")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

 if (!message.member.roles.has('746293003877875752') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilginize` , `${emoji1}  Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
let rochelle1 = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])
  if (!rochelle1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1}   Bir kullanıcı etiketlemeli ve ya id girmelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rochelle = message.guild.member(rochelle1)
let isim = args[1]
if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1} Geçerli bir İsim Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 let yas = args[2]
if(!yas) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1} Geçerli bir Yaş Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 
rochelle.setNickname(`SΞD ${isim} ${yas}`)
  rochelle.addRole('745539097220612101'); // kadın 1
  rochelle.addRole('745539097220612103'); // kadın 1

  rochelle.removeRole('745539097220612105') // kayıtsız 1
  rochelle.removeRole('752586382437908511') // cezalı 1 717777340708552807 717743735705960448
  

    message.react("698935589130731641");
db.add(`kadın.${message.author.id}`, 1);
    const kanal = message.guild.channels.find(c => c.id == "745539098281902142") 
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`  ${rochelle.user}  **Aramıza Hoş Geldin , Seninle Beraber \`${rochelle.guild.memberCount}\` Üyeye Ulaştık**`)
    .setColor("#B0E0E6")
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
        kanal.send(embed1).then(m => m.delete(10000));
  let embed = new Discord.RichEmbed() 
  .setColor("#E0FFFF")
  .setTitle('SΞD Team Farkıyla', message.author.avatarURL)
  .setDescription(`** ${rochelle.user} Adlı Üye <@&745539097220612101> <@&745539097220612103>  Rolüyle Kayıt Oldu.** `)
.setFooter('Kalite Tesadüf Değildir')
  .setTimestamp()
  return message.channel.send(embed).then(m => m.delete(6000));

 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kız","k", "gacı"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kadın isim yaş"
};
