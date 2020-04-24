const sequelize = require('sequelize')
const teamModel = require('./teams')

const connection = new sequelize('teams', 'teams', 'nflTeam$', {
  host: 'localhost', dialect: 'mysql',

})

module.exports = { sequelize, teamModel, connection }
