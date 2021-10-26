const express = require('express')
const router = express.Router()
const partidaController = require('../controller/partida.controller')

router.post('/', partidaController.create)
router.get('/', partidaController.listAll)
router.get('/:id', partidaController.getById)
router.get('/dat/:data', partidaController.getByDat)
router.put('/:id', partidaController.update)
router.delete('/:id', partidaController.remove)

module.exports = router
