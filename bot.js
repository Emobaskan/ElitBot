const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '*'

client.on('ready', () => {
  console.log(`BOTUMUZ: ${client.user.tag} GİRİŞ YAPTI!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'sa') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === prefix + 'slm') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === 'slm') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === prefix + 'selamın aleyküm') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === prefix + 'youtube') {
    msg.channel.sendMessage('**Botun yapımcısının kanalı** https://www.youtube.com/channel/UCAVPoDncgCKQGToEx-IP94g');
  }
  if (msg.content.toLowerCase() === prefix + 'davet') {
    msg.channel.sendMessage(':robot: Botun linki ⇛ https://discordapp.com/oauth2/authorize?client_id=532999056180510731&scope=bot&permissions=2146958847 \n :link: Destek sunucu ⇛ https://discord.gg/N85JhTm \n :bust_in_silhouette: Diğer sunucum(sohbet sunucum) ⇛ https://discord.gg/mE2ybMW');
  }
  if (msg.content.toLowerCase() === 'avatarım') {
    msg.reply('**niyuw niyuw niyuwwww** prefix ( * )i unuttun :(');
  }
  if (msg.content.toLowerCase() === 'özlüsöz') {
    msg.reply('**niyuw niyuw niyuwwww** prefix ( * )i unuttun :(');
  }
  if (msg.content.toLowerCase() === 'kamyonarkası') {
    msg.reply('**niyuw niyuw niyuwwww** prefix ( * )i unuttun :(');
  }
  if (msg.content.toLowerCase() === 'yardım') {
    msg.reply('**niyuw niyuw niyuwwww** prefix ( * )i unuttun :(');
  }
  if (msg.content.toLowerCase() === 'oynat') {
    msg.reply('**niyuw niyuw niyuwwww** prefix ( * )i unuttun :(');
  }
  if (msg.content.toLowerCase() === 'semboller') {
    msg.reply('**niyuw niyuw niyuwwww** prefix ( * )i unuttun :(');
  }
  if (msg.content.toLowerCase() === prefix + 'semboller') {
    msg.channel.sendMessage('Hava durumu sembolleri: \n  :sunny: :cloud: :umbrella2::snowman2: \n \n  Gülücük sembolleri: \n  :frowning2: :relaxed: ☻ ت ヅ ツ ッ シ Ü ϡ ﭢ  \n \n  Para sembolleri: \n € £ ¥ ¢ ƒ ₩ $ \n \n  Küçük sayılar: \n  ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ \n \n  Yuvarlak içinde sayılar: \n ➀➁➂➃➄➅➆➇➈➉   ➊➋➌➍➎➏➐➑➒➓ \n \n  Yuvarlak içinde harfler: \n ⒶⒷⒸⒹⒺⒻⒼⒽ ⒾⒿⓀⓁ:m:Ⓝ ⓄⓅⓆⓇⓈⓉ ⓊⓋⓌⓍⓎⓏ \n ⓐⓑⓒⓓⓔⓕⓖⓗ ⓘⓙⓚⓛⓜⓝ ⓞⓟⓠⓡⓢⓣ ⓤⓥⓦⓧⓨⓩ \n \n  Satranç taşları: \n  ♚ ♛ ♜ ♝ ♞ ♟   ♔ ♕ ♖ ♗ ♘ ♙ \n \n  El işaretleri: \n  ☚ ☛ ☜ :point_up: ☞ ☟ :v: \n \n  Çiçekler: \n  ✽ ✾ ✿ ❀ ❁ ❃ ❋ \n \n  Ok işaretleri: \n  ➩➪➫➬➭➮➯➱➹➸➷ ⇨⇦⇰ ⇱  ⇲ ⇳ ⇴ ⇵⇶ ⇷ ⇸ ⇹ ⇺ ⇻ ⇼ ⇽⇾ ⇿→:left_right_arrow: ←↑↓←↑↓:arrow_upper_left::arrow_upper_right:↱   ↲   ↳   ↴  ↵ ↶  ↷  ↸ ↹ ↺  ↻  ↼ ↽ ↾ ︷︸︾﹀arrow_right:➢➣➤➥➦➧➨➲➳➴➵➶➺➻➼➽«»:arrow_lower_right::arrow_lower_left: :arrow_up_down:➛➠➟ ➾ ↚ ↛ ↜ ↝ :leftwards_arrow_with_hook:↞ ↟↠↡ ↢ ↣ ↤ ↥   ↦ ↧   :leftwards_arrow_with_hook:  :arrow_right_hook:  ↫ ↬ ↭↮ ↯⇀ ⇁ ⇂   ⇃⇄ ⇅  ⇆ ⇇ ⇈  ⇉ ⇊  ⇋ ⇌ ⇍ ⇎ ⇏  ⇐ ⇑  ⇒ ⇓ ⇔ ⇕  ⇖ ⇗ ⇘  ⇙  ⇚ ⇛  ⇜ ⇝ ⇞  ⇟⇠ ⇡⇢ ⇣  ⇤ ⇥ ⇦ ⇧   ⇨ ⇩   ⇪   ⇫⇬  ⇭  ⇮  ⇯ ⟰ ⟱  \n \n Çeşitli sayılar: \n  θ  Ι  2  Э  Ч  Ƽ  б  ל   ȣ  ף  \n０１２３４５６７８９ \n  ૦ ١  Ձ   ૩  મ   Ƽ   6  7  Ց   ୨ \n  𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡 𝟙𝟘 \n ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩  ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳ \n  ➊  ➋  ➌ ➍  ➎  ➏  ➐  ➑ ➒ ➓  \n ⓫ ⓬ ⓭ ⓮ ⓯ ⓰ ⓱ ⓲ ⓳ ⓴  \n  ⓵ ⓶ ⓷ ⓸ ⓹ ⓺ ⓻ ⓼ ⓽ ⓾ \n KARRRRRMA KARIŞIK:  \n ♪ ♫ ♩ ♬ ♭ ♮ ♯ :relaxed: ☻ :hearts: :diamonds:  :clubs: :spades:  •  ◘  ○  ◙  ♂  ♀  ♪  ♫  ☼  ► ◄ :arrow_up_down: :bangbang: :video_game: :zzz: ▂▃▄▅▆▇█▓▒░Sembol░▒▓▇▆▅▄▃▂ :clapper: ༼･ิɷ･ิ༽   (/••)/   ヽ༼ ಠ益ಠ ༽ﾉ   (҂⌣̀⌣́)ᕤ   （｀_っ´）（ ＾∀＾）(｡◝‿◜｡)  ⊂( ・ ̫・)⊃ (*′☉.̫☉)  (◑‿◐)  〳 ‾́ ﹏ ‾́ 〵  〳◉͜ʖ ◉〵  ─=≡( ͡° ͜ʖ ͡°)  ໒( •̀ ╭ ͟ʖ╮ •́ )७  〳 ͡° Ĺ̯ ͡° 〵 (✿◠‿◠) ༼ ຈل͜ຈ༽    ᕕ( ಠ‿ಠ)ᕗ Ԋ ᧬ ᧲  ᵯ  ⁂  ߷ ༪  ༫  ༬ ᦝ ༮  ༲ ྅  ࿏ ⃠ ⁇ :keyboard: Ԏ ⦷ ⦺ ⨟ Ԑぷ ꉹꉔꉖꋔꍈꏀꑸꔞ   ⎚ Ԃ ⌘:eject:╳〠༆ ༒ ༊ ༼      ༽  Ӝ জ ඏ፨ ᚙ ᢇ ש ༗࿊࿋࿌࿉ ʬ  ʨ  ϡ ᚋ ᚌ ᚍ ᚎ ᚏ  ᚙ ᚸ ⨷ ⨇ ⨈ ᛔ ⊛⊜⊝⁈ :interrobang: ₯ ↂ ↀ  ≝ ≣ ≟ ≞ ⋰ ⋱ ⁂   ჯ   ᓬ ᕒ  ᦙ ꗠ  ⎘⎗⌫⌧⌦ϾϿ ⌗ ꖻ  ꗾ  ꡭ ꘖ ꘒ :new: :ok: :cinema: :signal_strength: :loudspeaker: :mega: :pushpin: **{BETA}**');
  }
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    msg.channel.sendMessage(' **💎 sa.slm ve selamın aleyküm komutları bota aleyküm selam cevabını verdirtir. 💎 \n 💎 :new:kamyonarkası komutu;bazı kamyon arkası sözler gösterir. 💎 \n 💎 avatarım komutu; Avatarınızın büyük foto halini gösterir 💎 \n 💎 futboloyna komutu; Topu kaleye atar. 💎 \n 💎 özlüsöz komutu; Bazı şekil sözler söyler 💎 \n 💎 semboller komutu; bazı sembolleri gösterir** __**[BETA]**__ 💎 \n ***💎 oynat {şarkı ismi} \n 1 \n 2 \n 3 \n 4 \n 5... \n durdur {şarkıyı duraklatır} \n devam {şarkıyı devam ettirir.} \n geç {[eğer varsa]sonraki şarkıya geçer} \n bitir {şarkıyı bitirir ve ses kanalından ayrılır} 💎*** \n                                                                            ↓↓ƝƠƬ↓↓ \n **Komutların başına prefix ( * )i koymayı unutmayınız.[sa slm ve selamın aleyküm komutlarında prefix ( * )i koymanıza gerek yoktur.]** ');
  }
});

client.login('NTMyOTk5MDU2MTgwNTEwNzMx.DyXcaw.PMIYDlDGyd8KtHWvEx4xwD-Zxyg');