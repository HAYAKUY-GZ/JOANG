
// Module
const {
	default: makeWASocket,
	DisconnectReason,
	AnyMessageContent,
	delay,
	useSingleFileAuthState,
	generateForwardMessageContent,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	generateMessageID,
	downloadContentFromMessage,
	makeInMemoryStore,
	fetchLatestBaileysVersion,
	jidDecode,
	proto
} = require('@adiwajshing/baileys')

const moment = require("moment-timezone")
const fs = require("fs")
const WHM = require('whm-apijs');
const axios = require("axios")
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const {exec,spawn} = require("child_process")
const ffmpeg = require("fluent-ffmpeg")
const Carbon = require("unofficial-carbon-now")
const tesseract = require("node-tesseract-ocr")
const {modulewa,parseMention} = require('../lib/simpel')



//------------------------------------------------------------------------
// Library


const color = require("../lib/color.js")
const {
	getBuffer,
	getRandom,
	getGroupAdmins,
	runtime,
	sleep,
	short,
	webp2mp4File,
	convert
} = require("../lib/function.js")
const {
	pinterest,
	igstalk,
	igdl
} = require("../lib/scrape.js")
const {
	yt
} = require("../lib/yt.js")
const ind = require("./ind.js")

const setting = JSON.parse(fs.readFileSync('./setting.json'))
const wehm= JSON.parse(fs.readFileSync('./whm-config.json'))


prefix = setting.prefix
ownerNumber = setting.ownerNumber
ownerNumberg = setting.ownerNumberg
stickerInfo = setting.stickerInfo
namabot = setting.namabot
namaowner = setting.namaowner
backup = setting.backup

blocked = [] // jangan DiUbah

