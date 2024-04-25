const Matricula = require("../models/Matricula")
const Aluno = require("../models/Aluno")
const Curso = require("../models/Curso")

class MatriculaController {
    async cadastrar(req, res) {
        try {
            const aluno_id = req.body.aluno_id
            const curso_id = req.body.curso_id

            if (!curso_id || !aluno_id) {
                return res
                    .status(400)
                    .json({ mensagem: 'O ID do aluno e do curso são obrigatórios' })
            }

            const alunoExistente = await Aluno.findByPk(aluno_id)
            const cursoExistente = await Curso.findByPk(curso_id)
            const matriculaExistente = await Matricula.findOne({
                where: {
                    aluno_id,
                    curso_id
                }
            })

            if (!alunoExistente || !cursoExistente) {
                return res.status(404).json({ mensagem: 'Aluno ou curso não existe, favor verificar.' })
            }

            if (matriculaExistente) {
                return res.status(409).json({ mensagem: 'O Aluno já está matriculado no curso' })
            }

            const matricula = await Matricula.create({
                aluno_id: aluno_id,
                curso_id: curso_id
            })


            res.status(201).json(matricula)

        } catch (error) {
            res.status(500).json({ messagem: "Houve um erro ao cadastrar a matricula" })
        }
    }
}

module.exports = new MatriculaController()