const Aluno = require("../models/Aluno")
const { sign } = require('jsonwebtoken')

class LoginController {
    async login(req, res) {
        try {
            const email = req.body.email
            const password = req.body.password
            if (!email) {
                return res.status(400).json({ erro: 'Informe o email' })
            }

            if (!password) {
                return res.status(400).json({ erro: 'Informe a sua senha' })
            }

            const aluno = await Aluno.findOne({
                where: { email: email, password: password }
            })
            if (!aluno) {
                return res.status(404).json({ erro: 'Nenhum aluno corresponde ao email e senha informados' })
            }

            const payload = { sub: aluno.id, email: aluno.email, nome: aluno.nome }

            const token = sign(payload, process.env.SECRET_JWT, {
                expiresIn: '24 h' // teste de expiração do toque"NÃO TESTEI"
            })

            res.status(200).json({ Token: token })
        } catch (error) {
            return res.status(500).json({ error: error, message: 'Algo deu errado' })
        }
    }

}

module.exports = new LoginController()