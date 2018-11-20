module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    goals: DataTypes.STRING
  });


  User.associate = function(models) {
    User.hasMany(models.Search, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};
