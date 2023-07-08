module.exports = (sequelize, Sequelize) => {
  const GasFormModel = sequelize.define("gasFormTab", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: { type: Sequelize.DATE, allowNull: false },
    lot1: { type: Sequelize.NUMBER, allowNull: false },
    lot3: { type: Sequelize.NUMBER, allowNull: false },
    cour: { type: Sequelize.NUMBER, allowNull: false },
  });
  return GasFormModel;
};
