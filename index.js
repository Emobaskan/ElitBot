//------------------------------------------------

const Discord = require("discord.js");
const bot = new Discord.Client();

const moment = require('moment');

const client = new Discord.Client();
const db = require('quick.db');

require('moment-duration-format');

const express = require('express');
const http = require('http');

const DBL = require('dblapi.js')

const app = express(); 
const tr = require('tr-date');
//------------------------------------------------

const prefix = process.env.PREFIX;
const owner = process.env.OWNER;

//------------------------------------------------

client.on('ready', function() {
 setInterval(async () => {
 const statuslist = [
 `|🔥|  Prefix = *  |🔥|`,
 `🔥 ${client.guilds.size} adet sunucu 🔥`,
 `💎 *yardım 💎 {TÜM KOMUTLAR}`,
 `💎 *oynat 💎 {ŞARKI KOMUTU}`,
 `💎 *destek 💎 {SAHİBE DESTEK}`,
 `💎 *vote 💎 {BİZE OY VERİN}`,
 `Yapımcım, 💎Emre GÜL💎, Sizi 💛Seviyor💛`
 
 
 
 ];
 const random = Math.floor(Math.random() * statuslist.length);

 try {
 await client.user.setPresence({
 game: {
 name: `${statuslist[random]}`,
 type: "STREAMING"
 
 },
 status: "DND"
 });
 } catch (error) {
 console.error(error);
 }
 }, 12000);

console.log(`[${tr.getTime}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  
});

client.on('message', async (msg) => {
  //--------------------------------------------------------------------
  
  
  if (msg.author.bot) return;
  if (msg.content.indexOf(prefix) !== 0) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const komut = args.shift().toLowerCase();

  //--------------------------------------------------------------------
  let ayarlar = client.emojis.get('561568100542316554');//${ayarlar}
  let thinkshow = client.emojis.get('561567852457623572');//${thinkshow}
  let marioban = client.emojis.get('561256215511040000');//${marioban}
  let ofke = client.emojis.get('551110071178756106');//${ofke}
  let byby = client.emojis.get('551109139518980106');//${byby}
  //--------------------------------------------------------------------
  let clear = client.emojis.get('561256734912544768');//${clear}
  let galp = client.emojis.get('561568254901092357');//${galp}
  let fotoguin = client.emojis.get('561256410583924736');//${fotoguin}
  let cldr = client.emojis.get('561568705079803934');//${cldr}
  let kumuk = client.emojis.get('561567921680285696');//${kumuk}
  let digitalcat = client.emojis.get('561256636694528005');//${digitalcat}
  let dbear = client.emojis.get('561568356784799772');//${dbear}
  let skd = client.emojis.get('561256338374787093');//${skd}
  let nirdah = client.emojis.get('561256148821344258');//${nirdah}
  let evet = client.emojis.get('569434605581631495');//${evet}
  let hayır = client.emojis.get('315009174163685377');//${hayır}
  let art1 = client.emojis.get('561568417984020509');//${art1}
  let clgngalp = client.emojis.get('561568617498542120');//${clgngalp}
  let siren = client.emojis.get('561567768466554880');//${siren}
  let nitro = client.emojis.get('561568146423808023');//${nitro}
  //--------------------------------------------------------------------
  
  if(msg.author.bot) return;
  
  //------------------------------------------------
  
  if (msg.content.toLowerCase() === "türkiye") {
       msg.react('🇹🇷');
    };
  if (msg.content.toLowerCase() === "türk") {
       msg.react('🇹🇷');
    };
  
  //------------------------------------------------
  
  if (msg.content.toLowerCase() === 'oynat') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'devam') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
   if (msg.content.toLowerCase() === 'geç') {
   msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
   if (msg.content.toLowerCase() === 'bitir') {
  msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
   if (msg.content.toLowerCase() === 'durdur') {
  msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
   if (msg.content.toLowerCase() === 'avatarım') {
   msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
   if (msg.content.toLowerCase() === 'özlüsöz') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
   if (msg.content.toLowerCase() === 'kamyonarkası') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
   if (msg.content.toLowerCase() === 'yardım') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'semboller') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'şarkı') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
   if (msg.content.toLowerCase() === 'müzik') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  } 
  if (msg.content.toLowerCase() === 'diğer') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
   if (msg.content.toLowerCase() === 'yapımcım') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
   if (msg.content.toLowerCase() === 'yapımcı-bilgi') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'eğlence') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'futboloyna') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
    if (msg.content.toLowerCase() === 'ping') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'vote') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'yapımcıbilgi') {
    msg.reply('```diff\n- Doğru Yazılışı `*yapımcı-bilgi`dir```');
  }
  if (msg.content.toLowerCase() === 'yapımcı bilgi') {
    msg.reply('```diff\n+ Doğru Yazılışı `*yapımcı-bilgi`dir```');
  }
  if (msg.content.toLowerCase() === 'youtube') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'destek') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'istatistik') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'yenilikler') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'kullanıcı') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'rusruleti') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'paraçevir') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'bakımdakiler') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'roller') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'rollerim') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'tarih') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  if (msg.content.toLowerCase() === 'sil') {
    msg.reply('```md\n# Farkındaysan Prefix ( * )i unuttun!```');
  }
  
  //------------------------------------------------
  
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    let embed = new Discord.RichEmbed()
    .setDescription('**Elit BOT**\n\n\n Prefix : `*`\n\n\n ~~Üstü Çizgili~~=Bakımda Anlamına Gelir\n\n\n' + `${cldr}` + '**`eğlence` | komutu size botun eğlence komutlarını gösterir.:gem: \n' + `${dbear}` + '`kullanıcı` | komutu size botun kullanıcı komutlarını gösterir.:new: \n :musical_note: `şarkı` ᵛᵉʸᵃ `müzik` | komutu size botun şarkı sisteminin koutlarını gösterir.:gem: \n' + `${nitro}` + '`diğer` ᵛᵉʸᵃ `ekstra`| komutu botun bazı önemli ek bilgilerini verir.:gem: \n' + `${clgngalp}` + '`vote` | komutu bota oy verme linkini gösterir.:gem: \n' + `${galp}` + '`destek` ᵛᵉʸᵃ `davet` | komutu bota destek linklerini gösterir.:gem: \n' + `${siren}` + '`yenilikler` | komutu bota en son gelen özellikleri gösterir.:new:**')
    .setColor('36393a');

msg.channel.send(embed);
  }  
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    msg.channel.send('```diff\n- Prefix : `*`\n\n+ Prefix Komutların Başına Gelen Sembol veya Harflere Denir.```');
  }
  
  
  if (msg.content.toLowerCase() === prefix + 'kullanıcı') {
    let embed = new Discord.RichEmbed()
    .setTitle('Elit Bot Kullanıcı Komutu')
    .setDescription(':new:**`yazdır` | komutu yazdığın şeyi bota yazdırır.:new:\n\n:gem: `avatarım` | komutu sizin avatarınızı gösterir.:gem:\n\n:gem: `vote` | komutu bota oy verme kısmını gösterir.:gem:\n\n:gem:~~`rusruleti` | komutu ile rus ruleti oynarsınız.~~:gem:\n\n:gem:~~`paraçevir` | komutu ile yazı tura oynarsınız.~~:gem:\n\n:new: `roller` | komutu sunucudaki bütün rolleri gösterir.:new:\n\n:new: `rollerim` | komutu sunucuda sahip olduğunuz rolleri gösterir.:new:\n\n:new: `zaman`,`tarih` ᵛᵉʸᵃ `saat` | komutu zamanımızı gösterir.:new:\n\n:new: `bakımdakiler` | komutu bakımda olan komutları gösterir. :new:**')
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  
  if (msg.content.toLowerCase() === prefix + 'eğlence') {
    let embed = new Discord.RichEmbed()
    .setDescription('**:gem:`kamyonarkası` | komutu bota bazı kamyon arkası sözler söyletir.:gem: \n\n :gem:`özlüsöz` | komutu bota bazı özlü sözler söyletir.:gem: \n\n ~~:gem:~~`futboloyna` | komutu topu kaleye atar.:gem:~~ \n\n :new:`rusruleti` | komutu bot ile rus ruleti oynamanızı sağlar.:new: \n\n :new:`paraçevir` | komutu "yazı mı tura mı gelecek ?" şeklinde bir oyun oynarsınız ve yazı ya da tura gelir.:new:**')
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  
  if (msg.content.toLowerCase() === prefix + 'yenilikler') {
    let embed = new Discord.RichEmbed()
    .setTitle('Bota Gelen En Son Özellikler')
    .setDescription('**En Büyük Yenilikten En Küçüğe Doğru Sıralanmıştır.**\n\n\n\n`sil` komutu \n\n`İstatistik` Komutu \n\n`rollerim` komutu \n\n`roller` komutu \n\n`tarih` komutu\n\n`bakımdakiler` komutu\n\n~~`rusruleti`~~ komut \n\n~~`paraçevir`~~ komutu \n\n`Hareketli Emojiler` \n\n `Yardım` Menüsü**...**')
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  
  if (msg.content.toLowerCase() === prefix + 'yetkili') {
    let embed = new Discord.RichEmbed()
    .setTitle('Yetkili Komutları')
    .setDescription('** *sil Komutu')
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  
  if (msg.content.toLowerCase() === prefix + 'şarkı') {
    let embed = new Discord.RichEmbed()
    .setTitle("Elit Bot Şarkı Komutları")
    .setDescription('**oynat** ***{şarkı ismi}*** \n 1 \n 2 \n 3 \n 4 \n 5... \n **durdur** ***{şarkıyı duraklatır}*** \n **devam** ***{şarkıyı devam ettirir}*** \n  **geç** ***{[eğer varsa]sonraki şarkıya geçer}***  \n  **bitir** ***{şarkıyı bitirir ve ses kanalından ayrılır}*** :gem:')
    .setColor('RANDOM');

msg.channel.send(embed);
  }  
  if (msg.content.toLowerCase() === prefix + 'müzik') {
    let embed = new Discord.RichEmbed()
    .setTitle("Elit Bot Müzik Komutları")
    .setDescription('**oynat** ***{şarkı ismi}*** \n 1 \n 2 \n 3 \n 4 \n 5... \n **durdur** ***{şarkıyı duraklatır}*** \n **devam** ***{şarkıyı devam ettirir}*** \n  **geç** ***{[eğer varsa]sonraki şarkıya geçer}***  \n  **bitir** ***{şarkıyı bitirir ve ses kanalından ayrılır}*** :gem:')
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  
  if (msg.content.toLowerCase() === prefix + 'diğer') {
    let embed = new Discord.RichEmbed()
    .setTitle("Elit Bot Ek Komutlar")
    .setDescription('**:gem:`Sa,slm,selam ve selamın aleyküm` | komutları size** ***Aleyküm Selam*** **cevabı verir.:gem: \n \n :gem:`semboller` | komutu bazı semboller gösterir. {BETA}:gem: \n \n :gem:`ping` | komutu botun pingini gösterir.:gem: \n \n :new:`istatistik` ᵛᵉʸᵃ `i` | komutu botun istatistiklerini gösterir:new:\n\n :gem:`yapımcı-bilgi` | komutu botun yapımcısı hakkında bilgi verir.:gem: \n\n :gem:`yapımcım` | komutu bota yapımcısının bilgilerini verir.:gem:\n\n :new:`top10` |** Komutu ile Botun Olduğu En Fazla Kişili Sunucuları Görürsünüz. :new:**')
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  if (msg.content.toLowerCase() === prefix + 'ekstra') {
    let embed = new Discord.RichEmbed()
    .setTitle("Elit Bot Ek Komutlar")
    .setDescription('**:gem:`Sa,slm,selam ve selamın aleyküm` | komutları size** ***Aleyküm Selam*** **cevabı verir.:gem: \n \n :gem:`semboller` | komutu bazı semboller gösterir. {BETA}:gem: \n \n :gem:`ping` | komutu botun pingini gösterir.:gem: \n \n :new:`istatistik` | komutu botun istatistiklerini gösterir:new:\n\n :gem:`yapımcı-bilgi` | komutu botun yapımcısı hakkında bilgi verir.:gem: \n\n :gem:`yapımcım` | komutu bota yapımcısının bilgilerini verir.:gem:**')
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  
  if (msg.content.toLowerCase() === prefix + 'bakımdakiler') {
    let embed = new Discord.RichEmbed()
    .setTitle('Bakımdaki Kodlar')
    .setDescription('' + `${hayır}` + '`futboloyna`\n\n' + `${evet}` + '`rusruleti`\n\n' + `${evet}` + '`paraçevir`\n\n' + `${evet}` + '`kamyonarkası`\n\n' + `${evet}` + '`özlüsöz`')
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  //------------------------------------------------
  
  if (msg.content.toLowerCase() === prefix + 'semboller') {
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMjk5OTA1NjE4MDUxMDczMSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTYxMDI4NDc5fQ.utEG7KsEGNQwWM4foPjlllc5lZwHBOPHf0YZtOzPF8s', client) 


dbl.hasVoted(msg.author.id).then(voted => {
      if(voted) {
    let embed = new Discord.RichEmbed()
    .setDescription('Hava durumu sembolleri: \n :sunny: :cloud: :umbrella2::snowman2: \n \n Gülücük sembolleri: \n :frowning2: :relaxed: ☻ ت ヅ ツ ッ シ Ü ϡ ﭢ \n \n Para sembolleri: \n € £ ¥ ¢ ƒ ₩ $ \n \n Küçük sayılar: \n ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉  \n \n Yuvarlak içinde sayılar: \n ➀➁➂➃➄➅➆➇➈➉   ➊➋➌➍➎➏➐➑➒➓ \n \n Yuvarlak içinde harfler: \n ⒶⒷⒸⒹⒺⒻⒼⒽ ⒾⒿⓀⓁ:m:Ⓝ ⓄⓅⓆⓇⓈⓉ ⓊⓋⓌⓍⓎⓏ   ⓐⓑⓒⓓⓔⓕⓖⓗ ⓘⓙⓚⓛⓜⓝ ⓞⓟⓠⓡⓢⓣ ⓤⓥⓦⓧⓨⓩ \n \n Satranç taşları: \n ♚ ♛ ♜ ♝ ♞ ♟   ♔ ♕ ♖ ♗ ♘ ♙ \n \n El işaretleri: \n ☚ ☛ ☜ :point_up: ☞ ☟ :v: \n \n Çiçekler: \n ✽ ✾ ✿ ❀ ❁ ❃ ❋ \n \n Ok işaretleri: \n ➩➪➫➬➭➮➯➱➹➸➷ ⇨⇦⇰ ⇱  ⇲ ⇳ ⇴ ⇵⇶ ⇷ ⇸ ⇹ ⇺ ⇻ ⇼ ⇽⇾ ⇿→:left_right_arrow: ←↑↓←↑↓:arrow_upper_left::arrow_upper_right:↱   ↲   ↳   ↴  ↵   ↶  ↷  ↸ ↹ ↺  ↻  ↼ ↽ ↾ ︷︸︾﹀ :arrow_right:➢➣➤➥➦➧➨➲➳➴➵➶➺➻➼➽«»:arrow_lower_right::arrow_lower_left: :arrow_up_down:➛➠➟ ➾ ↚ ↛ ↜ ↝ :leftwards_arrow_with_hook:↞ ↟↠↡ ↢ ↣ ↤ ↥   ↦ ↧   :leftwards_arrow_with_hook:  :arrow_right_hook:  ↫ ↬ ↭↮ ↯⇀ ⇁ ⇂   ⇃ ⇄ ⇅  ⇆ ⇇ ⇈  ⇉ ⇊  ⇋ ⇌ ⇍ ⇎ ⇏  ⇐ ⇑  ⇒ ⇓ ⇔ ⇕  ⇖ ⇗ ⇘  ⇙  ⇚ ⇛  ⇜ ⇝ ⇞  ⇟⇠ ⇡⇢ ⇣   ⇤ ⇥ ⇦ ⇧   ⇨ ⇩   ⇪   ⇫⇬  ⇭  ⇮  ⇯ ⟰ ⟱ \n \n Çeşitli sayılar: \n θ  Ι  2  Э  Ч  Ƽ  б  ל   ȣ  ף \n ０１２３４５６７８９ \n ૦ ١  Ձ   ૩  મ   Ƽ   6  7  Ց   ୨ \n 𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡 𝟙𝟘 \n ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩  ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳ \n ➊  ➋  ➌ ➍  ➎  ➏  ➐  ➑ ➒ ➓ \n ⓫ ⓬ ⓭ ⓮ ⓯ ⓰ ⓱ ⓲ ⓳ ⓴ \n ⓵ ⓶ ⓷ ⓸ ⓹ ⓺ ⓻ ⓼ ⓽ ⓾ \n \n KARRRRRMA KARIŞIK: \n ♪ ♫ ♩ ♬ ♭ ♮ ♯ :relaxed: ☻ :hearts: :diamonds:  :clubs:  :spades:  •  ◘  ○  ◙  ♂  ♀  ♪  ♫  ☼  ► ◄ :arrow_up_down: :bangbang: :video_game: :zzz: ▂▃▄▅▆▇█▓▒░Sembol░▒▓▇▆▅▄▃▂ :clapper: ༼･ิɷ･ิ༽   (/••)/   ヽ༼ ಠ益ಠ ༽ﾉ   (҂⌣̀⌣́)ᕤ   （｀_っ´）（ ＾∀＾）(｡◝‿◜｡)  ⊂( ・ ̫・)⊃ (*′☉.̫☉)  (◑‿◐)  〳 ‾́ ﹏ ‾́ 〵  〳◉͜ʖ ◉〵  ─=≡( ͡° ͜ʖ ͡°)  ໒( •̀ ╭ ͟ʖ╮ •́ )७  〳 ͡° Ĺ̯ ͡° 〵 (✿◠‿◠) ༼ ຈل͜ຈ༽    ᕕ( ಠ‿ಠ)ᕗ Ԋ ᧬ ᧲  ᵯ  ⁂  ߷ ༪  ༫  ༬ ᦝ ༮  ༲ ྅  ࿏ ⃠ ⁇ :keyboard: Ԏ ⦷ ⦺ ⨟ Ԑぷ ꉹꉔꉖꋔꍈꏀꑸꔞ   ⎚ Ԃ ⌘:eject:╳〠༆ ༒ ༊ ༼      ༽  Ӝ জ ඏ፨ ᚙ ᢇ ש ༗࿊࿋࿌࿉ ʬ  ʨ  ϡ ᚋ ᚌ ᚍ ᚎ ᚏ  ᚙ ᚸ ⨷ ⨇ ⨈ ᛔ ⊛⊜⊝⁈ :interrobang: ₯ ↂ ↀ  ≝ ≣ ≟ ≞ ⋰ ⋱ ⁂   ჯ   ᓬ ᕒ  ᦙ ꗠ  ⎘⎗⌫⌧⌦ϾϿ ⌗ ꖻ  ꗾ  ꡭ ꘖ ꘒ :new: :ok: :cinema: :signal_strength: :loudspeaker: :mega: :pushpin: {BETA}')
    .setColor('RANDOM');

msg.channel.send(embed);
         } else {
        msg.channel.send("**`Semboller` Komutunu Kullanabilmek İçin '12 Saatte Bir' Bota https://discordbots.org/bot/532999056180510731/vote Yerinden Oy Vermeniz Gerekmektedir.\n Oy vermenize Rağmen Bot Bu Mesajı Yazıyorsa Lütfen Bir Kaç Dakika Bekleyiniz Tekrar İşe Yaramazsa Oyunuzu Konrtol Ediniz.**")
      }
  });
  };

  if (komut === 'sil') { 
   if(! /* Bu işlemi tersine çevirecek */msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send('Yetersiz Yetki! Bu Komutu Kullanabilmek İçin `MESAJLARI YÖNET` Yetkisine İhtiyacın Var.'); // eğer yetki yok ise geri dönecek
   
    // BAŞLA
    // 1. Eğer komut eşitse sil'e bu kod bloğunu çalıştır.
    // 2. eğer kullanıcı "MESAJLARI YÖNET" yetkisine sahip değilse geri dön ve mesaj at
    // 3. mesaj sayısını ata,
    // 4. mesah sayısı yok ise YA DA mesaj sayısı "sayı" değil ise geri dön mesaj gönder.
    // 5. son yazılan mesajı sil.
    // 6. mesaj kanalında çoklu sil işlemi yap
    // 7. kanala mesaj gönder aradundan :d mesajı 5000 ms sonra sil
    // BİTİR

   let mesaj_sayısı = args[0]; // şimdi argümanlara ayırıyor yukarıda ve ordan ilk kısmı alacağız
   
   if(!mesaj_sayısı || isNaN(mesaj_sayısı)) return msg.channel.send('**Mesaj Sayısı Belirtilmemiş Lütfen Belirttiniz.**');

    mesaj_sayısı = Number(mesaj_sayısı) + 1;
    
    msg.delete();
    msg.channel.bulkDelete(mesaj_sayısı); // bir ekliyoruz mesaj sayısına bi sıkıntımız varda bi dakika
    msg.channel.send(`${clear} **${Number(mesaj_sayısı) - 1}** adet mesaj silindi!`).then(message => message.delete(5000));
    
    return;
 };
  
  
  if(komut === 'rollerim') {
    
    let kullanıcının_rolleri = msg.member.roles.map(role => role.name); 
    let roller = kullanıcının_rolleri.join('\n') 
    return msg.channel.send(`= Rolleriniz =\n ${kullanıcının_rolleri}`, {code: 'asciidoc'})
    
  };
  
  
  if(komut === 'yazdır') {
    
    let mesaj = args.join(' ');
    
    if(!mesaj) return msg.channel.send('Lütfen bir mesaj giriniz.') 
    await msg.delete();
    return msg.channel.send(mesaj);
  
  };
  
  
if (msg.content.toLowerCase() === prefix + 'roller') {
   let rArr = msg.guild.roles.map(role => role.name);
   let emb = new Discord.RichEmbed()
    .setColor('36393a')
    .setTitle('Sunucudaki Bütün Roller')
    .setDescription(rArr, {code: ''});
    msg.channel.send(emb);
    };
  
  
  //let tarih = `${tr.getMonth} ${tr.getDate}, ${tr.getDays} Günü, Saat: ${tr.getClock}`;
  if (msg.content.toLowerCase() === prefix + 'zaman') {
    let ay = `${tr.getMonth}`
    let ayın_kaçı = `${tr.getDate}`
    let gün = `${tr.getDays}`
    let saat = `${tr.getClock}`
    let emb = new Discord.RichEmbed()
    .setColor('36393a')
    .setTitle('🇹🇷 Tarih Komutu 🇹🇷')
    .setDescription(' Bugün **' + ay + '** Ayının, **' + ayın_kaçı + '.** Günü \n Bugün Günlerden **' + gün + '** ve Saat **' + saat + '**');
    msg.channel.send(emb);
    };
if (msg.content.toLowerCase() === prefix + 'tarih') {
    let ay = `${tr.getMonth}`
    let ayın_kaçı = `${tr.getDate}`
    let gün = `${tr.getDays}`
    let saat = `${tr.getClock}`
    let emb = new Discord.RichEmbed()
    .setColor('36393a')
    .setTitle('🇹🇷 Tarih Komutu 🇹🇷')
    .setDescription(' Bugün **' + ay + '** Ayının, **' + ayın_kaçı + '.** Günü \n Bugün Günlerden **' + gün + '** ve Saat **' + saat + '**');
    msg.channel.send(emb);
    };
  if (msg.content.toLowerCase() === prefix + 'saat') {
    let ay = `${tr.getMonth}`
    let ayın_kaçı = `${tr.getDate}`
    let gün = `${tr.getDays}`
    let saat = `${tr.getClock}`
    let emb = new Discord.RichEmbed()
    .setColor('36393a')
    .setTitle('🇹🇷 Tarih Komutu 🇹🇷')
    .setDescription(' Bugün **' + ay + '** Ayının, **' + ayın_kaçı + '.** Günü \n Bugün Günlerden **' + gün + '** ve Saat **' + saat + '**');
    msg.channel.send(emb);
    };
  
  
  if (msg.content.toLowerCase() === prefix + "istatistik") {
const seksizaman = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter(`${client.user.username}`, client.user.avatarURL)
  .setTimestamp()
  .addField("👑 Botun Sahibi", `<@${process.env.OWNER}> | **Emre GÜL**\n`)
  .addField(":desktop: Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB\n', true)  
  .addField(":construction_worker: Çalışma süresi", seksizaman)
  .addField(":busts_in_silhouette: Kullanıcılar", client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()+'\n', true)
  .addField(":clipboard: Sunucular", client.guilds.size.toLocaleString()+'\n', true)
  .addField(":tv: Kanallar", client.channels.size.toLocaleString()+'\n', true)
  .addField(":notebook: Discord.js Sürüm", "v"+Discord.version+'\n', true)
  .addField(`:book: Node.JS sürüm`, `Discord.js\n`, true)
  .addField(":timer: Ping", client.ping+" ms", true)
  return msg.channel.send(istatistikler);
  };
  if (msg.content.toLowerCase() === prefix + "i") {
const seksizaman = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter(`${client.user.username}`, client.user.avatarURL)
  .setTimestamp()
  .addField("👑 Botun Sahibi", `<@${process.env.OWNER}> | **Emre GÜL**\n`)
  .addField(":desktop: Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB\n', true)  
  .addField(":construction_worker: Çalışma süresi", seksizaman)
  .addField(":busts_in_silhouette: Kullanıcılar", client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()+'\n', true)
  .addField(":clipboard: Sunucular", client.guilds.size.toLocaleString()+'\n', true)
  .addField(":tv: Kanallar", client.channels.size.toLocaleString()+'\n', true)
  .addField(":notebook: Discord.js Sürüm", "v"+Discord.version+'\n', true)
  .addField(`:book: Node.JS sürüm`, `Discord.js\n`, true)
  .addField(":timer: Ping", client.ping+" ms", true)
  return msg.channel.send(istatistikler);
  };  
  
  
  if (msg.content.toLowerCase() === prefix + 'top10') {
if (client.guilds.size < 20) return msg.reply("Bot `10` tane sunucuda bulunmuyor!")
  
const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
const embed = new Discord.RichEmbed()
			.setDescription(`1. **${top[0].name}**: ${top[0].memberCount} Kişi Bulunuyor.\n2. **${top[1].name}**: ${top[1].memberCount} Kişi Bulunuyor.\n3. **${top[2].name}**: ${top[2].memberCount} Kişi Bulunuyor.\n4. **${top[3].name}**: ${top[3].memberCount} Kişi Bulunuyor.\n5. **${top[4].name}**: ${top[4].memberCount} Kişi Bulunuyor.\n6. **${top[5].name}**: ${top[5].memberCount} Kişi Bulunuyor.\n7. **${top[6].name}**: ${top[6].memberCount} Kişi Bulunuyor.\n8. **${top[7].name}**: ${top[7].memberCount} Kişi Bulunuyor.\n9. **${top[8].name}**: ${top[8].memberCount} Kişi Bulunuyor.\n10. **${top[9].name}**: ${top[9].memberCount} Kişi Bulunuyor. `)
			.setColor("RANDOM")
		msg.channel.send({embed})
  
}
  
  
  if (msg.content.toLowerCase() === prefix + 'ping') {
   let emb = new Discord.RichEmbed()
    .setColor('36393a')
    .setTitle('Pingimi mi sordun ?')
    .setDescription(`${siren}**` + client.ping + `**${siren} `);
    msg.channel.send(emb);
    };

  
  if (msg.content.toLowerCase() === prefix + 'vote') {
    let embed = new Discord.RichEmbed()
    .setDescription(`${clgngalp} 「${art1} OY」 Vermekten Kaçınmazsın Değil mi ? ${clgngalp} \n **OY VERMEK İÇİN `+`[TIKLA](https://discordbots.org/bot/532999056180510731/vote)**`)
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  
  if (msg.content.toLowerCase() === prefix + 'youtube') {
    let embed = new Discord.RichEmbed()
    .setDescription('*** https://www.youtube.com/channel/UCAVPoDncgCKQGToEx-IP94g ***')
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  
  if (msg.content === `<@${process.env.OWNER}>`) {
    msg.channel.send(`O Benim ${evet} Sahip ${evet} :)`);
  };

  
  if (msg.content.toLowerCase() === prefix + 'yapımcım') {
    let embed = new Discord.RichEmbed()
    .setDescription(`Adı: **Emre** \n Soyadı: **GÜL** \n \n Lakabı:**Emobaskan** \n \n **Discord Bilgileri** \n **Emobaskan#6513**\n\n Tam Bilgi(@) \n <@${process.env.OWNER}>`)
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  
  if (msg.content.toLowerCase() === prefix + 'yapımcı-bilgi') {
    let embed = new Discord.RichEmbed()
    .setDescription('** *destek \n *youtube \n ve \n *davet **')
    .setColor('RANDOM');

msg.channel.send(embed);
  }
  
  //------------------------------------------------
  /////////////////////////////////////////////////////
  if (msg.content.toLowerCase() === prefix + 'özür') {
    msg.channel.sendMessage('_PriviteChat_ sorunundan dolayı **özür dilerim**');
  }
  /////////////////////////////////////////////////////
  //------------------------------------------------
  
  if(msg.content === prefix + 'destek') {
  let emb = new Discord.RichEmbed()
    .setColor('RANDOM')
  .setTitle('Bunların Hepsine **Tıkla**rsan sevinirim :)')
  .setDescription('**:robot: Botu Eklemek İçin | ' + `[${cldr} TIKLA](https://discordapp.com/oauth2/authorize?client_id=532999056180510731&scope=bot&permissions=2146958847)`+'\n :robot: Bulb Bot (Diğer Botum)u Eklemek İçin | ' + `[${kumuk} TIKLA](https://discordapp.com/oauth2/authorize?client_id=546024405449310213&scope=bot&permissions=2146958591)`+'\n :link: Destek Sunucuya Katılmak İçin | ' + `[${digitalcat} TIKLA](https://discord.gg/N85JhTm)`+'\n :bust_in_silhouette: Diğer Sunucum(Sohbet Sunucum)a Katılmak İçin | ' + `[${dbear} TIKLA](https://discord.gg/mE2ybMW)`+'\n :video_game: Youtube Kanalıma Gelmek İçin | ' + `[${skd} TIKLA](https://www.youtube.com/channel/UCAVPoDncgCKQGToEx-IP94g)**`)
  msg.member.send(emb)
 }
  if (msg.content.toLowerCase() === prefix + 'destek') {
    let emb = new Discord.RichEmbed()
    .setColor('36393a')
    .setTitle('??')
    .setDescription(`${nirdah}`+'**Nerede** Diye Sorma `Özel Mesajlar`a Bak Görürsün');
    msg.channel.send(emb);
  };
  
  
  if(msg.content === prefix + 'davet') {
  let emb = new Discord.RichEmbed()
    .setColor('RANDOM')
  .setTitle('Bunların Hepsine **Tıkla**rsan sevinirim :)')
  .setDescription('**:robot: Botu Eklemek İçin | ' + `[${cldr} TIKLA](https://discordapp.com/oauth2/authorize?client_id=532999056180510731&scope=bot&permissions=2146958847)`+'\n :robot: Bulb Bot (Diğer Botum)u Eklemek İçin | ' + `[${kumuk} TIKLA](https://discordapp.com/oauth2/authorize?client_id=546024405449310213&scope=bot&permissions=2146958591)`+'\n :link: Destek Sunucuya Katılmak İçin | ' + `[${digitalcat} TIKLA](https://discord.gg/N85JhTm)`+'\n :bust_in_silhouette: Diğer Sunucum(Sohbet Sunucum)a Katılmak İçin | ' + `[${dbear} TIKLA](https://discord.gg/mE2ybMW)`+'\n :video_game: Youtube Kanalıma Gelmek İçin | ' + `[${skd} TIKLA](https://www.youtube.com/channel/UCAVPoDncgCKQGToEx-IP94g)**`)
  msg.member.send(emb)
 }
  if (msg.content.toLowerCase() === prefix + 'davet') {
    let emb = new Discord.RichEmbed()
    .setColor('36393a')
    .setTitle('??')
    .setDescription(`${nirdah}`+'**Nerede** Diye Sorma `Özel Mesajlar`a Bak Görürsün');
    msg.channel.send(emb);
  };
  
  //-------------------------------------------------------------------------------------------------------------------------------------------------------
  if (msg.content.toLowerCase() === prefix + "avatarım") {
msg.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`${fotoguin} İşte Avatarınız:`)
.setImage(`${msg.author.avatarURL} `)
.setColor("RANDOM"));
   }
if (msg.content.toLowerCase() === prefix + "özlüsöz") {
    var sans = ["Affetmek geçmişi değiştirmez ama geIeceğin önünü açar","İnsanIar seninIe konuşmayı bıraktığında, arkandan konuşmaya başIarIar","Hayattan korkmayın çocuklar;iyi ve doğru bir şeyler yaptığınız zaman hayat öyle güzel ki","Mutluluğu tatmanın tek çaresi, onu paylaşmaktır.","Küçük şeylere gereğinden çok önem verenler, elinden büyük iş gelmeyenlerdir.","Bize yeni düşmanlar lazım. Eskileri hayranımız oldular.","Asla vazgeçmeyin, kaybedenler yalnızca vazgeçenlerdir.","10 kilitli kapıdan daha güvenlidir babanın evde oluşu.","Sevmek için “yürek” sürdürmek için “emek” gerek.","Bir insanın, bir insana verebileceği en güzel hediye; ona ayırabileceği zamandır."," Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.","Kendini Ne Kadar Büyük Görürsen Gör. Bende Sadece Gözümün Gördüğü Kadarsın. Ötesi yok.","Mutlu olmayı yarına bırakmak, karşıya geçmek için nehrin durmasını beklemeye benzer ve bilirsin, o nehir asla durmaz.","Sevmek ölmektir bence,bende sevmiştim ölmeden önce..."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
      .addField(`nii ittin muittin `, `${sonuc}`)
      .setColor("RANDOM");
    return msg.channel.sendEmbed(embed);
}

if (msg.content.toLowerCase() === prefix + "kamyonarkası") {
    var sans = ["**Sevmek ölmektir bence bende sevmiştim ölmeden önce...** ","Ağır geliyorsa benimle yaşam kapı orada ikile paşam.","Yaklaşma yok olursun bulaşma toz olursun"," Laf sokarım derinden aklın oynar yerinden","Ne oldu paşam koydumu yaşam","**Doktar değilim ama HASTAM ÇOOK**","Rihanna'nın dövüldüğü,Adriana Lima'nın aldatıldığı bu Dünya'da seni yerler HATCEE","Babama \n Ben vatan borçlarımı ödemeye gidiyorum sende benim borçlarımı öde."," **Arkadaşın çok olur ama,zor günde yok olur! \n Benden sana bir akıl aklın varsa TEK TAKIL...** "," **Kalleş dostum olacağına mert düşamnım olsun** "," **Nescafe bile 3'i bir arada ama ben hala yanlızım** ","Kendini Ne Kadar Büyük Görürsen Gör. Bende Sadece Gözümün Gördüğü Kadarsın. Ötesi yok."," **Adını avucuna yaz beni hatırladıkça avucunu yalarsın** ","Öyle birini sev ki \n sen ölünce yaşamasın"," **Azrail bile ayağıma gelecekse sen neyin tribindesin ??** "];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
      .addField(`Emobaskan tarafından hazırlanmıştır. `, `${sonuc}`)
      .setColor("RANDOM");
    return msg.channel.sendEmbed(embed);
}

if (msg.content.toLowerCase() === prefix + "rusruleti") {
    var sans = ["Görünüşe Göre Oyunu **Kaybettin** ve **ÖLDÜN** :boom: :boom: :gun:","**Şanslı** Günündesin ! Hala **YAŞIYORSUN** :thumbsup:","Silahı doldurmayı unutmuşsun galiba çok heycanlısın."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    let embed = new Discord.RichEmbed()
      .addField(`:gun: `, `${sonuc}`)
      .setColor("RANDOM");
    return msg.channel.sendEmbed(embed);
}

if (msg.content.toLowerCase() === prefix + "paraçevir") {
    var sans = ["**Yazı** Geldi. **1 TL**'lik kısım","**Tura** Geldi. **ATATÜRK**'ün fotoğrad kısmı"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
      .addField(`Hopppalaa `, `${sonuc}`)
      .setColor("RANDOM");
    return msg.channel.sendEmbed(embed);
}

  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (msg.content.toLowerCase() === prefix + "osas") {
  msg.channel.send('https://media.discordapp.net/attachments/548928357132271638/564522377082306580/2xzhib.gif');
}
  if (msg.content.toLowerCase() === prefix + "osas") {
  msg.channel.send('https://www.youtube.com/watch?v=PBK_PkP5dCE');
}
  if (msg.content.toLowerCase() === prefix + "zabulaza") {
  msg.channel.send('https://media.discordapp.net/attachments/548928357132271638/564523791414329346/2xzo0h.gif');
}
  if (msg.content.toLowerCase() === prefix + "zabulaza") {
  msg.channel.send('https://www.youtube.com/watch?v=msQaOimUwcs');
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------------------------------------------------------------------------------
  
  if (msg.content.toLowerCase() === prefix + 'barsa dedim ve bu komutu kullandım ama artık ihtiyacım yok yani bu kadar ve noğta noğta değil noktaa') {
   let emb = new Discord.RichEmbed()
    .setColor('36393a')
    .setAuthor('hii')
    .setTitle('Pingimi mi sordun ?')
    .setDescription(`${siren}**` + msg.guild.roles + `**${siren}`);
    msg.channel.send(emb);
    };
  
  
  if (msg.content.toLowerCase() === prefix + 'ailemiz') {
    let emb = new Discord.RichEmbed()
    .setColor('36393a')
    .setTitle('deneyek')
    .setDescription('Aile Suncu ' + client.guilds.size + ' üyesi de aha şu ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' ama şunu çözemedim ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() );
    msg.channel.send(emb);
  };
  
  
  if (msg.content.toLowerCase() === prefix + 'lemiz') {
  if (msg.author.id !=474517276297789460) { return; }
  let mesaj = args.slice(0).join('  ');
if (!mesaj) return msg.channel.send('Birşey Yazmalısınız');
  msg.delete();
    let emb = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription( mesaj )

    msg.channel.send(emb)
};
  if (komut === 'abc') {
    let emb = new Discord.RichEmbed()
    if (msg.author.id !=474517276297789460) return msg.channel.send('hata')
    await msg.delete();
     let mesaj = args.join(' ');
    if (!mesaj) return msg.channel.send('hata')
    .setColor('RANDOM')
    .setDescription(mesaj)
    msg.channel.send(emb)
  };
  
//------------------------------------------------

});

//------------------------------------------------

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//------------------------------------------------

client.login(process.env.TOKEN);

//------------------------------------------------