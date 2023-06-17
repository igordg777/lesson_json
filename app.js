const express = require('express')
const app = express()

app.get('/', function (req, res) {
  let obj = {
    text: `Приветики`,
    tts: `<speaker audio="alice-music-harp-1.opus">. Приветики`,
    buttons: [
      { title: 'Начинаем', hide: true },
    ],
    end_session: false
  };
  res.json({obj})
})

app.listen(7777)