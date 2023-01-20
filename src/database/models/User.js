module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: dataTypes.STRING,
        },
       lastName: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        username: {
            type: dataTypes.STRING,
        },
        profilePic: {
            type: dataTypes.STRING,
        },
        idCategory: {
            type: dataTypes.INTEGER,
            references: {
             //   model: Category,
                key: "id",
            }
        },
    };
    let config = {
        tablename: "users",
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.Carts, {
            as: "userCart",
            foreignKey: "idUser"
        }) };

    User.associate = function(models) {
        User.belongsTo(models.Categories, {
            as:"userCategory",
            foreignKey: "idCategory"
        })
    }

    return User;
}
