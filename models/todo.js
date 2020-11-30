const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const todos = sequelize.define('todos', {
        title: DataTypes.STRING,
        description: DataTypes.STRING
    })

    todos.associate = function(models) {
        todos.hasMany(models.Comments)
    }

    return todos;
}