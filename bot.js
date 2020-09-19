const Discord = require("discord.js");
const googleTTS = require("google-tts-api");
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

//

client.on("guildMemberAdd", async member => {
  require("moment-duration-format");
  moment.locale("tr");
  let user = client.users.get(member.id);
  let tarih = moment(member.user.createdAt.getTime()).format("LLL");
  let gün = moment
    .duration(new Date().getTime() - member.user.createdAt.getTime())
    .format("D");
  let resim = new Discord.Attachment(
    "https://media.giphy.com/media/gcyvxyAHXck2FcUoQI/giphy.gif"
  );
  let kişi = member.guild.memberCount;
  let kayıtcırol = "746293003877875752"; //Yetkili rolünüz ID'sini girin.
  let kanal = client.channels.get("745539098281902144"); //Kanalınızın ID'sini girin.
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün1 = moment.duration(kurulus).format("D");
  var devtr;
  if (kurulus < 1296000000)
    devtr = "Hesabınız : Şüpheli <a:fg:747419385471172670>";
  if (kurulus > 1296000000)
    devtr = "Hesabınız : Güvenli <a:wa:746286271155929118>";
  let emoji2 = client.emojis.find(emoji => emoji.name === "hypesquad");

  kanal.send(
    `<a:hg:747411555842392124>  <@${
      member.user.id
    }> **...** sende aramıza  **hoşgeldin!**\n\n<a:el:747413062671400980>  Seninle beraber **${kişi}** kişiyiz.\n\n<a:ye:747415356515024931>  Tagımızı alarak bize destek olabilirsin SΞD \n
<a:da:747414746084409434> Hesap kuruluş tarihi; **${tarih}** [**${gün}** gün önce]\n\n<a:wa:746286271155929118> <@&746293003877875752> sizinle ilgilenecektir. \n \n <a:tak:747416252968075295> ${devtr} `,
    resim
  );
});
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
//
client.on("guildMemberAdd", async member => {
  member.addRole("745539097220612105");
  const rochelle = member.guild.channels.find(
    channel => channel.id === "745539098281902145"
  );
  const rochelle1 = new Discord.RichEmbed()
    .setColor("RED")
    .addField(
      `<a:hg:747411555842392124>Hoş Geldin ! <a:hg:747411555842392124>`,
      `<a:tk:747417686774120448> ${member} adlı üye sunucumuza katıldı, <@&745539097220612105> rolünü verdim!\n <a:tk:747417686774120448> Sunucumuz artık \`${member.guild.memberCount}\` üyeye sahip.! `
    );
  rochelle.send(rochelle1);
}); // otorol

