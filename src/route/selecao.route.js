const express = require('express')
const router = express.Router()
const selecaoController = require('../controller/selecao.controller')

router.post('/', selecaoController.create)
router.get('/', selecaoController.listAll)
router.get('/:id', selecaoController.getById)
router.get('/parti/:participacoes', selecaoController.getByParti)
router.put('/:id', selecaoController.update)
router.delete('/:id', selecaoController.remove)

module.exports = router
