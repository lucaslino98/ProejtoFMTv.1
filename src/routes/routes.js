const { Router } = require("express")
const alunoRoutes = require("./alunos.routes")
const cursoRoutes = require("./cursos.routes")
const professorRoutes = require("./profesores.routes")
const loginRoutes = require("./login.routes")
const matriculaRoutes = require("./matriculas.routes")

const routes = Router()

routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/professores', professorRoutes)
routes.use('/login', loginRoutes)
routes.use('/matriculas', matriculaRoutes)

module.exports = routes