client.on("guildMemberAdd", member => {
  var moment = require("moment");
  require("moment-duration-format");
  moment.locale("tr");
  var { Permissions } = require("discord.js");
  var x = moment(member.user.createdAt)
    .add(7, "days")
    .fromNow();
  var user = member.user;
  x = x.replace("birkaç saniye önce", " ");
  if (!x.includes("önce") || x.includes("sonra") || x == "↓") {
    var rol = member.guild.roles.get("752586382437908511"); ///Cezalı Rol ID

    var kayıtsız = member.guild.roles.get("745539097220612105"); ///Kayıtsız rolü ID'si
    var eks = member.guild.roles.get("745539097220612105"); ///Kayıtsız rolü ID'si
    var eksi = member.guild.roles.get("745539097220612105"); ///Kayıtsız rolü ID'si  717777340708552807 717743735705960448
    member.addRole(rol);
    member.removeRole(kayıtsız);
    member.removeRole(eks);
    member.removeRole(eksi);

    member.user.send(
      "Hesabınız 7 günden önce açıldığı için cezalıya atıldınız, yetkililere bildirerek açtırabilirsinin dostum"
    );//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

    const rochelle = new Discord.RichEmbed()
      .setColor("GOLD")
      .setDescription(
        `${user} adlı şahısın hesabı 7 günden önce açıldığı için koruma nedeniyle cezalı rolünü verdik.`
      );
    client.channels.get("745539101238886467").send(rochelle);
    setTimeout(() => {
      member.removeRole(kayıtsız.id);
      member.removeRole(eks.id);
      member.removeRole(eksi.id);
    }, 1000);
  } else {
  }
}); // 7 günden önce hesaplar
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
client.on("voiceStateUpdate", async (thrones, sanal) => {
  let voiceLog = thrones.guild.channels.find(c => c.name === "voice-log");
  if (thrones.voiceChannel === sanal.voiceChannel) return;
  //if()
  if (thrones.voiceChannel && !sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            thrones.id +
            "> adlı kullanıcı **" +
            thrones.voiceChannel +
            "** kanalından çıkış yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  if (!thrones.voiceChannel && sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            sanal.id +
            "> adlı kullanıcı **" +
            sanal.voiceChannel +
            "** kanalına giriş yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  if (thrones.voiceChannel !== sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            thrones.id +
            "> adlı kullanıcı **" +
            thrones.voiceChannel +
            "** kanalından **" +
            sanal.voiceChannel +
            "** kanalına giriş yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
}); // ses log

client.on("ready", Rochelle => {
  setInterval(async Rochelle => {
    let kanal = client.guilds
      .get("727882781371138089")
      .channels.get("745539102056644690");
    let mesaj = await kanal.fetchMessage("745539098281902145");
    let Rochelle1 = new Discord.RichEmbed()
      .setTitle("**SΞD İFORMATİON**")
      .setTimestamp()
      .setFooter(mesaj.guild.name, mesaj.guild.iconURL)
      .setColor("2F3136");
    let emoji = client.emojis.find(emoji => emoji.name === "");
    let emoji1 = client.emojis.find(emoji => emoji.name === "");
    let emoji2 = client.emojis.find(emoji => emoji.name === "");
    let emoji3 = client.emojis.find(emoji => emoji.name === "");
    let tag = mesaj.guild.members.filter(r => r.user.username.includes(""))
      .size;
    let erkek = mesaj.guild.members.filter(r =>
      r.roles.has("745539097220612102")
    ).size;
    let kız = mesaj.guild.members.filter(r => r.roles.has("745539097220612101"))
      .size;
    let kayıtsız = mesaj.guild.members.filter(r =>
      r.roles.has("745539097220612105")
    ).size;
    let booster = mesaj.guild.members.filter(r =>
      r.roles.has("746301271748902913")
    ).size;
    let çevrimiçi = mesaj.guild.members.filter(
      m => m.presence.status !== "offline"
    ).size;
    let çevrimdışı = mesaj.guild.members.filter(
      r => r.presence.status !== "online"
    ).size;
    const voiceChannels = mesaj.guild.channels.filter(c => c.type === "voice");
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels)
      count += voiceChannel.members.size;
    Rochelle1.setThumbnail(
      "https://media.giphy.com/media/gcyvxyAHXck2FcUoQI/giphy.gif"
    );
    Rochelle1.setDescription(
      `<a:hac:728158127324790834> **Toplam Üye •** \`${mesaj.guild.memberCount}\` \n<a:hac:728158127324790834> **Çevrimiçi Üye •** \`${çevrimiçi}\` \n<a:hac:728158127324790834> **Ses Aktifliği •** \`${count}\` \n\n\n${emoji2} **Tagımızı Bulunduran Üye Sayısı •** \`${tag}\`\n${emoji2} **Sunucuyu Boostlayan Üye Sayısı •** \`${booster}\`\n\n<a:men_kelebek:728158201060655175> **Sunucumuzda Bulunan Erkek Üye •** \`${erkek}\` \n<a:men_kelebek:728158201060655175> **Sunucumuzda Bulunan Kadın Üye •** \`${kız}\` \n\n<a:men_manvi:728159772469362698> **Sunucumuzda Bulunan Kayıtsız Üye •** \`${kayıtsız}\``
    );
    mesaj.edit(Rochelle1);
  }, 10 * 1000);
}); ////message.guild.roles.get("boosterid").members.map("x=>  x.tag").join("\n")
//
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
client.on("userUpdate", async (oldCAD, newCAD) => {
  if (oldCAD.avatarURL === newCAD.avatarURL) return;

  let cadNORMAL = "746294396231614466"; // Normal PP'lerin Atılacağı Kanal ID'si

  let cadGIF = "746295734659448842"; // Gif PP'lerin Atılacağı Kanal ID'si
  console.log(newCAD.avatarURL);

  let cadPP = newCAD.avatarURL.split("?")[0];
  if (cadPP.endsWith("!gif")) {
    client.channels.get(cadGIF).send(new Discord.Attachment(cadPP));
  } else {
    client.channels.get(cadNORMAL).send(new Discord.Attachment(cadPP));
  }
}); // gif pp

