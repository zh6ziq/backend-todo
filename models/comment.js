const { sequelize } = require(".");
const todos = require("../controllers/todos");

module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
        comment: DataTypes.STRING,
    
    })

    Comments.associate = function(models) {
        Comments.belongsTo(models.todos)
    }

    return Comments;
};