module.exports = (sequelize, dataTypes) => {
    let alias = "CartsProducts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        idCart: {
            type: dataTypes.INTEGER,
            references: {
               // model: Cart,
                key: "id",
            }
        },
        idProduct: {
            type: dataTypes.INTEGER,
            references: {
               // model: Product,
                key: "id",
            }
        },
        quantity: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tablename: "carts_products",
        timestamps: false
    };

    const CartProduct = sequelize.define(alias, cols, config);


    return CartProduct;
}