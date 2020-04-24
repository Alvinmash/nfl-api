const express = require('express')
const bodyParser = require('body-parser')
const { getAllTeams, getTeamById, saveNewTeam } = require('./controllers/teams')


const app = express()


app.get('/', getAllTeams)


app.get('/:id', getTeamById)

app.post('/', bodyParser.json(), saveNewTeam)

app.listen(7815, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 7815...')
})
