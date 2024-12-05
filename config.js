//davidthegod

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '2349160344248'
global.nomerowner = ["2349160344248"]

// Apikey 

global.skizo = 'David Cyril'
global.casterix = 'DeeCeeXxx'
//watermark 
global.packname = '*DAVID CYRIL*'
global.author = 'QUEEN_ANITA-V3'

// cpanel 
global.domain = 'https://' // deeceexxx
global.apikey2 = 'ptlc' // I love anita
global.capikey2 = 'ptla' // david x anita 
global.eggsnya = '15' // The id eggs used if the id is 5, just leave it, don't change it
global.location = '1' // id location


global.apilinode = ''// apikey vps account linode
global.apitokendo = ''

//database 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5 eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEcvNnVoenBIOGtkYlJBaGVBa2ZsMU56aFU4NnFGSUJuSUxpcGU4eUhsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGVFNFZ1V216TFBqMTRNZTZleE5RNGxaOER5MU01R0NPU2lETWdXbkxIQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQm9RM1hGOXFjMWlaTks0LzgwenRIT1ZRLzRpSHZYSmVGQ3NnVlNDUFhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDVUJ3VURGMU1RZ1FsS3FrcUJ1emxENFJBRTF6WFQrRWd3WVEyMW5jUlZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdIaFB1anZ3VkJxaG5vL0IvZm5lTVpYZEoveU9lRzhkVFI1Vmx4MWxJMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlxR2U1WU9RU3pPQ2k0Z3JTa2poRzRQWDAxZU1jUFNnVzRYbEk5TGpnMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0kzVGFRYTVqM2lEank5bjRvR0krRVlpamVsWnQrMlNRUWxncHFsVnlYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTRyMXpHUVV4d1VzckVtQnlNU3d0Vk5EU2ZyRTUxLzYyeVJ6MEFGdlp6VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBMc3ZwWXgrMlFodFgzcjFqa3ZrbEhsK1d1TDFEYXdXRGNGaTVyYlc1aCtWK0JWeFF4bTZoc0VrWWM2dXdMWHpML1J2dmJMbmM5ZmRYNmJia2dNNUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiI1WjJYTC9KQmdNYjA0Wm9Gdlpsdk1nY2ZYSVU4Qm5YQUdydDE5MVVXQ1o0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjAzNDQyNDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTIxMERFQ0UxMkRGRUMzQkRGMDlCNDc5RjQwMDQzOUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzM2OTEzOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE2MDM0NDI0OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNjgzRUM3OTQ2MENFOTREMDYxMjg0QTFFRTkwRkMzOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzMzY5MTM5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxX1NTbUFHVVExLW95b3ZYbkRrT21nIiwicGhvbmVJZCI6ImZkZTQwOGEyLTIyZDMtNGY4Zi04NGRiLTUxNjZhY2Y0OTcwNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvK2phOCs1eHYzMGhPb3NwUWNtU0l3dnZmejg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajN4Z29qTjl6S3YzUlFtVW9vbmVqaWduVExNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhZVDVDQlNFIiwibWUiOnsiaWQiOiIyMzQ5MTYwMzQ0MjQ4OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGVtaSBNZWRpYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnVQcThRRUVKKzZ4TG9HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoiclh1dWswZWVNYllBYjd4OGd0UzhJT1dZdHV5M0tjQjlKMWVqUDJYQjFuWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUzZYb3UrWXI0d0RDejEyeUEycm5Fc3NMWHZha1BPR3JYNS93ZVBCQi9YZzMvWGduYkNJbS9qNnhsMDE1Z0xleGNQMGxMeDd4dXZnc2NZRzJnaVROREE9PSIsImRldmljZVNpZ25hdHVyZSI6Ijh1MEtNQnZkTlNaelo0WlF1ZlJjMzRrR0twa3FRWUR1S0JPZXF0WGJaZ2x5U3ZKWnFaSU0zZ3phRVV3QVJiTXdaTGdZeHFGbFA1a2NNVDFYQXVLc0F3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE2MDM0NDI0ODo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmExN3JwTkhuakcyQUcrOGZJTFV2Q0RsbUxic3R5bkFmU2RYb3o5bHdkWjIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzMzNjkxMzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRUMzIn0=
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.autoViewStatus = true;       //make true to view statuses
global.unavailable = true;     
//to show your real presence  
global.available = false;   
// to show always online  
global.autoreadmessages = false;   
///To always read messages
global.chatbot = false;
global.autoreact = false;

global.welcome = false;

global.prefix = '.';

global.autobio = false;

global.antilink = false;

global.antilinkkick = false;

global.antilinkwarn = false;

//_____________//
// Don't change it
global.antibot = false
//—————「 Deadline 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
