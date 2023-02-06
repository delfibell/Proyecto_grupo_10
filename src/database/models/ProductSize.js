module.exports = (sequelize, dataTypes) => {
  let alias = "ProductsSizes";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    size: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tablename: "productsSizes",
    timestamps: false,
  };

  const ProductSize = sequelize.define(alias, cols, config);

  ProductSize.associate = function (models) {
    ProductSize.hasMany(models.Products, {
      as: "productSize",
      foreignKey: "idSize",
    });
  };

  return ProductSize;
};
