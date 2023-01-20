module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        category: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tablename: "categories",
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.Users, {
            as:"categoryUser",
            foreignKey: "idCategory"
        })
    }

    return Category;
}