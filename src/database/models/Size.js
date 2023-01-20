module.exports = (sequelize, dataTypes) => {
    let alias = "Sizes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        size: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tablename: "sizes",
        timestamps: false
    };

    const Size = sequelize.define(alias, cols, config);

    Size.associate = function(models){
       Size.belongsToMany(models.Products, {
            as: "sizeProduct",
            through: "products_sizes",
            foreignKey: "idSize",
            otherKey: "idProduct",
            timestamps: false,
        }) };

    return Size;
}