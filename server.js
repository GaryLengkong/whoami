// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

app.get("/", (request, response) => {
  let ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  let acceptLanguage = request.get('accept-language')
  let userAgent = request.get('user-agent')
  response.json({
    ipaddress: ip.split(',')[0],
    language: acceptLanguage.split(',')[0],
    software: userAgent.match(/\((.*?)\)/)[1]
  })
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
