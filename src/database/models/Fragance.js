module.exports = (sequelize, dataTypes) => {
    let alias = "Fragances";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        fragance: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tablename: "fragances",
        timestamps: false
    };

    const Fragance = sequelize.define(alias, cols, config);

    return Fragance;
}