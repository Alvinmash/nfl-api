const teams = require('../teams')

const getTeamId = (request, response) => {
  return response.send(teams)
}

module.exports = getTeamId
