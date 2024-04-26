const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const { hash } = require('bcryptjs')
const Aluno = connection.define('alunos', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING
    }
})

// Aluno.beforeSave(async (aluno) => {
//     aluno.password = await hash(aluno.password, 8)
// })

module.exports = Aluno