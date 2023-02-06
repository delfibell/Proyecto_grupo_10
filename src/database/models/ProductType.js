module.exports = (sequelize, dataTypes) => {
  let alias = "ProductsTypes";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tablename: "productsTypes",
    timestamps: false,
  };

  const ProductType = sequelize.define(alias, cols, config);

  ProductType.associate = function (models) {
    ProductType.hasMany(models.Products, {
      as: "productType",
      foreignKey: "idType",
    });
  };

  return ProductType;
};