client.on("userUpdate", async (saint, yeni) => {
  var sunucu = client.guilds.get("745539096973410404"); // Buraya Sunucu ID
  var uye = sunucu.members.get(yeni.id);
  let roles = [
    "727908153886507098",
    "727951645555687456",
    "727908153068486686",
    "727908151965515837",
    "727951641814499388",
    "727908151046701116"
  ];
});
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
client.on("message", async message => {
  if (message.content === "!gir") {
    // - yerine prefixi yaz
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("Aleyküm Selam Hoşgeldin! ");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "merhaba") {
    msg.reply("Merhaba Nasılsın! ");
  }
});
//Zcode
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "Sea") {
    msg.reply("Aleyküm Selam Hoşgeldin! ");//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  }
});
//Zcode
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sea") {
    msg.reply("Aleyküm Selam Hoşgeldin!");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "Sa") {
    msg.reply("Aleyküm Selam Hoşgeldin! ");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "!tag") {
    msg.channel.sendMessage("SΞD");
    msg.react("698880257305870456");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "tag") {
    msg.channel.sendMessage("SΞD");
    msg.react("698880257305870456");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "tag alırmısınız") {
    msg.channel.sendMessage("SΞD");
    msg.react("698880257305870456");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "!link") {
    msg.channel.sendMessage("https://discord.gg/g5Z9YQR").then(msg => msg.delete(10000));
    msg.react("698880257305870456");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "link") {
    msg.channel.sendMessage("https://discord.gg/g5Z9YQR").then(msg => msg.delete(10000));
    msg.react("698880257305870456");
  }
});

client.on("guildMemberAdd", async member => {
  let jail = db.fetch(`devtr.jail_${member.guild.id}_${member.id}`);
  if (!jail) return;
  member.roles.forEach(xfalcon => {
    member.removeRole(xfalcon);
    member.addRole(jail);//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  });
});
//jail e bu db yi eklesene
/*
client.on("guildBanAdd", async (guild, member) => {
  var log = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(logg => logg.entries.first());
  var yapan = guild.members.get(log.executor.id);
  yapan.roles.forEach(sd => yapan.removeRole(sd.id));
  guild.unban(member.id);
});
*/
client.on("guildMemberAdd", member => {
  let cezali = "752586382437908511";
  let uyerol = "745539097220612104";

  if (member.user.username.includes("↓")) {
    member.addRole(cezali);
    member.send("Yasaklı tagdasın çık git işine");
  }
});

client.on("ready", async message => {
  const channel = client.channels.get("745539100328722483");
  if (!channel) return console.error("Kanal 'ID' girilmemiş.");
  channel
    .join()
    .then(connection => {
      console.log("Başarıyla bağlanıldı.");
    })
    .catch(e => {
      console.error(e);
    });
});

client.on("guildMemberAdd", member => {
  let rakamlar = Array(9)
    .fill(0)
    .map((_, index) => index + 1);

  let nickkontrol = member.user.username.split("");

  if (!tumHarfler("a", "z").some(harf => nickkontrol.includes(harf))) {
    member.setNickname(`SΞD ${member.user.username}`); //Botun değiştirmesini istediğiniz ismi girin.
  } else {
    return; //DevTR
  }

  function tumHarfler(charA, charZ) {
    let a = [],
      i = charA.charCodeAt(0),
      j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
      a.push(String.fromCharCode(i));
    }
    return a;
  }
});

client.on("userUpdate", async (old,nev) => {
if (old.username !== nev.username) {
    const Tag = "SΞD" // Geçici Olarak
    const Crew = "745539097191514251" 
    const Server = "745539096973410404"
    const Log = "745539101607985182"
    if (!nev.username.includes(Tag) &&client.guilds.get(Server).members.get(nev.id).roles.has(Crew)) {
        client.guilds.get(Server).members.get(nev.id).removeRole(Crew)
        client.channels.get(Log).send(`> **${nev}, "${Tag}" Tagını Çıkardığı İçin Botumuz Tarafından <@&${Crew}> Rolü Geri Alındı**`)
        nev.send("Tagımızı Çıkardığına Üzüldüm :(")
    }
    if (nev.username.includes(Tag) &&!client.guilds.get(Server).members.get(nev.id).roles.has(Crew))
    {
        client.channels.get(Log).send(`> **${nev}, "${Tag}" Tagımızı Aldığı İçin Botumuz Tarafından <@&${Crew}> Rolü Verildi**`)
        client.guilds.get(Server).members.get(nev.id).addRole(Crew)
        nev.send("Tagımızı Aldığın İçin Teşekkürler Sizin Sayenizde Büyüyoruz :)")
    }
}
})
client.on('guildDelete', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("RED")
.setTitle(" Bot Kicklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('kanal id').send(rrrsembed);
  
});
//CodeShare

client.on('guildCreate', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("GREEN")
.setTitle(" Bot Eklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('752574213747113994').send(rrrsembed);
  
});
/*
client.on('voiceStateUpdate', async(oldUser, newUser) => {
if(oldUser.user.bot || newUser.user.bot) return;
googleTTS(`${newUser.guild.name} Sunucusuna hoşgeldin`, `tr`, 1).then(x => { 
newUser.voiceChannel.join().then(xfalcon => {
xfalcon.playStream(x).on(`end`, (devtr) => {
xfalcon.disconnect();
})
})
})
});*/
// sşkerm elleme şunu birşey deniyorum bekle kanka
client.login(ayarlar.token);
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

