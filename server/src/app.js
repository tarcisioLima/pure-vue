const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(8081)
    console.log('Server started on port ', config.port)
  })

// const SpotifyWrapper = require('spotfy-wrapper').default;
// global.fetch = require('node-fetch');
// const spotifyWrapper = new SpotifyWrapper({
//   token: 'BQDDtXuUuZw0qX4AINGhD11p6EukgV9CIsUEfdG9EyCHQ4UlEAREGStBnSiRpYblYdRnRUodSn4cYB7_BGhGsupkDV64IU0h7fymj2AwkeBk-oZrKZYt1y60wKRVvsG6aIesx8dUciLnhck'
// })
// const responsePromise = spotifyWrapper.search.artists("Strokes")
// const trowSucess = items => items.map(item => process.stdout.write(`- ${item.name}\n`))
// responsePromise.then(data => trowSucess(data.artists.items))
