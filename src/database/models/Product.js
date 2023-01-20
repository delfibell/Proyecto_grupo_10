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
            }
        },
        idDiscount: {
            type: dataTypes.INTEGER,
            references: {
               // model: ProductDiscount,
                key: "id",
            }
        },
        
    };
    let config = {
        tablename: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsToMany(models.Carts, {
            as: "productCart",
            through: "carts_products",
            foreignKey: "idProduct",
            otherKey: "idCart",
            timestamps: false,
        }) };

        Product.associate = function(models){
            Product.belongsToMany(models.Fragances, {
                as: "productFragance",
                through: "products_fragances",
                foreignKey: "idProduct",
                otherKey: "idfragance",
                timestamps: false,
            }) };

    Product.associate = function(models){
            Product.belongsToMany(models.Sizes, {
                as: "productSize",
                through: "products_sizes",
                foreignKey: "idProduct",
                otherKey: "idSize",
                timestamps: false,
            }) };

   Product.associate = function(models) {
        Product.belongsTo(models.ProductsTypes, {
            as:"productType",
            foreignKey: "idType"
        })
    }

    Product.associate = function(models) {
        Product.belongsTo(models.ProductsDiscounts, {
            as:"productDiscount",
            foreignKey: "idDiscount"
        })
    }

    return Product;
}