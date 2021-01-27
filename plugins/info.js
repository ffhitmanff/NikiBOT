let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Niki Ganz
╠➥ Script: @NikiGanz
║
╠➥ Github: https://github.com/ffhitmanff/NikiBOT
╠➥ Instagram: @niki_gans1
╠➥ YouTube: COMINGSOON!
║
╠═〘 Thanks To 〙 ═
╠➥ Bot Niki Ganz
╠➥ Niki
╠➥ SB JB NIKI
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Indosat: 0858-9107-4983
╠➥ Tsel: COMINGSOON
╠➥ Gopay: 0857-1848-8041
║
║>Request? Wa.me/6285891074983
║
╠═〘 BOT NIKI GANZ 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

