module.exports = (sequelize, dataTypes) => {
  let alias = "Products";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: dataTypes.STRING,
    },
    description: {
      type: dataTypes.STRING,
    },
    image: {
      type: dataTypes.STRING,
    },
    category: {
      type: dataTypes.STRING,
    },
    price: {
      type: dataTypes.INTEGER,
    },
    idType: {
      type: dataTypes.INTEGER,
      references: {
        // model: ProductType,
        key: "id",
      },
    },
    idDiscount: {
      type: dataTypes.INTEGER,
      references: {
        // model: ProductDiscount,
        key: "id",
      },
    },

    idFragance: {
      type: dataTypes.STRING,
      references: {
        // model: ProductDiscount,
        key: "id",
      },
    },

    idSize: {
      type: dataTypes.STRING,
      references: {
        // model: ProductDiscount,
        key: "id",
      },
    },
  };
  let config = {
    tablename: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsToMany(models.Carts, {
      as: "productCart",
      through: "carts_products",
      foreignKey: "idProduct",
      otherKey: "idCart",
      timestamps: false,
    });
  };

  Product.associate = function (models) {
    Product.belongsTo(models.ProductsTypes, {
      as: "productType",
      foreignKey: "idType",
    });
  };

  Product.associate = function (models) {
    Product.belongsTo(models.ProductsDiscounts, {
      as: "productDiscount",
      foreignKey: "idDiscount",
    });
  };

  Product.associate = function (models) {
    Product.belongsTo(models.ProductsFragances, {
      as: "productFragance",
      foreignKey: "idFragance",
    });
  };

  Product.associate = function (models) {
    Product.belongsTo(models.ProductsSizes, {
      as: "productSize",
      foreignKey: "idSize",
    });
  };

  return Product;
};
