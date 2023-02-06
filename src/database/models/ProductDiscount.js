module.exports = (sequelize, dataTypes) => {
  let alias = "ProductsDiscounts";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    discount: {
      type: dataTypes.INTEGER,
    },
    status: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tablename: "productsDiscounts",
    timestamps: false,
  };

  const ProductDiscount = sequelize.define(alias, cols, config);

  ProductDiscount.associate = function (models) {
    ProductDiscount.hasMany(models.Products, {
      as: "productDiscount",
      foreignKey: "idDiscount",
    });
  };

  return ProductDiscount;
};
