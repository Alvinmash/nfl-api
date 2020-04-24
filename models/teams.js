const teams = (connection, sequelize) => {
  return connection.define('heroes', {

    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    location: { Type: sequelize.STRING },
    mascot: { Type: sequelize.STRING },
    abbreviation: { Type: sequelize.STRING },
    conference: { Type: sequelize.STRING },
    division: { Type: sequelize.STRING },

  }, { paranoid: true })
}

module.exports = teams
