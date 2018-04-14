const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({teste: 'teste'})
})
app.post('/register', function (req, res) {
  res.send({
    message: 'Hello ' + String(req.body.email) + '! now you are registered'
  })
})

app.listen(8081)

// const SpotifyWrapper = require('spotfy-wrapper').default;
// global.fetch = require('node-fetch');
// const spotifyWrapper = new SpotifyWrapper({
//   token: 'BQDDtXuUuZw0qX4AINGhD11p6EukgV9CIsUEfdG9EyCHQ4UlEAREGStBnSiRpYblYdRnRUodSn4cYB7_BGhGsupkDV64IU0h7fymj2AwkeBk-oZrKZYt1y60wKRVvsG6aIesx8dUciLnhck'
// })
// const responsePromise = spotifyWrapper.search.artists("Strokes")
// const trowSucess = items => items.map(item => process.stdout.write(`- ${item.name}\n`))
// responsePromise.then(data => trowSucess(data.artists.items))
