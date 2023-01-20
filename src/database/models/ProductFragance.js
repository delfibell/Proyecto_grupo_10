module.exports = (sequelize, dataTypes) => {
    let alias = "ProductsFragances";
    let cols = {
        idFragance: {
            type: dataTypes.INTEGER,
            references: {
               // model: Fragance,
                key: "id",
            }
        },
        idProduct: {
            type: dataTypes.INTEGER,
            references: {
                //model: Product,
                key: "id",
            }
        },
    };
    let config = {
        tablename: "products_fragances",
        timestamps: false
    };

    const ProductFragance = sequelize.define(alias, cols, config);

    return ProductFragance;
}