var Model = require('../models')
const e = require('express')

const todos = {
    getAllTodos: async (req, res) => {
        let todos = []
        try {
            todos = await Model.todos.findAll({
                include: [{
                    model: Model.Comments
                }]
            })
        } catch (err) {
            console.log(err)
        }
    
        res.json(todos)
    },

    getTodo: async (req, res) => {
        let todo = []
        try {
            todo = await Model.todos.findOne({
                where: {
                    id: req.params.id
                },

                include: [{
                    model: Model.Comments
                }]
            })
        } catch (err) {
            console.log(err)
        }

        res.json(todo)
    },

    createTodo: async (req, res) => {
        let todo = {}

        console.log(req)
        try {
            todo = await Model.todos.create({
                title: req.body.title,
                description: req.body.description
            })
        } catch (err) {
            console.log(err)   
        }

        res.json(todo)
    },

    updateTodo: async (req, res) => {
        let todo = {}
        try {
            await Model.todos.update(
                req.body, {
                    where: {
                        id: req.params.id
                    }
                }
            )
        } catch (err) {
            console.log(e)
        }

        res.json(todo)
    },

    deleteTodo: async (req, res) => {
        await Model.todos.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(204).json({
            status: 'Success'
        })
    },

    addComment: async (req, res) => {
        let comment = {}
        try {
            comment = await Model.Comments.create({
               comment: req.body.comment,
               todoId: req.params.id
           }) 
        } catch (err) {
            console.log(err)   
        } res.json(comment)
    },
}

module.exports = todos;