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

    return Size;
}