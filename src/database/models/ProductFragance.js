module.exports = (sequelize, dataTypes) => {
  let alias = "ProductsFragances";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    fragance: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tablename: "productsFragances",
    timestamps: false,
  };

  const ProductFragance = sequelize.define(alias, cols, config);

  ProductFragance.associate = function (models) {
    ProductFragance.hasMany(models.Products, {
      as: "productFragance",
      foreignKey: "idFragance",
    });
  };

  return ProductFragance;
};
