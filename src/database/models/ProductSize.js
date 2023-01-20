module.exports = (sequelize, dataTypes) => {
    let alias = "ProductsSizes";
    let cols = {
        idSize: {
            type: dataTypes.INTEGER,
            references: {
              //  model: Size,
                key: "id",
            }
        },
        idProduct: {
            type: dataTypes.INTEGER,
            references: {
            //    model: Product,
                key: "id",
            }
        },
    };
    let config = {
        tablename: "products_sizes",
        timestamps: false
    };

    const ProductSize = sequelize.define(alias, cols, config);

    return ProductSize;
}