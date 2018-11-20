module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define("Search", {
      country: DataTypes.STRING
  
    });

    search.associate = function(models) {
        search.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Search;
  };