
   const Discord = require('discord.js');

String.prototype.replaceA = function (find, replace) {
  return this.replace(new RegExp(find, 'g'), replace);
}

const donustur = function(sayi) {
  let gorunum = sayi.toString().replace('0a', '0a')
    .replaceA("0a", '<a:0sa:751055526678233168>')
    .replaceA("1a", "<a:1sa:751051703620730911>")
    .replaceA("2a", "<a:2sa:751051730682118144>")
    .replaceA("3a", "<a:3sa:751051781533859951>")
    .replaceA("4a", '<a:4sa:751051817248620624>')
    .replaceA("5a", '<a:5sa:751051840833060894>')
    .replaceA("6a", '<a:6sa:751051867521286226>')
    .replaceA("7a", '<a:7sa:751051903277989908>')
    .replaceA("8a", '<a:8sa:751051947745738875>')
    .replaceA("9a", '<a:9sa:751051967840911421>')
  
  gorunum = gorunum
    .replaceA("0a", '<a:0sa:751055526678233168>')
    .replaceA("1a", "<a:1sa:751051703620730911>")
    .replaceA("2a", "<a:2sa:751051730682118144>")
    .replaceA("3a", "<a:3sa:751051781533859951>")
    .replaceA("4a", '<a:4sa:751051817248620624>')
    .replaceA("5a", '<a:5sa:751051840833060894>')
    .replaceA("6a", '<a:6sa:751051867521286226>')
    .replaceA("7a", '<a:7sa:751051903277989908>')
    .replaceA("8a", '<a:8sa:751051947745738875>')
    .replaceA("9a", '<a:9sa:751051967840911421>')
  
  return gorunum
}


exports.run = (client, message, args) => {
const emoji = client.emojis.find(emoji => emoji.name === "men_kelebek")
const emoji1 = client.emojis.find(emoji => emoji.name === "bildirim")
const emoji2 = client.emojis.find(emoji => emoji.name === "kitap")
 
 
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji1} Bilginiz`,`${emoji2} Bu Komutu Sadece **Üst Yönetim** Kullana Bilir`))

  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
  let count = 0;
  let tag = message.guild.members.filter(r=>r.user.username.includes('SΞD')).size;
  let boost = message.guild.members.filter(r=>r.roles.has('675730968228921367')).size
  let çevrimiçi = message.guild.members.filter(m => m.presence.status !== "offline").size
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription(`
**Toplam Üye** • ${message.guild.memberCount} 
**Aktif Üye**  • ${çevrimiçi} 
**Taglı Üye**  • ${tag} 
**Sesteki Üye** • ${count} 

`)
.setFooter(`Kalite Tesadüf Değildir`).setTimestamp()
message.channel.send(embed).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: 'say',
  description: '',
  usage: ''
};