const express = require('express')
const getTeamId = require('./controllers/teams')

const app = express()

app.get('/teams', getTeamId)


app.all('*', (request, response) => {
  return response.sendstatus(404)
})

app.listen(7815, () => {
  console.log('listening on port 7815')// eslint-disable-line no-console
})
