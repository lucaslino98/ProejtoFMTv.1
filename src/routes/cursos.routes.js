const { Router } = require('express')
const { auth } = require('../middleware/auth')
const CursosController = require('../controllers/CursosController')

const cursoRoutes = new Router()

cursoRoutes.post('/', auth, CursosController.criaCursos)
cursoRoutes.get('/', auth, CursosController.listaCursos)
cursoRoutes.put('/:id', auth, CursosController.attCursos)
cursoRoutes.delete('/:id', auth, CursosController.deleteCursos)

module.exports = cursoRoutes