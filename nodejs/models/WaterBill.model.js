module.exports = (sequelize, Sequelize) => {
  const WaterBillModel = sequelize.define("waterBillTab", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: { type: Sequelize.DATE, allowNull: false },
    partDeletaire: { type: Sequelize.NUMBER, allowNull: false },
    sedif: { type: Sequelize.NUMBER, allowNull: false },
    preservationRessourcesEau: { type: Sequelize.NUMBER, allowNull: false },
    redevanceCommunautaire: { type: Sequelize.NUMBER, allowNull: false },
    redevanceFermiereCommunautaire: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    redevanceDepartementale: { type: Sequelize.NUMBER, allowNull: false },
    redevanceFermiereDepartementale: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    redevanceInterdepartementale: { type: Sequelize.NUMBER, allowNull: false },
    luttePollution: { type: Sequelize.NUMBER, allowNull: false },
    modernisationReseaux: { type: Sequelize.NUMBER, allowNull: false },
    soutienEtiage: { type: Sequelize.NUMBER, allowNull: false },
    dvlVoiesNaviguables: { type: Sequelize.NUMBER, allowNull: false },
  });
  return WaterBillModel;
};
