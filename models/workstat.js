module.exports = (sequelize, DataTypes) => {
  const WorkStat = sequelize.define(
    "workstat",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATE
      },
      duration: {
        type: DataTypes.FLOAT
      }
    },
    {
      freezeTableName: true
    }
  );

  WorkStat.associate = models => {
    WorkStat.belongsTo(models.user);
  };

  return WorkStat;
};
