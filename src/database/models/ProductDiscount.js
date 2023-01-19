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
        idProduct: {
            type: dataTypes.INTEGER,
            references: {
                model: Product,
                key: "id",
            }
        },
        status: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tablename: "productsDiscounts",
        timestamps: false
    };

    const ProductDiscount = sequelize.define(alias, cols, config);

    return ProductDiscount;
}