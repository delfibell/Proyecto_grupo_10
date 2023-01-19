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
                model: ProductType,
                key: "id",
            }
        },
    };
    let config = {
        tablename: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
}