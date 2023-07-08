module.exports = (sequelize, Sequelize) => {
  const GasBillModel = sequelize.define("gasBillTab", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: { type: Sequelize.DATE, allowNull: false },
    montantHT: { type: Sequelize.NUMBER, allowNull: false },
    abonnement: { type: Sequelize.NUMBER, allowNull: false },
    contribution: { type: Sequelize.NUMBER, allowNull: false },
    taxe: { type: Sequelize.NUMBER, allowNull: false },
  });
  return GasBillModel;
};