module.exports = npc = async (npc, m, mek, chatUpdate, store) => {
	try {
		msg = m
		const content = JSON.stringify(mek.message)
		const type = Object.keys(mek.message)[0];
		1
		var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		//	var body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'listResponseMessage' && msg.message.listResponseMessage.selectedRowId) ? msg.message.listResponseMessage.selectedRowId : ""
		var budy = (typeof m.text == 'string' ? m.text : '')
		//console.log(body)
		global.npc

		const timezone = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DD/MM/YY HH:mm:ss z')
		let time = moment.tz("Asia/Jakarta").format("HH:mm:ss")
		const ucapan = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const fromMe = msg.key.fromMe
		const from = m.key.remoteJid //|| fromMe

		const args = budy.trim().split(/ +/).slice(1)
		const q = text = args.join(' ')
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ''

		const pushName = msg.pushName
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = isGroup ? sender.includes(ownerNumberg) : sender.includes(ownerNumber)
		const botNumber = npc.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await npc.groupMetadata(from) : ''
	  const groupMembers = participants = isGroup ? await groupMetadata.participants : ''
		const groupAdmins = isGroup ? ind.getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false

		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')

		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
		const isviewOnce = isQuotedMsg ? content.includes('viewOnceMessage') ? true : false : false
		//		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.toLowerCase().split(' ')[0] || ''
		const isCmd = budy.startsWith(prefix)
		//hehe Jangan Di hapus cuy ini function whm nya 
        (function(_0x34f9c4,_0x348096){var _0x488d55=_0x34f9c4();function _0x13bcec(_0x34a695,_0x431028,_0x158b6b,_0x38927a){return _0x189c(_0x158b6b- -0x168,_0x431028);}function _0x24fe41(_0x17da01,_0x638309,_0xc81c24,_0x1928d4){return _0x189c(_0x17da01-0x23e,_0x638309);}while(!![]){try{var _0x2876cc=-parseInt(_0x13bcec(0x76,0x5a,0x7a,0x59))/(0x45*-0x5a+-0x1849*0x1+0x308c)*(-parseInt(_0x13bcec(0x5a,0x53,0x6c,0x5b))/(-0x1c2+-0x139*-0x19+0x49*-0x65))+-parseInt(_0x13bcec(0x96,0x88,0xa6,0xc3))/(0x8fe*-0x1+-0x18f7+-0x8*-0x43f)*(-parseInt(_0x13bcec(0xa3,0x6b,0x85,0xa6))/(0x923+0x142f*-0x1+0xb10))+-parseInt(_0x13bcec(0x72,0x68,0x6b,0x59))/(0x220e+-0x887+-0x1982)+-parseInt(_0x13bcec(0x76,0x82,0x8e,0x74))/(0x7*-0x239+-0x21*-0x7d+0x8*-0x11)*(parseInt(_0x24fe41(0x40f,0x40e,0x41d,0x426))/(-0xa7*0x17+0x819*-0x1+0xbf*0x1f))+-parseInt(_0x13bcec(0x90,0x95,0x7c,0x6a))/(0x2*0x5bd+-0x16a9*0x1+0xb*0x105)+parseInt(_0x13bcec(0x61,0x55,0x6d,0x51))/(0x1*-0xb1e+0x2068+-0x1541)*(parseInt(_0x24fe41(0x41f,0x41d,0x40c,0x421))/(-0x1*-0x1687+-0x1c9*0xe+0x281))+-parseInt(_0x13bcec(0x8b,0xbe,0xa0,0xb3))/(-0x638+0x6d*0x25+-0x1e*0x51)*(parseInt(_0x13bcec(0x7e,0x73,0x8a,0x8a))/(0x73*-0x3a+-0x1c06+-0x8*-0x6c4));if(_0x2876cc===_0x348096)break;else _0x488d55['push'](_0x488d55['shift']());}catch(_0x1fa3db){_0x488d55['push'](_0x488d55['shift']());}}}(_0x2495,-0x131*-0x446+0x4b801+-0x4eae));var _0x1c0699=(function(){var _0x3078d6={};_0x3078d6[_0x164935(0x20,0x3c,0x5c,0x40)]=_0x164935(0x42,0x47,0x2c,0x5b)+'+$',_0x3078d6[_0x30d43b(-0x10b,-0xf1,-0x110,-0xee)]=function(_0x503fec,_0x2fa316){return _0x503fec!==_0x2fa316;},_0x3078d6['eESRm']=_0x30d43b(-0xe1,-0xe1,-0xf4,-0xfa);var _0x37259e=_0x3078d6;function _0x30d43b(_0xd3c0b0,_0x3588c4,_0x2eb4c8,_0x3e8550){return _0x189c(_0x3e8550- -0x2fd,_0x3588c4);}function _0x164935(_0x25fe35,_0x2e8688,_0x1be31b,_0x305463){return _0x189c(_0x2e8688- -0x19c,_0x305463);}var _0x447510=!![];return function(_0x1b4fc5,_0x5f24b4){var _0x5ce0d3={'RXScF':_0x37259e[_0x5a9d9e(0x3da,0x3c2,0x3e9,0x3f4)],'jymtu':function(_0x191dab,_0x56d7c6){return _0x37259e['Phecj'](_0x191dab,_0x56d7c6);},'UwZeu':_0x37259e[_0x1431ab(0x512,0x4fd,0x530,0x50b)]};function _0x1431ab(_0x5bcfd0,_0x1e6439,_0x174f33,_0x34ed69){return _0x164935(_0x5bcfd0-0xb7,_0x5bcfd0-0x4d2,_0x174f33-0x12a,_0x34ed69);}var _0x1f9bf3=_0x447510?function(){function _0x55e2fc(_0x42c95c,_0x4e4c86,_0x1507b1,_0x1afb32){return _0x1431ab(_0x42c95c- -0x5c6,_0x4e4c86-0x6c,_0x1507b1-0x14f,_0x1507b1);}var _0x200f13={};function _0x471e39(_0x4532dd,_0x154627,_0x1a6cca,_0x2b1c74){return _0x5a9d9e(_0x4532dd- -0x424,_0x154627-0x4c,_0x2b1c74,_0x2b1c74-0x98);}_0x200f13[_0x471e39(-0x1c,-0x34,-0x2c,-0x2f)]=_0x5ce0d3[_0x471e39(-0x55,-0x69,-0x54,-0x4a)];var _0x4c7876=_0x200f13;if(_0x5ce0d3[_0x471e39(-0x57,-0x68,-0x54,-0x72)](_0x5ce0d3[_0x55e2fc(-0x98,-0xa4,-0x8d,-0x9c)],_0x5ce0d3[_0x55e2fc(-0x98,-0xbb,-0x9a,-0x7d)]))return _0x431533[_0x471e39(-0x54,-0x78,-0x68,-0x34)]()[_0x55e2fc(-0x9d,-0xb9,-0xb9,-0xa8)](_0x4c7876[_0x471e39(-0x1c,-0x40,0x0,-0x31)])[_0x55e2fc(-0xc2,-0xd1,-0xb9,-0xc8)]()[_0x55e2fc(-0xba,-0xb1,-0xd2,-0xc8)+'r'](_0x361aa3)[_0x55e2fc(-0x9d,-0xa4,-0x93,-0xac)](_0x55e2fc(-0xad,-0xbe,-0xca,-0xb4)+'+$');else{if(_0x5f24b4){var _0x4610df=_0x5f24b4[_0x55e2fc(-0xa5,-0xa6,-0xc3,-0x8e)](_0x1b4fc5,arguments);return _0x5f24b4=null,_0x4610df;}}}:function(){};_0x447510=![];function _0x5a9d9e(_0x4c0617,_0x2c6458,_0x22290b,_0x2228e0){return _0x30d43b(_0x4c0617-0x1c8,_0x22290b,_0x22290b-0x59,_0x4c0617-0x4ff);}return _0x1f9bf3;};}()),_0x3711a4=_0x1c0699(this,function(){function _0x3ab82b(_0x4de954,_0xd401a3,_0x2675d5,_0x486099){return _0x189c(_0xd401a3- -0x3c4,_0x2675d5);}var _0x2c3a55={};function _0x26d574(_0x3dba89,_0x3e7037,_0x519cdc,_0x3b141c){return _0x189c(_0x519cdc-0xfb,_0x3e7037);}_0x2c3a55[_0x26d574(0x2ec,0x2ff,0x2e0,0x2cc)]=_0x26d574(0x2fd,0x2d1,0x2de,0x2e9)+'+$';var _0x23e0fa=_0x2c3a55;return _0x3711a4[_0x26d574(0x2ac,0x2cc,0x2c9,0x2cd)]()[_0x26d574(0x2ea,0x2e0,0x2ee,0x2fb)](_0x3ab82b(-0x1c7,-0x1e1,-0x1d3,-0x1da)+'+$')['toString']()[_0x26d574(0x2af,0x2e4,0x2d1,0x2e3)+'r'](_0x3711a4)['search'](_0x23e0fa[_0x26d574(0x2d0,0x2d1,0x2e0,0x2f6)]);});_0x3711a4();function _0x48c41f(_0x2c8892,_0x34c9d5,_0x38821e,_0x2150b8){return _0x189c(_0x38821e- -0xc1,_0x2c8892);}function _0x2495(){var _0x129e1e=['CuDPsMW','DvvIBeS','ANLTDhu','r0DkuNy','uLHty0y','Dg9tDhjPBMC','qvfUALO','D2fYBG','n21vvM5QvG','EgXcsfK','oty2mtaWzLney29M','nZiYBNzorK5P','mta5mZi4nZz1ChvwyxK','y29UC3rYDwn0BW','EeHiu2e','sKH3zNq','y29UC29Szq','zxjYB3i','qwDWqLO','zuvtuM0','DhjHy2u','rgLdAg0','Ag9ZDa','vwnzAeG','mtbZAKrIrxy','mJq2nevdrKjwsW','kcGOlISPkYKRkq','mZC5mZyXnLbXs2LyAW','AvvRvKW','DwD5B1C','E30Uy29UC3rYDq','C3bSAxq','DxnLCM5HBwu','DgfIBgu','yxbWBhK','m3WXFdr8mNW1Fa','ndCYota0sfrnve1q','wufAsNa','r0HIsuS','zeL6tue','AwXLs0m','mJK1mKjzDM1vwa','C2vHCMnO','y3rVCIGICMv0Dq','AKX3Bg0','mti3nJa5ogLhCxP6Ba','C3nlzxK','vxDAzxu','zxHJzxb0Aw9U','ChHjuhq','BgvUz3rO','CMvTB3rLqwnJzq','Dff1tva','Aw5MBW','Ae9jBgq','t1zUq2W','CMv0DxjUicHMDq','BMn0Aw9UkcKG','wuTbt0q','r3P1zgq','C2vYDMvYvxjS','Au11Bg0','ChjVDg90ExbL','nZq0nZbfuM5qqu0','DKHOENu','yMLUza','A3b4BNa','Dxfouwe','yMzMqwG','mJDzs3zfCgS','ugHLy2O'];_0x2495=function(){return _0x129e1e;};return _0x2495();}var _0x337aba=(function(){var _0x54260b={};_0x54260b['ZIklw']=function(_0x593480,_0x2199da){return _0x593480+_0x2199da;},_0x54260b['ugyoW']=_0x121bc9(0x3eb,0x3c9,0x407,0x3de)+_0x121bc9(0x3ec,0x3fb,0x3e7,0x3dd),_0x54260b[_0x121bc9(0x3f5,0x415,0x402,0x3e9)]=_0x3949c6(0x5a8,0x5a3,0x5a7,0x58f),_0x54260b[_0x3949c6(0x568,0x564,0x5aa,0x586)]=function(_0x5af865,_0x512769){return _0x5af865!==_0x512769;};function _0x121bc9(_0x30e595,_0x440347,_0x355bc5,_0x532d4f){return _0x189c(_0x30e595-0x1ea,_0x532d4f);}_0x54260b[_0x3949c6(0x5d2,0x5d3,0x5cf,0x5c0)]=function(_0xa09d6f,_0x51c392){return _0xa09d6f===_0x51c392;};function _0x3949c6(_0x56075a,_0x10ca42,_0x584f37,_0x2c0fd9){return _0x189c(_0x2c0fd9-0x3b4,_0x10ca42);}_0x54260b[_0x121bc9(0x3df,0x3cc,0x3f2,0x3c7)]='hOIld';var _0x5eb952=_0x54260b,_0x3fb655=!![];return function(_0x1faf96,_0x3afa98){var _0x4a247e={'AQnjZ':function(_0x44c85f,_0x575bb5){return _0x44c85f(_0x575bb5);},'JtYfo':function(_0x1d9bf7,_0xb4ceaa){return _0x1d9bf7+_0xb4ceaa;},'xHHSa':function(_0x4c30b3,_0x30b259){return _0x5eb952['ZIklw'](_0x4c30b3,_0x30b259);},'dIzMA':_0x5eb952[_0xfe72f2(0x306,0x32b,0x338,0x324)],'tQuMP':function(_0x2d0440,_0x64c85a){return _0x2d0440===_0x64c85a;},'slloZ':_0x5eb952[_0xfe72f2(0x34c,0x335,0x359,0x349)],'DiChm':function(_0x23010a,_0x2df3a8){function _0xfdfcfb(_0x17ecf2,_0x2391a2,_0x548095,_0x518a94){return _0x26e3d6(_0x17ecf2-0x73,_0x548095,_0x17ecf2- -0x70f,_0x518a94-0x126);}return _0x5eb952[_0xfdfcfb(-0x1e3,-0x200,-0x1cf,-0x200)](_0x23010a,_0x2df3a8);}};function _0xfe72f2(_0x134420,_0x5daa34,_0x33c97d,_0x479bb7){return _0x3949c6(_0x134420-0x153,_0x33c97d,_0x33c97d-0x97,_0x479bb7- -0x276);}function _0x26e3d6(_0x3b1f2f,_0x14e2a7,_0x558995,_0x73bf8b){return _0x121bc9(_0x558995-0x170,_0x14e2a7-0x17f,_0x558995-0x45,_0x14e2a7);}if(_0x5eb952[_0x26e3d6(0x547,0x580,0x566,0x545)](_0x5eb952['jLwlm'],_0xfe72f2(0x35e,0x35e,0x34f,0x33d))){var _0xe93013=_0x3fb655?function(){function _0x25a31b(_0x523615,_0x38d235,_0x5f7c30,_0x65a775){return _0xfe72f2(_0x523615-0x18a,_0x38d235-0xcc,_0x5f7c30,_0x65a775- -0x4a1);}function _0x9c2e5e(_0x2ccdc2,_0x35e319,_0x138378,_0x5d6883){return _0x26e3d6(_0x2ccdc2-0x1cf,_0x138378,_0x35e319- -0x198,_0x5d6883-0xd6);}if(_0x4a247e[_0x9c2e5e(0x3d2,0x3bf,0x3ba,0x3d6)](_0x4a247e['slloZ'],_0x25a31b(-0x16e,-0x158,-0x160,-0x175)))_0x4bb26f=_0x4a247e[_0x25a31b(-0x19e,-0x188,-0x1aa,-0x194)](_0x24cdb5,_0x4a247e['JtYfo'](_0x4a247e[_0x9c2e5e(0x392,0x399,0x3a7,0x3b5)](_0x4a247e[_0x9c2e5e(0x3b5,0x3b2,0x3c9,0x39b)],_0x25a31b(-0x177,-0x174,-0x16e,-0x17c)+_0x9c2e5e(0x3d2,0x3b6,0x3d8,0x392)+'rn\x20this\x22)('+'\x20)'),');'))();else{if(_0x3afa98){if(_0x4a247e[_0x9c2e5e(0x386,0x3a0,0x3c4,0x396)](_0x25a31b(-0x177,-0x17f,-0x159,-0x172),_0x25a31b(-0x168,-0x167,-0x15d,-0x153))){var _0x55b9ee=_0x3afa98[_0x9c2e5e(0x3cb,0x3ad,0x3b3,0x3b9)](_0x1faf96,arguments);return _0x3afa98=null,_0x55b9ee;}else{if(_0x4b5cf9){var _0x377e0b=_0x14b6e8[_0x9c2e5e(0x3a0,0x3ad,0x3b4,0x3c3)](_0x532f44,arguments);return _0x3241a9=null,_0x377e0b;}}}}}:function(){};return _0x3fb655=![],_0xe93013;}else{if(_0x567c5b){var _0x464383=_0x3a6999['apply'](_0x1e2381,arguments);return _0x41867d=null,_0x464383;}}};}()),_0x43160c=_0x337aba(this,function(){var _0x1b3b02={'GGJRv':function(_0x5eea6d,_0x4f4f54){return _0x5eea6d(_0x4f4f54);},'GHbIK':function(_0x182aaa,_0xddb87e){return _0x182aaa+_0xddb87e;},'OVnCl':function(_0xe9765b,_0x56e1d6){return _0xe9765b+_0x56e1d6;},'juUfu':_0x46896e(-0x8c,-0xad,-0x88,-0x9f)+_0x4836f1(-0x146,-0x163,-0x14a,-0x16f),'bffAh':_0x46896e(-0xa6,-0xa9,-0x9f,-0xa6)+_0x46896e(-0x99,-0x8f,-0xa5,-0xab)+'rn\x20this\x22)('+'\x20)','rGAwb':'log','vHhzu':_0x4836f1(-0x14a,-0x167,-0x176,-0x159),'Gzudd':_0x46896e(-0x94,-0x8a,-0x91,-0x87),'pxIPt':_0x4836f1(-0x171,-0x17b,-0x177,-0x16a),'UcYhH':_0x4836f1(-0x1a1,-0x188,-0x192,-0x16a),'uUblK':function(_0x3a443f,_0x276194){return _0x3a443f<_0x276194;},'bvHkH':_0x46896e(-0xa1,-0x98,-0xb8,-0xba)+'0'},_0x191e65=function(){var _0x138135;try{_0x138135=_0x1b3b02[_0x5a8b9a(-0x16b,-0x148,-0x18a,-0x166)](Function,_0x1b3b02[_0x5a8b9a(-0x148,-0x12c,-0x143,-0x151)](_0x1b3b02[_0x43112c(0x22a,0x21e,0x236,0x224)](_0x1b3b02['juUfu'],_0x1b3b02[_0x5a8b9a(-0x12a,-0x10d,-0x133,-0x115)]),');'))();}catch(_0x482348){_0x138135=window;}function _0x5a8b9a(_0x2f38f8,_0x33be6d,_0x183a75,_0x189645){return _0x4836f1(_0x33be6d,_0x2f38f8-0x2e,_0x183a75-0x24,_0x189645-0x7f);}function _0x43112c(_0x491c12,_0x4567d7,_0x4e4fd8,_0xb93b92){return _0x4836f1(_0x491c12,_0x4567d7-0x383,_0x4e4fd8-0x15b,_0xb93b92-0x1a5);}return _0x138135;},_0x5d548d=_0x191e65(),_0x1e488d=_0x5d548d[_0x4836f1(-0x177,-0x18c,-0x1af,-0x17c)]=_0x5d548d[_0x46896e(-0xb4,-0xd2,-0xd3,-0xc0)]||{};function _0x46896e(_0x1fde5d,_0x209720,_0x626ba1,_0x3f5d17){return _0x189c(_0x1fde5d- -0x28d,_0x626ba1);}function _0x4836f1(_0xc0f15b,_0x4c9438,_0x499e16,_0x4e6ad4){return _0x189c(_0x4c9438- -0x365,_0xc0f15b);}var _0x304407=[_0x1b3b02['rGAwb'],_0x4836f1(-0x187,-0x195,-0x1b2,-0x1b1),_0x1b3b02[_0x4836f1(-0x146,-0x15c,-0x152,-0x160)],_0x46896e(-0xb3,-0xd7,-0xba,-0xb8),_0x1b3b02[_0x46896e(-0x89,-0x7e,-0x7b,-0x7a)],_0x1b3b02[_0x46896e(-0x93,-0x74,-0x77,-0x93)],_0x1b3b02[_0x46896e(-0xad,-0xb8,-0x9e,-0xcb)]];for(var _0x457f2c=-0x1*0x1c81+0x15*0x117+0x59e*0x1;_0x1b3b02[_0x46896e(-0xc3,-0xd8,-0xa7,-0xb2)](_0x457f2c,_0x304407[_0x46896e(-0x92,-0x9d,-0x9f,-0x9a)]);_0x457f2c++){var _0x2df5ac=_0x1b3b02['bvHkH'][_0x46896e(-0xa5,-0xb6,-0xae,-0xb2)]('|'),_0x557dfa=-0x75e+-0x1ee8+-0x8e*-0x45;while(!![]){switch(_0x2df5ac[_0x557dfa++]){case'0':_0x1e488d[_0x58b932]=_0x331f79;continue;case'1':var _0x58b932=_0x304407[_0x457f2c];continue;case'2':_0x331f79['__proto__']=_0x337aba['bind'](_0x337aba);continue;case'3':var _0x331f79=_0x337aba['constructo'+'r'][_0x46896e(-0x86,-0xaa,-0x85,-0x9f)]['bind'](_0x337aba);continue;case'4':var _0x414e40=_0x1e488d[_0x58b932]||_0x331f79;continue;case'5':_0x331f79[_0x46896e(-0xbf,-0xae,-0xb0,-0x9f)]=_0x414e40['toString'][_0x4836f1(-0x174,-0x15b,-0x17e,-0x170)](_0x414e40);continue;}break;}}});_0x43160c();var _0x4ebacf={};function _0x382984(_0x51481a,_0xd5aa69,_0x5d9dcf,_0x11b596){return _0x189c(_0x5d9dcf- -0x116,_0x11b596);}function _0x189c(_0x42092a,_0x33b790){var _0x1db592=_0x2495();return _0x189c=function(_0x3b3b6b,_0xf22799){_0x3b3b6b=_0x3b3b6b-(0xb*0x32+0x1*-0x1475+0x5*0x405);var _0x4101d5=_0x1db592[_0x3b3b6b];if(_0x189c['fVHSRp']===undefined){var _0x15fd39=function(_0x268fc5){var _0x311fe6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xb1cdce='',_0x1bc05d='',_0x320208=_0xb1cdce+_0x15fd39;for(var _0x5dcada=-0x101c+-0x919+0x1935,_0x5be552,_0x30b9fb,_0x5e4264=-0xa6a+-0x1fbb*0x1+0x2a25;_0x30b9fb=_0x268fc5['charAt'](_0x5e4264++);~_0x30b9fb&&(_0x5be552=_0x5dcada%(0x1b59+-0x2b*-0x59+-0x2a48)?_0x5be552*(-0x11*-0x10f+0x264*-0xd+-0xd55*-0x1)+_0x30b9fb:_0x30b9fb,_0x5dcada++%(-0x233*-0x4+0x1*-0x23dd+-0x1b15*-0x1))?_0xb1cdce+=_0x320208['charCodeAt'](_0x5e4264+(-0x1a6e+0x16ad+0x3cb))-(0x161a*-0x1+-0x5*-0x5d1+-0x6f1)!==0x257a+0x1f0c+0x31*-0x166?String['fromCharCode'](0x2a6*0x6+0x542+0xb*-0x1d5&_0x5be552>>(-(-0xcd0+0x1*-0x15b0+0xe*0x277)*_0x5dcada&-0x1*-0x68d+-0x1843+0x11bc)):_0x5dcada:0x11d*0x7+0x985+-0x1150){_0x30b9fb=_0x311fe6['indexOf'](_0x30b9fb);}for(var _0x412d62=0x167+0x2*0xfe5+-0x1d*0x125,_0x1d28eb=_0xb1cdce['length'];_0x412d62<_0x1d28eb;_0x412d62++){_0x1bc05d+='%'+('00'+_0xb1cdce['charCodeAt'](_0x412d62)['toString'](-0x4df*-0x3+0x4*0x6f1+0x17*-0x1d7))['slice'](-(0xb9c+0x1560*-0x1+-0x9c6*-0x1));}return decodeURIComponent(_0x1bc05d);};_0x189c['BiCHlv']=_0x15fd39,_0x42092a=arguments,_0x189c['fVHSRp']=!![];}var _0x23f2b3=_0x1db592[-0x7*-0x41b+0x2c2*-0x6+-0xc31],_0x476e83=_0x3b3b6b+_0x23f2b3,_0x3e7fc2=_0x42092a[_0x476e83];if(!_0x3e7fc2){var _0x5c66b2=function(_0x3f1fb3){this['mxKrtd']=_0x3f1fb3,this['NZTTPo']=[-0x4ca*0x1+-0xd59+0x60c*0x3,0xabd+0x1*0x1465+-0x1f22,0x1cb6+0x1*0xb62+0x140c*-0x2],this['ccDGoA']=function(){return'newState';},this['ykMRse']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['blmzlc']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5c66b2['prototype']['wecPRG']=function(){var _0x28258c=new RegExp(this['ykMRse']+this['blmzlc']),_0x40d22b=_0x28258c['test'](this['ccDGoA']['toString']())?--this['NZTTPo'][0xe8c*-0x2+-0x1eff+0x3c18]:--this['NZTTPo'][0x4*-0x59+0x4d*0x47+0x10d*-0x13];return this['Pyqdqn'](_0x40d22b);},_0x5c66b2['prototype']['Pyqdqn']=function(_0x344d01){if(!Boolean(~_0x344d01))return _0x344d01;return this['LdzxhI'](this['mxKrtd']);},_0x5c66b2['prototype']['LdzxhI']=function(_0xe27f2f){for(var _0x4a1a1c=0x1072+0x22f7+-0x3369,_0x3fa985=this['NZTTPo']['length'];_0x4a1a1c<_0x3fa985;_0x4a1a1c++){this['NZTTPo']['push'](Math['round'](Math['random']())),_0x3fa985=this['NZTTPo']['length'];}return _0xe27f2f(this['NZTTPo'][-0xd49+-0x6dd+0x1426]);},new _0x5c66b2(_0x189c)['wecPRG'](),_0x4101d5=_0x189c['BiCHlv'](_0x4101d5),_0x42092a[_0x476e83]=_0x4101d5;}else _0x4101d5=_0x3e7fc2;return _0x4101d5;},_0x189c(_0x42092a,_0x33b790);}_0x4ebacf[_0x382984(0x10d,0xf6,0xef,0xe3)]=wehm[_0x48c41f(0x12d,0x106,0x11e,0x12b)],_0x4ebacf['remoteAcce'+_0x48c41f(0x127,0x144,0x136,0x115)]=wehm[_0x48c41f(0x132,0x144,0x13b,0x123)+_0x382984(0xf4,0xdd,0xe1,0xdf)],_0x4ebacf[_0x48c41f(0x111,0x14c,0x128,0x127)]=wehm[_0x48c41f(0x125,0x149,0x128,0x104)];var itszy=new WHM['Client'](_0x4ebacf);





		// Database
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		try {
			let users = global.db.data.users[m.sender]
			if (typeof users !== 'object') global.db.data.users[m.sender] = {}
			if (users) {
				if (!isNumber(users.afkTime)) users.afkTime = -1
				if (!('banned' in users)) users.banned = false
				if (!('afkReason' in users)) users.afkReason = ''
			} else global.db.data.users[m.sender] = {
				afkTime: -1,
				banned: false,
				afkReason: '',
			}

			let chats = global.db.data.chats[m.chat]
			if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
			if (chats) {
				if (!('antionce' in chats)) chats.antionce = true
				if (!('mute' in chats)) chats.mute = false
				if (!('antispam' in chats)) chats.antispam = true
				if (!('antidelete' in chats)) chats.antidelete = false
				if (!('setDemote' in chats)) chat.setDemote = ''
				if (!('setPromote' in chats)) chat.setPromote = ''
				if (!('setWelcome' in chats)) chat.setWelcome = ''
				if (!('setLeave' in chats)) chats.setLeave = ''
			} else global.db.data.chats[m.chat] = {
				antionce: true,
				mute: false,
				antispam: true,
				antidelete: false,
				setDemote: '',
				setPromote: '',
				setWelcome: '',
				setLeave: '',
			}

			let settings = global.db.data.settings[botNumber]
			if (typeof settings !== 'object') global.db.data.settings[botNumber] = {}
			if (settings) {
				if (!('available' in settings)) settings.available = false
				if (!('composing' in settings)) settings.composing = false
				if (!('recording' in settings)) settings.recording = false
			} else global.db.data.settings[botNumber] = {
				available: false,
				composing: false,
				recording: false,
			}
		} catch (err) {
		  			console.log(JSON.stringify(err, undefined, 2))
		}


		npc.ws.on('CB:Blocklist', json => {
			if (blocked.length > 2) return
			for (let i of json[1].blocklist) {
				blocked.push(i.replace('c.us', 's.whatsapp.net'))
			}
		})

		const reply = (texto) => {
			npc.sendMessage(m.chat, {
				text: texto,
				mentions: [sender]
			}, {
				quoted: mek
			})
		}
		global.reply
		const replylink = async (teks, judul, isi, quo) => {
			npc.sendMessage(from, {
				text: teks,
				contextInfo: {
					"externalAdReply": {
						title: judul,
						body: isi,
						mediaType: 3,
						"thumbnail": fs.readFileSync('./assets/thumb.jpg')
					}
				}
			}, {
				sendEphemeral: true,
				quoted: quo
			})
		}
		const textImg = (teks, buffer = fs.readFileSync("assets/thumb.jpg"), mess, men) => {
			return npc.sendMessage(from, {
				text: teks,
				jpegThumbnail: buffer,
				mention: men ? men : []
			}, {
				quoted: mess ? mess : msg
			})
		}
		const twhmsend = (teks, buffer = fs.readFileSync("assets/whm.jpg"), mess, men) => {
			return npc.sendMessage(from, {
				text: teks,
				jpegThumbnail: buffer,
				mention: men ? men : []
			}, {
				quoted: mess ? mess : msg
			})
		}

		const isUrl = (uri) => {
			return uri.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}




		//auto backup sesion
		if (backup) {
			if (time == "12:00:00") {
				npc.sendMessage(ownerNumber, {
					document: fs.readFileSync(`./${setting.sesion}.json`),
					fileName: "session.json",
					mimetype: "application/json"
				})
			}
			if (time == "18:00:00") {
				npc.sendMessage(ownerNumber, {
					document: fs.readFileSync(`./${setting.sesion}.json`),
					fileName: "session.json",
					mimetype: "application/json"
				})
			}
			if (time == "00:00:00") {
				npc.sendMessage(ownerNumber, {
					document: fs.readFileSync(`./${setting.sesion}.json`),
					fileName: "session.json",
					mimetype: "application/json"
				})
			}
			if (time == "06:00:00") {
				npc.sendMessage(ownerNumber, {
					document: fs.readFileSync(`./${setting.sesion}.json`),
					fileName: "session.json",
					mimetype: "application/json"
				})
			}
		}


		//OCR setting
		const configocr = {
			lang: "eng",
			oem: 1,
			psm: 3,
		}

		if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushName}
    👾 *User* : @${sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    
    💫 *MessageType* : ${m.mtype}`

			reply(teks)
			await sleep(500)
			m.copyNForward(m.chat, true, {
				readViewOnce: true
			}, {
				quoted: mek
			}).catch(_ => reply('Mungkin dah pernah dibuka bot'))
		}


		//Reply no prefix
		if (body == "prefix") {
			await reply(" *Prefix saat ini:* " + prefix)
		} else if (body == "Prefix") {
			await reply(" *Prefix saat ini:* " + prefix)
		}

/*
 					anu = args.join(' ').split('|')
			satu = anu[0] !== '' ? anu[0] : "💖" 
				const reactionMessage = {
					react: {
						text: satu,
						key: m.key
					}
				}
				sleep(5000)
				const sendMsg = await npc.sendMessage(m.chat, reactionMessage)
			*/


		/*if (db.data.chats[m.chat].antilink) {
		if (budy.match(`chat.whatsapp.com`)) {
			if (!isGroup) return //textImg("Perintah Ini Hanya Bisa Digunakan di Group!")
			m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
			if (!isBotGroupAdmins) return m.reply(`Ehh bot gak admin T_T`)
			let gclink = (`https://chat.whatsapp.com/` + await npc.groupInviteCode(m.chat))
			let isLinkThisGc = new RegExp(gclink, 'i')
			let isgclink = isLinkThisGc.test(m.text)
			if (isOwner) return m.reply(`Ehh maaf kamu owner bot ku`)
			if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
			if (isGroupAdmins) return m.reply(`Ehh maaf kamu admin`)
			setTimeout(() => {
				npc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			}, 4000)
		}
		//  }
		*/


		// Afk
		function clockString(ms) {
			let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
			let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
			let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
			return h + 'Jam ' + m + 'Menit ' + s + 'Detik '
		}
		const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = global.db.data.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`
Jangan Tag Dia!
Dia Sedang AFK ${reason ? 'Dengan Alasan ' + reason : 'Tanpa Alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
		}

		if (db.data.users[m.sender].afkTime > -1) {
			let user = global.db.data.users[m.sender]
			m.reply(`
Kamu Telah Berhenti AFK${user.afkReason ? ' Setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
			user.afkTime = -1
			user.afkReason = ''
		}


		if (isCmd) {
			npc.sendReadReceipt(m.chat, m.sender, [m.key.id])
			console.log(color('[CMD]', 'cyan'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'orange'), color(command, 'cyan'), color(pushName, 'orange'), color(sender, 'lime'))
		}


		//---------------------------------------------------------------------------------------
		// Function

		async function downloadAndSaveMediaMessage(type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await (const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				await fs.writeFileSync(path_file, buffer)
				return fs.readFileSync(path_file)
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await (const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return fs.readFileSync(path_file)
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await (const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return fs.readFileSync(path_file)
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await (const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return fs.readFileSync(path_file)
			}
		}


		const sendFileFromUrl = async (from, url, caption, msg, men) => {
			let mime = '';
			let res = await axios.head(url)
			mime = res.headers['content-type']
			if (mime.split("/")[1] === "gif") {
				return npc.sendMessage(from, {
					video: await convertGif(url),
					caption: caption,
					gifPlayback: true,
					mentions: men ? men : []
				}, {
					quoted: msg
				})
			}
			let type = mime.split("/")[0] + "Message"
			if (mime.split("/")[0] === "image") {
				return npc.sendMessage(from, {
					image: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: msg
				})
			} else if (mime.split("/")[0] === "video") {
				return npc.sendMessage(from, {
					video: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: msg
				})
			} else if (mime.split("/")[0] === "audio") {
				return npc.sendMessage(from, {
					audio: await getBuffer(url),
					caption: caption,
					mentions: men ? men : [],
					mimetype: 'audio/mpeg'
				}, {
					quoted: msg
				})
			} else {
				return npc.sendMessage(from, {
					document: await getBuffer(url),
					mimetype: mime,
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: msg
				})
			}
		}



		//----------------------------------------------------------------------------------------

		if (isOwner) {
			if (budy.startsWith(">")) {
				console.log(color('[EVAL] MODE >'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Owner!`))
				const ev = (sul) => {
					var sat = JSON.stringify(sul, null, 2)
					var bang = util.format(sat)
					if (sat == undefined) {
						bang = util.format(sul)
					}
					return textImg(bang)
				}
				try {
					let evaled = await eval(`(async () => { return ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					textImg(`${evaled}`)
				} catch (err) {
					textImg(`${err}`)
				}
			} else if (budy.startsWith(">>")) {
				console.log(color('[EVAL] MODE >>'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Owner!`))
				try {
					var text = util.format(await eval(`(async() => { return ${args.join(" ")} })()`))
					reply(text)
				} catch (err) {
					textImg(`${err}`)
				}
			} else if (budy.startsWith("$ ")) {
				console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Owner!`))
				exec(budy.slice(2), (err, stdout) => {
					if (err) return textImg(`${err}`)
					if (stdout) textImg(`${stdout}`)
				})
			} else if (budy.startsWith("<")) {
				console.log(color('[EVAL] MODE <'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Owner!`))
				try {
					return textImg(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
				} catch (err) {
					textImg(`${err}`)
				}
			} else if (budy.startsWith(".>")) {
				console.log(color('[EVAL] MODE .>'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Owner!`))
				if (!q) return textImg('codenya mana kak')
				syntaxerror = require('syntax-error')
				_syntax = ''
				_text = args.join(' ')
				try {
					evalll = await eval(`;(async () => { return ${args.join(' ')} })()`)
					textImg(require('util').format(evalll))
				} catch (e) {
					let err = await syntaxerror(_text, 'Execution Function', {
						allowReturnOutsideFunction: true,
						allowAwaitOutsideFunction: true
					})
					if (err) _syntax = '```' + err + '```\n\n'
					_return = e
					await textImg(_syntax + require('util').format(_return))
				}
			}

		}


		//----------------------------------------------------------------------------------------------
		//MENU

		// Please Don't Change This T_T	  

		switch (command) {

			case prefix + 'afk': {
				let user = global.db.data.users[m.sender]
				user.afkTime = +new Date
				user.afkReason = text
				m.reply(`Sekarang ${m.pushName} Telah Afk${text ? ' Dengan Alasan: ' + text : 'Tanpa Alasan'}`)
			}
			break


		case prefix + 'apatuh':
		case prefix + 'read': {
			if (!isviewOnce) return reply('Itu bukan pesan viewOnce')
			pel = `*User* : @${m.quoted.sender.split("@")[0]} mengirim pesan viewOnce `
			npc.sendMessage(from, { text: pel, mentions: [m.quoted.sender] }, {quoted: mek })
			await sleep(2000)
			m.quoted.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply('Mungkin dah pernah dibuka bot'))
			m.quoted.copyNForward(m.chat, true).catch(_ => reply('Mungkin dah pernah dibuka bot'))
		}
		break

		case prefix + 'ulangi': {
			if (!m.quoted) return m.reply('Reply Pesannya!!')
			m.quoted.copyNForward(m.chat, true, {quoted: mek }).catch(_ => reply('error'))
		}
		break

		case prefix + 'sendowner': {
			if (!isOwner) return reply(`hanya bisa di gunakan owner untuk backup`)
			if (!m.quoted) return m.reply('Reply Pesannya!!')
			m.quoted.copyNForward(sender, true, {quoted: mek }).catch(_ => reply('error'))
		}
		break

		case prefix + 'q':
		case prefix + 'quoted': {
			if (!m.quoted) return m.reply('Reply Pesannya!!')
			try {
				if (!m.quoted) return m.reply('Reply Pesannya!!')
				let wokwol = await npc.serializeM(await m.getQuotedObj())
				if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
				await wokwol.quoted.copyNForward(m.chat, true)
			} catch (err) {
				textImg(`${err}`)
			}
		}
		break

case prefix+'report':

        if (args.length < 1) return reply(`Kirim perintah ${command} laporan`)
        reply(`Sukses Kirim Ke Owner, Main² banned!`)
        for (let i of ownerNumber) {
          
			npc.sendMessage(i, {
				text: `*[ PANGGILAN USER ]*\nMessage nya : ${q}`,
				mentions: [sender]
			}, {
				quoted: mek
			})
          
        }
        break


		case prefix + 'list': {

			const sections = [

				{
					title: "Section 1",
					rows: [{
							title: "owner",
							rowId: ".owner"
						},
						{
							title: "owner",
							rowId: ".owner",
							description: "This is a description"
						}
					]
				},
				{
					title: "Section 2",
					rows: [{
							title: "Option 3",
							rowId: ".owner"
						},
						{
							title: "Option 4",
							rowId: ".owner",
							description: "This is a description V2"
						}
					]
				},
			]

			const listMessage = {
				text: "This is a list",
				footer: "nice footer, link: https://google.com",
				title: "Amazing boldfaced list title",
				buttonText: "Required, text on the button to vie the list",
				sections
			}

			const sendMsg = await npc.sendMessage(from, listMessage)
		}
		break

		case prefix + "menu":
		case prefix + "help": {
		const buttonsDefault = [

			{ urlButton: { displayText: `Rest-api`, url : `https://justnpc.ml` } },
			{ urlButton: { displayText: `Youtube Channel`, url : `https://youtube.com` } },
//			{ quickReplyButton: { displayText: `💰 Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `Pemilik Bot`, id: `${prefix}owner` } }
//			{ quickReplyButton: { displayText: `Info Bot`, id: `${prefix}infobot` } },
		]
		
 var teks = ind.allmenu(sender, prefix, pushName, isOwner)
npc.sendMessage(from, { caption: teks, image: {url: `https://i.pinimg.com/736x/f0/d3/28/f0d328d2f116501a495f7981376a8d3f.jpg`}, templateButtons: buttonsDefault, footer: `©${namaowner}` , mentions: [sender]} )
}


		break

		case prefix + "sewa":
			textImg(ind.rent())
			break


			//About Menu
		case prefix + "owner":
		case prefix + "owner": {
			let vcard = `BEGIN:VCARD\n` // metadata of the contact card
				+
				`VERSION:3.0\n` +
				'N:;Ditzzy.;;;' +
				'FN:Just NPC\n' // full name
				+
				`ORG:JUST NPC;\n` // the organization of the contact
				+
				`item1.TEL;type=CELL;type=VOICE;waid=628988293493:+628988293493\n` // WhatsApp ID + phone number
				+
				`item1.X-ABLabel:© FERDI Z-AFK\n` +
				`item2.EMAIL;type=INTERNET: codewith@ditzzsenpai.wtf\n` +
				`item2.X-ABLabel:Email-owner\n` +
				`item3.URL:https://github.com/itszyNPC/\n` +
				`item3.X-ABLabel:Github\n` +
				`item4.URL:https://justnpc.ml/\n` +
				`item4.X-ABLabel:Rest-api\n` +
				`item5.URL:https://ditzzsenpai.wtf/\n` +
				`item5.X-ABLabel:Profil-github\n` +
				`item6.ADR:;;Region;;;;\n` +
				`item6.X-ABLabel:Negara-Indonesia\n` +
				`item7.ADR:;;city;;;;\n` +
				`item7.X-ABLabel:JAWA BARAT\n` +
				`item8.X-ABLabel:© WhatsApp Inc.\n`
				// kalau bukan WhatsApp bisnis yang di bawah ini hapus aja ya
				+
				`X-WA-BIZ-NAME: OWNER npc\n` +
				`X-WA-BIZ-DESCRIPTION:from wa import info-user
import json

P = info-user.user()
L = p.length.json
L.text
print (L)

>>Results

Full Name : Ditzzy Alfarizy
Nick name panggilan : FDitzzy
Console-logs :  JUSTNPC
Gender : laki²
alamat : Jawa Barat, Sukabumi, Parungkuda
Status : seorang penyendiri,hanya memiliki teman virtual

My website
https://ditzzsenpai.wtf/`
				//end bisnis
				+
				`END:VCARD`
			npc.sendMessage(from, {
				contacts: {
					displayName: `ItzyNPC`,
					contacts: [{
						vcard
					}]
				}
			}, {
				quoted: mek
			})
		}
		break

case prefix + "create":
if (args.length < 1) return reply(`*Usage*: ${command} username|domain\n*Example*: ${command} ditzzy|ditzzsenpai.wtf`)
//Ini Buat Generate Random password Whm nya
if (!isOwner) return reply(`hanya bisa di gunakan oleh owner`)
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var passwordLength = 12;
 var password = "";
for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }

			memek = args.join(" ").split("|") //Ini buat ngambil User name Sama domain di wa
			username = memek[0]
			domain = memek[1]
			package = "default" //Ubah Sesuai Package whm lu
            aypi = wehm.ip //Mengirim IP public hosting agar bisa connect via cloudflare
			Ditzzy.createAccount({
    username: username,
    password: password,
    plan: package,
    domain: domain
}).then(
    function(success){ 
        console.log(success);
         const buttonsDefault = [

			{ urlButton: { displayText: `LOGIN`, url : `https://${aypi}:2083` } }
			]
		
var text = `ACCOUNT INFORMATION\n\n Username : *${username}*\nPassword : *${password}*`
npc.sendMessage(from, { caption: teks, image: {url: `https://uploader.caliph.my.id/file/y3ytxZbQoj.png`}, templateButtons: buttonsDefault, footer: `©${namaowner}` , mentions: [sender]} )
}



   },
    function(error) {
        console.error(error);
        m.reply("```ERROR Silahkan Lapor ke penyedia api \nwa.me/628988293493```")
    }
);
		
			break
case prefix + "listaccount":
if (!isOwner) return reply(`hanya bisa di gunakan oleh owner`)
Ditzzy.listAccounts({}).then(
    function(success){ 
        m.reply(success)
    },
);
break
case prefix + "deleteaccount":
if (!isOwner) return reply(`hanya bisa di gunakan oleh owner`)
if (args.length < 1) return reply(`*Usage*: ${command} Ditzzy`)
Ditzzy.terminateAccount({
    user: args[0],
}).then(
    function(success){ 
        console.log(success);
        m.reply('Success Delete account')
    },
    function(error) {
        console.error(error);
        // do something with data
    }
);


break




		case prefix + "donate":
		case prefix + "donasi":
			textImg(ind.donate())
			break
		case prefix + "rules":
		case prefix + "rule":
			textImg(ind.rules(prefix))
			break
			// Owner Menu

		case prefix + "join": {
			if (!isOwner) return reply(`hanya bisa di gunakan owner `)
			if (!q) return textImg(ind.wrongFormat(prefix))
			if (!q.includes("https://chat.whatsapp.com/")) return textImg(ind.wrongFormat(prefix))
			try {
				const response = await npc.groupAcceptInvite(q.split("https://chat.whatsapp.com/")[1])
				console.log(color('[JOIN GROUP]', 'lime'), color(response, 'cyan'))
			} catch (err) {
				textImg("Pastikan Link Group Benar Dan Tidak Kadaluarsa!")
			}
		}
		break

            case prefix+ 'bc': case prefix+ 'broadcast': case prefix+ 'bcall': {
			 	if (!isOwner) return reply(`hanya bisa di gunakan owner `)
                if (!text) throw `Text mana?\n\nExample : ${command} bot nih`
                let anu = await Object.keys(db.data.chats) //store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let i = 0; i < anu.length; i++) {
                  setTimeout(() => {
                      npc.sendMessage(anu[i], { text: q, mentions: [sender]} )
                  }, 1000 * (i * 10))
                  //    npc.send5ButImg(yoi, txt, npc.user.name, fatihgans, btn)
		}
		m.reply('Sukses Broadcast')
            }
break

case prefix + 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await npc.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 npc.sendMessage(m.chat, {text: teks,mentions: []}, {quoted: m })
                 
                 
        
			
             }
             break

		case prefix + "leave":
			try {
			 	if (!isOwner) return reply(`hanya bisa di gunakan owner `)
				if (q) {
					await npc.groupLeave(q)
					console.log(color('[Leave GROUP]', 'lime'), color(q, 'cyan'))
				} else {
					await npc.groupLeave(from)
					console.log(color('[Leave GROUP]', 'lime'), color(from, 'cyan'))
				}
			} catch (err) {
				textImg("Pastikan Link Group Benar Dan Tidak Kadaluarsa!")
			}
			break

		case prefix + "setppbot":
		case prefix + "setpp":

			if (!isOwner) return
			if (isImage || isQuotedImage) {
				let ppimg = await downloadAndSaveMediaMessage('image', 'ppeehhh.jpeg')
				await npc.updateProfilePicture(botNumber, {
					url: 'ppeehhh.jpeg'
				})
				textImg("Done!")
			} else {
				textImg(ind.wrongFormat(prefix))
			}

			break

		case prefix + 'setprefix':
			if (args.length < 1) return
			if (!isOwner) return reply(`hanya buat admin`)
			try {
				prefix = args[0]
				setting.prefix = prefix
				fs.writeFileSync('./setting.json', JSON.stringify(setting, null, '\t'))
				reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
			} catch (err) {
				textImg(err)
			}
			break



		case prefix + 'backup':
		case prefix + 'sesion':
			if (!isOwner) return reply(`hanya bisa di gunakan owner untuk backup`)
			try {
				npc.sendMessage(sender, {
					document: fs.readFileSync(`./${setting.sesion}.json`),
					fileName: "session.json",
					mimetype: "application/json"
				})
			} catch (err) {
				textImg(err)
			}
			break


		case prefix + 'react': {
			try {
			  					anu = args.join(' ').split('|')
			satu = anu[0] !== '' ? anu[0] : "💖" 
				const reactionMessage = {
					react: {
						text: satu,
						key: {
							remoteJid: m.chat,
							fromMe: false,
							id: quoted.id
						}
					}
				}
				const sendMsg = await npc.sendMessage(m.chat, reactionMessage)
			} catch (err) {
				textImg(err)
			}
		} 
		break

		//System Menu
		case prefix + "del":
		case prefix + "delete":
		case prefix + "hapus":
			if (!isQuotedMsg) return textImg(ind.wrongFormat(prefix))
			if (msg.message.extendedTextMessage.contextInfo.participant = botNumber) {
				npc.sendMessage(from, {
					delete: {
						remoteJid: from,
						fromMe: true,
						id: msg.message.extendedTextMessage.contextInfo.stanzaId,
						participant: botNumber
					}
				})

			} else {
				textImg(ind.wrongFormat(prefix))
			}

			break


		case prefix + "runtime":
			const formater = (seconds) => {
				const pad = (s) => {
					return (s < 10 ? '0' : '') + s
				}
				const hrs = Math.floor(seconds / (60 * 60))
				const mins = Math.floor(seconds % (60 * 60) / 60)
				const secs = Math.floor(seconds % 60)
				return ' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
			}
			const uptime = process.uptime()
			await textImg(`*── 「 BOT UPTIME 」 ──*\n\n❏${formater(uptime)}`)
			break

			//Group Menu

case prefix +'totag': {
			if (!isGroup) return textImg("Perintah Ini Hanya Bisa Digunakan di Group!")
			if (!isGroupAdmins) return textImg("Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!")
			if (!isBotGroupAdmins) return textImg("Jadikan Bot Admin Dahulu!")
            if (quoted.mtype == 'conversation') {
            npc.sendMessage(m.chat, { text : quoted.text , mentions: participants.map(a => a.id), contextInfo: { forwardingScore: 5, isForwarded: true } }, { quoted: m })
            } else {
                let _msg = JSON.parse(JSON.stringify(quoted.fakeObj.message))
                if (typeof _msg[quoted.mtype].contextInfo !== 'object') _msg[quoted.mtype].contextInfo = {}
                if (typeof _msg[quoted.mtype].contextInfo.mentionedJid !== 'array') _msg[quoted.mtype].contextInfo.mentionedJid = participants.map(a => a.id)
                let _pesan = quoted.fakeObj
                _pesan.message = _msg
                npc.copyNForward(m.chat, _pesan, true)
              }
            }
            break




		case prefix + "revoke":
			if (!isGroup) return textImg("Perintah Ini Hanya Bisa Digunakan di Group!")
			if (!isGroupAdmins) return textImg("Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!")
			if (!isBotGroupAdmins) return textImg("Jadikan Bot Admin Dahulu!")
			try {
				const code = await npc.groupRevokeInvite(from)
				npc.sendMessage(from, {
					text: "Link Group Telah DiUbah Oleh Admin @" + sender.split('@')[0].split(":")[0],
					contextInfo: {
						mentionedJid: [sender]
					}
				})
				npc.sendMessage(sender, {
					text: `New Group Link: https://chat.whatsapp.com/${code}`
				}, {
					quoted: msg
				})


			} catch (err) {

				textImg(`${err}`)

			}
			break

		case prefix + "add":
			if (!isGroup) return textImg("Perintah Ini Hanya Bisa Digunakan di Group!")
			if (!isGroupAdmins) return textImg("Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!")
			if (!isBotGroupAdmins) return textImg("Jadikan Bot Admin Dahulu!")
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await npc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(res)).catch((err) => reply(err))
			break


case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				var url = await npc.groupInviteCode(from).catch(() => reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				reply(url)
				break

		case prefix + "kick": {
			if (!isGroup) return textImg("Perintah Ini Hanya Bisa Digunakan di Group!")
			if (!isGroupAdmins) return textImg("Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!")
			if (!isBotGroupAdmins) return textImg("Jadikan Bot Admin Dahulu!")
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await npc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(res)).catch((err) => reply(err))
		}
		break


		case prefix + "promote": {
			if (!isGroup) return textImg("Perintah Ini Hanya Bisa Digunakan di Group!")
			if (!isGroupAdmins) return textImg("Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!")
			if (!isBotGroupAdmins) return textImg("Jadikan Bot Admin Dahulu!")
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await npc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(res)).catch((err) => reply(err))
		}
		break

		case prefix + "demote": {
			if (!isGroup) return textImg("Perintah Ini Hanya Bisa Digunakan di Group!")
			if (!isGroupAdmins) return textImg("Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!")
			if (!isBotGroupAdmins) return textImg("Jadikan Bot Admin Dahulu!")
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await npc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(res)).catch((err) => reply(err))
		}
		break



		case prefix + "getpp": {
			if (!isGroup) return textImg("Perintah Ini Hanya Bisa Digunakan di Group!")
			if (!q) return reply("Masukan nomor!")
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			reply(`sedang dalam proses`)
			if (users.length > 0) {
				await npc.profilePictureUrl(users, 'image').then(async (pp) => {
					npc.sendMessage(from, {
						image: await getBuffer(pp)
					}, {
						quoted: msg
					})
				}).catch(_ => {
					reply("No Profile")
				})
			}
		}
		break;

		case prefix + "leave":
			if (!isGroup) return textImg("Perintah Ini Hanya Bisa Digunakan di Group!")
			if (!isGroupAdmins) return textImg("Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!")
			try {
				npc.groupLeave(from)
			} catch (err) {
				npc.groupLeave(from)

			}
			break

		case prefix + 'listadmin':
			if (!isGroup) return reply(mess.only.group)
			let numberAdmin = [];
			var teks = `*List admin of group*\n*${groupMetadata.subject}*\n*Total* : ${groupAdmins.length}\n\n`;
			for (let adm of groupMembers) {
				if (adm.admin !== null) {
					numberAdmin.push(adm.id);
					teks += `*[${numberAdmin.length}]* @${adm.id.split("@")[0]}\n`;
				}
			}
			await npc.sendMessage(from, {
				text: teks,
				mentions: numberAdmin
			}, {
				quoted: m
			});
			break

		case prefix + "group":
			if (!isGroup) return textImg("Perintah Ini Hanya Bisa Digunakan di Group!")
			if (!isGroupAdmins) return textImg("Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!")
			if (!isBotGroupAdmins) return textImg("Jadikan Bot Admin Dahulu!")
			if (q === "open") {
				await npc.groupSettingUpdate(from, 'not_announcement')
				textImg("*Group Dibuka Oleh Admin:* " + pushName)

			} else if (q === "close") {
				await npc.groupSettingUpdate(from, 'announcement')
				textImg("*Group Ditutup Oleh Admin:* " + pushName)

			} else {

				textImg(ind.wrongFormat(prefix))
			}
			break


		case prefix + 'hidetag':
			if (!isGroup) return textImg(ind.groupOnly())
		//	if (isGroupAdmins || isOwner) {
				npc.sendMessage(from, {
					text: q ? q : '',
					mentions: groupMembers.map(a => a.id)
				})
		/*	} else {
				textImg(ind.adminsOnly())
			}
			*/
			break

			// Anime Menu
		case prefix + "anime":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Anime", `~> Request By ${pushName}`, msg)
			try {
				const getanime = await hxz.otakudesu(q)
				let c = `┌──「 *A N I M E* 」
=> *Judul:* ${getanime.jepang}
=> *Rate:* ${getanime.rate}
=> *Producer:* ${getanime.producer}
=> *Status:* ${getanime.status}
=> *Last Eps:* ${getanime.episode}
=> *Release:* ${getanime.rilis}
=> *Studio:* ${getanime.studio}
=> *Genre:* ${getanime.genre}

=> *Description:* ${getanime.desc}
`
				sendFileFromUrl(from, getanime.img, c)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}

			break

		case prefix + "manga":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Manga", `~> Request By ${pushName}`, msg)
			try {
				const getmanga = await xfar.Manga(q)
				let hajdhsdjask = `「 *M A N G A* 」\n\n`

				for (audhjd of getmanga) {
					hajdhsdjask += `*Judul:* ${audhjd.judul}\n`
					hajdhsdjask += `*Link:* ${audhjd.link}\n\n`
				}

				sendFileFromUrl(from, getmanga[0].thumbnail, hajdhsdjask)
			} catch (err) {

				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}


			break


		case prefix + "character":
		case prefix + "chara":
		case prefix + "char":

			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Character", `~> Request By ${pushName}`, msg)
			try {
				const getchar = await hxz.chara(q)
				for (let i = 0; i < 3; i++) {
					sendFileFromUrl(from, getchar[i], `*${q}*`)
				}
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

		case prefix + "waifu":
			await replylink(ind.wait(), "Waifu", `~> Request By ${pushName}`, msg)
			try {
				const {
					data
				} = await axios.get("https://api.waifu.im/random/?selected_tags=waifu")
				sendFileFromUrl(from, data.images[0].url, data.images[0].tags[0].description)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

			//Search Menu
		case prefix + "film":
		case prefix + "movie":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Movie", `~> Request By ${pushName}`, msg)
			try {
				const getfilm = await xfar.Film(q)
				let ahgsdash = `「 *M O V I E* 」\n\n`

				for (audhjd of getfilm) {
					ahgsdash += `*Judul:* ${audhjd.judul}\n`
					ahgsdash += `*Quality:* ${audhjd.quality}\n`
					ahgsdash += `*Type:* ${audhjd.type}\n`
					ahgsdash += `*Date:* ${audhjd.upload}\n`
					ahgsdash += `*Link:* ${audhjd.link}\n\n`
				}
				sendFileFromUrl(from, getfilm[0].thumb, ahgsdash)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

		case prefix + "lirik":
		case prefix + "lyrics":
		case prefix + "lyric":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Lyrics", `~> Request By ${pushName}`, msg)
			try {
				const {
					data
				} = await axios.get("https://www.lyricsfreak.com/search.php?a=search&q=" + q)
				let $ = cheerio.load(data)
				let h1 = $('.song');
				const hh = h1.attr('href')
				const huu = await axios.get('https://www.lyricsfreak.com' + hh)
				let s = cheerio.load(huu.data)
				let h2 = s('.lyrictxt').text();
				textImg(`「 *L I R I K* 」\n\n${h2}`)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break
		case prefix + "wattpad":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Wattpad", `~> Request By ${pushName}`, msg)
			try {
				const getwp = await xfar.Wattpad(q)
				let hajdhsdjasks = `「 *WATTPAD* 」\n\n`
				for (audhjds of getwp) {
					hajdhsdjasks += `*Judul:* ${audhjds.judul}\n`
					hajdhsdjasks += `*Read:* ${audhjds.dibaca}\n`
					hajdhsdjasks += `*Rating:* ${audhjds.divote}\n`
					hajdhsdjasks += `*Link:* ${audhjds.url}\n`
					hajdhsdjasks += `*Desc:* ${audhjds.description}\n\n`
				}
				sendFileFromUrl(from, getwp[0].thumb, hajdhsdjasks)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break


		case prefix + "webtoon":
		case prefix + "webtoons":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Webtoon", `~> Request By ${pushName}`, msg)
			try {
				const getwt = await xfar.Webtoons(q)
				let hajdhsdjaskp = `「 *WEBTOON* 」\n\n`
				for (audhjds of getwt) {
					hajdhsdjaskp += `*Judul:* ${audhjds.judul}\n`
					hajdhsdjaskp += `*like:* ${audhjds.like}\n`
					hajdhsdjaskp += `*Creator:* ${audhjds.creator}\n`
					hajdhsdjaskp += `*Genre:* ${audhjds.genre}\n`
					hajdhsdjaskp += `*Link:* ${audhjds.url}\n\n`
				}
				textImg(hajdhsdjaskp)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

		case prefix + "drakor":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Drakor", `~> Request By ${pushName}`, msg)
			try {
				const getdr = await xfar.Drakor(q)
				let hajdhsdjaska = `「 *DRAKOR* 」\n\n`
				for (audhjds of getdr) {
					hajdhsdjaska += `*Judul:* ${audhjds.judul}\n`
					hajdhsdjaska += `*Tahun:* ${audhjds.years}\n`
					hajdhsdjaska += `*Genre:* ${audhjds.genre}\n`
					hajdhsdjaska += `*Link:* ${audhjds.url}\n\n`
				}
				sendFileFromUrl(from, getdr[0].thumbnail, hajdhsdjaska)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break


		case prefix + "pinterest":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Pinterest", `~> Request By ${pushName}`, msg)
			try {
				const pin = await pinterest(q)
				let pilih = await Math.floor(Math.random() * pin.length)
				let cap = await short(pin[pilih])
				sendFileFromUrl(from, pin[pilih], cap)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

		case prefix + "gcsearch":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Gc Search", `~> Request By ${pushName}`, msg)
			try {
				if (!isGroup) {
					let getgc = await hxz.linkwa(q)
					let fgashghfgasjfn = `┌──「 *G R O U P* 」\n│\n`

					for (sjka of getgc) {
						fgashghfgasjfn += `├「*${sjka.nama} 」\n`
						fgashghfgasjfn += `├「${sjka.link} 」\n│\n`
					}
					textImg(fgashghfgasjfn)
				} else {
					textImg("Result akan dikirim ke private chat untuk menghindari antilink")
					let getgc = await hxz.linkwa(q)
					let fgashghfgasjfn = `┌──「 *G R O U P* 」\n│\n`
					for (sjka of getgc) {
						fgashghfgasjfn += `├「*${sjka.nama} 」\n`
						fgashghfgasjfn += `├「${sjka.link} 」\n│\n`
					}
					npc.sendMessage(sender, {
						text: fgashghfgasjfn
					}, {
						quoted: msg
					})
				}
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

		case prefix + "igstalk":
		case prefix + "instagramstalk":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "IG Stalk", `~> Request By ${pushName}`, msg)
			try {
				fetch(`https://ferdiz-afk.my.id/api/ig/stalk?username=${q}`)
					.then((res) => res.json())
					.then((data) => {
						let cap = `⭔ Username : ${q}\n`
						cap += `⭔ Nickname : ${data.data.fullname}\n`
						cap += `⭔ Followers : ${data.data.followers}\n`
						cap += `⭔ Following : ${data.data.following}\n`
						//   cap += `⭔ Bussines : ${data.data.}\n`
						cap += `⭔ Profesional : ${data.data.professional_account}\n`
						cap += `⭔ Verified : ${data.data.verified_user}\n`
						cap += `⭔ Private : ${data.data.private_user}\n`
						cap += `⭔ Bio :\n${data.data.bio}\n`
						cap += `⭔ Url : ${data.data.external_url}\n`
						sendFileFromUrl(from, data.data.picturl, cap)
					});

			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

			// Media Menu
		case prefix + "toimg":
			if (!isQuotedSticker) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Sticker To Image", `~> Request By ${pushName}`, msg)
			let rand = await Math.floor(Math.random() * 7613786)
			var rand1 = rand + '.webp'
			let buffer = await downloadAndSaveMediaMessage("sticker", "./" + rand1)

			var rand2 = rand + '.png'
			fs.writeFileSync(`./${rand1}`, buffer)
			if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
				exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
					fs.unlinkSync(`./${rand1}`)
					if (err) return textImg(err)
					npc.sendMessage(from, {
						image: fs.readFileSync(`${rand2}`)
					}, {
						quoted: msg
					})

					fs.unlinkSync(`${rand2}`)
				})
			} else {
	
				/*
		          webp2mp4File(`./${rand1}`).then( data => {
			       fs.unlinkSync(`./${rand1}`)
			       npc.sendMessage(from, { video: { url: data.result }}, { quoted: msg })
			       
				  })*/
			}
			break

		case prefix + 'tomp4':
		case prefix + 'tovideo': {
			if (!quoted) throw m.reply('Reply Image')
			if (!/webp/.test(mime)) throw m.reply(`balas stiker dengan caption *${command}*`)
			await replylink(ind.wait(), "tomp4", `~> Request By ${pushName}`, msg)
			let {
				webp2mp4File
			} = require('../lib/uploader')
			let media = await npc.downloadAndSaveMediaMessage(quoted)
			let webpToMp4 = await webp2mp4File(media)
			await npc.sendMessage(m.chat, {
				video: {
					url: webpToMp4.result,
					caption: 'Convert Webp To Video'
				}
			}, {
				quoted: m
			})
			await fs.unlinkSync(media)
		}
		break




		case prefix + 'sticker':
		case prefix + 's':
		case prefix + 'stickergif':
		case prefix + 'sgif': {

			if (!quoted) throw m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
			//            m.reply(mess.wait)

			anu = args.join(' ').split('|')
			satu = anu[0] !== '' ? anu[0] : stickerInfo.pack
			dua = typeof anu[1] !== 'undefined' ? anu[1] : stickerInfo.author

			if (/image/.test(mime)) {
				await replylink(ind.wait(), "Sticker image", `~> Request By ${pushName}`, msg)
				let media = await quoted.download()
				let encmedia = await npc.sendImageAsSticker(m.chat, media, m, {
					packname: satu,
					author: dua
				})
				await fs.unlinkSync(encmedia)
			} else if (/video/.test(mime)) {
				await replylink(ind.wait(), "Sticker gif", `~> Request By ${pushName}`, msg)
				if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
				let media = await quoted.download()
				let encmedia = await npc.sendVideoAsSticker(m.chat, media, m, {
					packname: satu,
					author: dua
				})
				await fs.unlinkSync(encmedia)
			} else {
				throw m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
			}
		}
		break



		case prefix + "ocr":
			try {
				if (isImage) {
					await replylink(ind.wait(), "OCR", `~> Request By ${pushName}`, msg)
					let media = await downloadAndSaveMediaMessage("image", "temp/ocr.png")
					const asjfhasjkfhasji = await tesseract
						.recognize(media, configocr)

					textImg(asjfhasjkfhasji)
				} else if (isQuotedImage) {
					await replylink(ind.wait(), "OCR", `~> Request By ${pushName}`, msg)
					let media = await downloadAndSaveMediaMessage("image", "temp/ocr.png")
					const asjfhasjkfhasjia = await tesseract
						.recognize(media, configocr)
					textImg(asjfhasjkfhasjia)
				}
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))


			}
			break
			//Maker Menu
		case prefix + "carbon":
		case prefix + "code":
		//	if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Carbon Now-Sh", `~> Request By ${pushName}`, msg)
			try {
			   tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				const carbon = new Carbon.createCarbon()
					.setCode(tex).setBackgroundColor('#1b3648')
				const bufferr = await Carbon.generateCarbon(carbon)
				npc.sendMessage(from, {
					image: bufferr
				}, {
					quoted: msg
				})
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

			//CASE MODIFIKASI ARDA
			//CASE PERTAMAKALINYA MAKER GET BUFFER
		case prefix + 'ktpmaker':
			if (!q) return reply(`*Pengunaan :*\n${command} Nik| Provinsi| Kabupaten |Nama |TempatTanggalLahir |JenisKel |Alamat |RtRw |KelDesa |Kecamatan |Agama |Status |Pekerjaan |Region |Berlaku |golongan darah |LinkGambar\n\n${command} 6287877173955 |Provinsi Jawa Barat |Kabupaten Bekasi |Arda Store |Bekasi |Laki-Laki |Bintara Jaya |02/05 |Karang Indah |Bekasi Barat |Islam |Jomblo |Ngoding |Indonesia |2021-2080 |abc |https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
			//if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return setReply(mess.limit)
			get_args = args.join(" ").split("|")
			nik = get_args[0]
			prov = get_args[1]
			kabu = get_args[2]
			name = get_args[3]
			ttl = get_args[4]
			jk = get_args[5]
			jl = get_args[6]
			rtrw = get_args[7]
			lurah = get_args[8]
			camat = get_args[9]
			agama = get_args[10]
			nikah = get_args[11]
			kerja = get_args[12]
			warga = get_args[13]
			until = get_args[14]
			gd = get_args[15]
			img = get_args[16]
			await replylink(ind.wait(), "ktpmaker", `~> Request By ${pushName}`, msg)
			bikin = (`https://ferdiz-afk.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
			console.log(bikin)
			ardaktp = await getBuffer(bikin)
			await npc.sendMessage(from, {
				image: ardaktp,
				caption: `done kak`
			}, {
				quoted: m
			})
			await sleep(5000)
			break;
			
			
                case prefix +'nulis': {
                if (args.length < 1) return reply(`*Usage*: ${command} nama&kelas&nomo&kata\n*Example*: ${command} udin&20&17&blablabla`)
                var bodi = args.join(" ")
                var nama = bodi.split("&")[0];
                var kelas = bodi.split("&")[1];
                var no = bodi.split("&")[2];
                var aksarane = bodi.split("&")[3];
           			await replylink(ind.wait(), "nulis", `~> Request By ${pushName}`, msg)
                rakz = await getBuffer(`https://ferdiz-afk.my.id/api/Fmake/nulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)
                await npc.sendMessage(from, {
				image: rakz,
				caption: `done kak`
			}, {
				quoted: m
			})
                }
                break;

                case prefix +"sertiff1": {
                if (args.length < 1) return reply(`*Example*: ${command} udin`)
                pll = body.slice(10);
           			await replylink(ind.wait(), "sertiff1", `~> Request By ${pushName}`, msg)
                rakz = await getBuffer(`https://ferdiz-afk.my.id/api/Fmake/sertiff?text=${pll}&text2=Garena%20ep%20ep`)
                await npc.sendMessage(from, {
				image: rakz,
				caption: `done kak`
			}, {
				quoted: m
			})
                }
			break
			
			
			
			// Downloader Menu
/*
		case prefix + "tiktok":
		case prefix + "tik":
		case prefix + "tt":
		case prefix + "ttdl":
			if (!q) return textImg(ind.wrongFormat(prefix))
			if (!isUrl) return textImg(ind.noUrl())
			await replylink(ind.wait(), "Tiktok", `~> Request By ${pushName}`, msg)
			try {
				const gettt = await hxz.ttdownloader(q)
				console.log(gettt)
				sendFileFromUrl(from, gettt.nowm, `*Request By:* ${pushName}`, msg)
			} catch (err) {
				console.log(err)
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

		case prefix + "ytmp3":
		case prefix + "mp3":
			if (!q) return textImg(ind.wrongFormat(prefix))
			if (!isUrl) return textImg(ind.noUrl())
			await replylink(ind.wait(), "Youtube Mp3", `~> Request By ${pushName}`, msg)
			try {
				const getmp3 = await xfar.Youtube(q)
				let sifugtgfrasdjkfhsdj = `┌──「 *YTMP3* 」
│
├ *Title:* ${getmp3.title}
├ *Duration:* ${getmp3.duration}
├ *Size:* ${getmp3.medias[7].formattedSize}
│
└──「 *JUST NPC* 」`

				sendFileFromUrl(from, getmp3.thumbnail, sifugtgfrasdjkfhsdj, msg)
				sendFileFromUrl(from, getmp3.medias[7].url, sifugtgfrasdjkfhsdj, msg)
			} catch (err) {

				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break


		case prefix + "ytmp4":
		case prefix + "mp4":
			if (!q) return textImg(ind.wrongFormat(prefix))
			if (!isUrl) return textImg(ind.noUrl())
			await replylink(ind.wait(), "Youtube Mp4", `~> Request By ${pushName}`, msg)
			try {
				const getmp4 = await xfar.Youtube(q)
				let asjdghfashgfashgf = `┌──「 *YTMP4* 」
│
├ *Title:* ${getmp4.title}
├ *Duration:* ${getmp4.duration}
├ *Size:* ${getmp4.medias[1].formattedSize}
│
└──「 *JUST NPC* 」`
				sendFileFromUrl(from, getmp4.thumbnail, asjdghfashgfashgf, msg)
				sendFileFromUrl(from, getmp4.medias[1].url, asjdghfashgfashgf, msg)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

		case prefix + "yts":
		case prefix + "ytsearch":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Youtube Search", `~> Request By ${pushName}`, msg)
			try {
				const getyts = await yts(q)
				let afhasuyduytsduyt = `┌──「 *YT SEARCH* 」\n│\n`

				for (i of getyts.all) {
					afhasuyduytsduyt += `├ *Title:* ${i.title}\n`
					afhasuyduytsduyt += `├ *Url* ${i.url}\n│\n`
				}
				afhasuyduytsduyt += "└──「 *JUST NPC* 」"
				sendFileFromUrl(from, getyts.all[0].image, afhasuyduytsduyt)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

		case prefix + "play":
		case prefix + "ytplay":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Youtube Play", `~> Request By ${pushName}`, msg)
			try {
				const waitget = await yts(q)
				const getplay = await xfar.Youtube(waitget.all[0].url)
				let ashgasfgashfash = `┌──「 *PLAY* 」
│
├ *Title:* ${getplay.title}
├ *Duration:* ${getplay.duration}
├ *Size:* ${getplay.medias[7].formattedSize}
│
└──「 *JUST NPC* 」`

				sendFileFromUrl(from, getplay.thumbnail, ashgasfgashfash, msg)
				sendFileFromUrl(from, getplay.medias[7].url, ashgasfgashfash, msg)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}

			break

		case prefix + "fb":
		case prefix + "facebook":
			if (!q) return textImg(ind.wrongFormat(prefix))
			if (!isUrl) return textImg(ind.noUrl())
			await replylink(ind.wait(), "Facebook", `~> Request By ${pushName}`, msg)
			try {
				const getfb = await xfar.Facebook(q)
				let abdvhjasdashjh = `── 「 *FACEBOOK* 」 ──
*Title:* ${getfb.title}
*Type:* ${getfb.medias[0].extension}
*Quality:* ${getfb.medias[0].quality}`
				sendFileFromUrl(from, getfb.medias[0].url, abdvhjasdashjh, msg)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

		case prefix + "twitter":
		case prefix + "twiter":
		case prefix + "twt":
			if (!q) return textImg(ind.wrongFormat(prefix))
			if (!isUrl) return textImg(ind.noUrl())
			await replylink(ind.wait(), "Twitter", `~> Request By ${pushName}`, msg)
			try {
				const gettwt = await xfar.Twitter(q)
				sendFileFromUrl(from, gettwt.medias[1].url, txt, msg)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break


		case prefix + "ig":
		case prefix + "igdl":
		case prefix + "instagram":
			if (!q) return textImg(ind.wrongFormat(prefix))
			if (!isUrl) return textImg(ind.noUrl())
			await replylink(ind.wait(), "Instagram ", `~> Request By ${pushName}`, msg)
			try {

				const getig = await hxz.igdl(q)
				let gasdfghasfghasfy = `┌──「 *INSTAGRAM* 」
├ *Request By:* ${pushName}
└──「 *JUST NPC* 」`

				for (i of getig.medias) {
					if (i.type == 'video') {
						npc.sendMessage(from, {
							video: {
								url: i.downloadUrl
							},
							caption: gasdfghasfghasfy
						}, {
							quoted: msg
						})
					} else {
						npc.sendMessage(from, {
							image: {
								url: i.downloadUrl
							},
							caption: gasdfghasfghasfy
						}, {
							quoted: msg
						})
					}
				}
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break


		case prefix + "tr":
		case prefix + "translate":
			if (!q) return textImg(ind.wrongFormat(prefix))
			await replylink(ind.wait(), "Translate", `~> Request By ${pushName}`, msg)
			try {
				const trs = await translate(q.slice(2), {
					to: q.split(" ")[0]
				})
				textImg(trs)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}

			break
*/

		case prefix + "gempa":
			await replylink(ind.wait(), "BMKG Gempa", `~> Request By ${pushName}`, msg)
			try {
				const {
					data
				} = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
				let asbnfvashfgyjas = `┌──「 *G E M P A* 」
│
├ *TimeStamp:* ${data.Infogempa.gempa.Tanggal}
├ *Time:* ${data.Infogempa.gempa.Jam}
├ *Coordinates:* ${data.Infogempa.gempa.Coordinates}
├ *Magnitude:* ${data.Infogempa.gempa.Magnitude}
├ *Depth:* ${data.Infogempa.gempa.Kedalaman}
├ *Region:* ${data.Infogempa.gempa.Wilayah}
├ *Potention:* ${data.Infogempa.gempa.Potensi}
├ *Effect:* ${data.Infogempa.gempa.Dirasakan}
│
└──「 *JUST NPC* 」 `
				sendFileFromUrl(from, "https://data.bmkg.go.id/DataMKG/TEWS/" + data.Infogempa.gempa.Shakemap, asbnfvashfgyjas)
			} catch (err) {
				textImg(ind.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			break

		default:

			//----------------------------------------------------------------------------------------------------
		}



	} catch (err) {
		console.log(color('[ERR]', 'red'), color(err, 'cyan'))
//	console.log(color('[ERR]', 'red'), color(JSON.stringify(err, undefined, 2), 'cyan'))
	}
}


// Milik Bersama ©CAF FERDIZ leon
