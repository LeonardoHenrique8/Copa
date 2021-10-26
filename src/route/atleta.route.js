const express = require('express')
const router = express.Router()
const atletaController = require('../controller/atleta.controller')

router.post('/', atletaController.create)
router.get('/', atletaController.listAll)
router.get('/:id', atletaController.getById)
router.get('/selec/:selecao', atletaController.getBySelec)
router.get('/posi/:posicao', atletaController.getByPosi)
router.get('/num/:numero', atletaController.getByNum)
router.put('/:id', atletaController.update)
router.delete('/:id', atletaController.remove)

module.exports = router
