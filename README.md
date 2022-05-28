# bot-whatsapp


<p align="center">
<img src="https://github.com/itszyNPC.png" width="128" height="128"/>
</p>


<p align="center">
  <a href="//github.com/itszyNPC/whm-bot">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=itszyNPC&repo=whm-bot&theme=tokyonight" />
   </a>
</p>
<p align="center">
<a href="//github.com/itszyNPC"><img src="https://img.shields.io/badge/Author-ItszyNPC-red.svg?style=for-the-badge&logo=github"/><a/>
</p>
<p align="center">
<a href="https://javascript.com"><img src="https://img.shields.io/badge/Made%20With-javascript-cyan.svg?style=for-the-badge&logo=javascript"/><a/>
</p>
<p align="center">
<a href="https://whmjs.ditzzlabs.tech"><img src="https://img.shields.io/badge/Library%20WHMJS-crimson.svg?style=for-the-badge&logo=typescript"/><a/>
</p>

# Cara Penginstalan

# INGFO
```
 Fitur Whm Masih Beta Belum gw test awowkwok:v
```
# Api Request
<a href="https://whmjs.ditzzlabs.tech">https://whmjs.ditzzlabs.tech</a>
or
<a href="https://idk.ditzzsenpai.wtf/">https://idk.ditzzsenpai.wtf/</a>



# Termux
```bash
> pkg install git -y
> git clone https://github.com/itszyNPC/whm-bot
> cd bot-whatsapp
> bash install.sh
> node index
```

# Ubuntu
```bash
> sudo apt install git -y
> sudo git clone https://github.com/itszyNPC/whm-bot
> sudo cd bot-whatsapp
> sudo bash root.sh
> sudo node index
```

# Windows

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://www.gyan.dev/ffmpeg/builds/)
* [Tesseract](https://clp.pw/tesseract)
* Any text editor

## 🧾 Installing the Tesseract
* Download the file [here](https://clp.pw/tesseract).
* After that, run downloaded file as Administrator.
* Complete the installation.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\Program Files\Tesseract-OCR;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've Tesseract installed, verify that it's working by running this command to see version number:
```cmd
> tesseract -version
```

## 🛠️ Installing the FFmpeg
* Download one of the available versions of FFmpeg by clicking [this link](https://www.gyan.dev/ffmpeg/builds/).
* Extract the file to `C:\` path.
* Rename the extracted folder to `ffmpeg`.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've FFmpeg installed, verify that it's working by running this command to see version number:
```cmd
> ffmpeg -version
```

## 🔍 Installing the dependencies
```cmd
> npm install
```

## 🆗 Running the bot
Regular node:
```cmd
> npm start
```

PM2:
```cmd
> pm2 start index.js
> pm2 monit
```

PM2 with cron job (restart after 5 hours):
```cmd
> pm2 start index.js --cron "* */5 * * *"
> pm2 monit
```

After that scan the QR code using your WhatsApp in your phone!


# Thanks to
* [`adiwajshing/baileys`](https://github.com/adiwajshing/baileys)
* [`Nurutomo`](https://github.com/nurutomo)
* [`Caliph`](https://github.com/caliphdev)
* [`Ferdiz - AFK`](https://github.com/ferdiz-afk)
* [`MFarelS`](https://github.com/mfarels)
* [`MhankBarBar`](https://github.com/mhankbarbar)
