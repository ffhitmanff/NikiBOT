let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [COMINGSOON]
│ • Indosat [085891074983]
│ • Gopay [085718488041]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285891074983
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
