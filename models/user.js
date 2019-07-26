module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: Datatypes.STRING,
      lastName: Datatypes.STRING
    },
    {
      freezeTableName: true
    }
  );

  User.associate = models => {
    User.hasMany(models.workstat);
  };

  return User;
};
