module.exports = (sequelize, dataTypes) => {
    let alias = "Carts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        idUser: {
            type: dataTypes.INTEGER,
            references: {
                model: User,
                key: "id",
            }
        },
        date: {
            type: dataTypes.DATE,
        },
        status: {
            type: dataTypes.STRING,
        },
        totalPrice: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tablename: "carts",
        timestamps: false
    };

    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}