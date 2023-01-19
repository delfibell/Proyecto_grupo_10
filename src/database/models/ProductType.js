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
        timestamps: false
    };

    const ProductType = sequelize.define(alias, cols, config);

    return ProductType;
}