global.owner = ['6289524664142']  
global.mods = ['6289524664142'] 
global.prems = ['6289524664142']
global.nameowner = 'Yamira Owner'
global.numberowner = '6289524664142' 
global.mail = 'jayaxyz16@gmail.com' 
global.gc = 'https://whatsapp.com/channel/0029VaIEufDK0IBrsQWOCO3g'
global.instagram = 'https://instagram.com/prm2.0'
global.wm = '© Yamira'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'YamiraBotz'
global.author = 'wa.me/6285852189768'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '3' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'B9Bl7dH6' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'B9Bl7dH6' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
