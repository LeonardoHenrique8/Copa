const partidaService = require('../service/partida.service')

const create = (req, res) => {
  if (validateFields(res, req.body)) {
    partidaService.create(req.body)
    res.status(201).send('partida create successfully!')
  }
}

const listAll = (req, res) => res.send(partidaService.listAll())

const update = (req, res) => {
  const partidaId = req.params.id

  const partida = partidaService.getById(partidaId)
  if (partida) {
    partidaService.update(req.params.id, req.body)
    res.send('partida updated successfully!')
  } else {
    res.status(404).send('partida not found')
  }
}

const remove = (req, res) => {
  const partidaId = req.params.id

  const partida = partidaService.getById(partidaId)
  if (partida) {
    partidaService.remove(req.params.id)
    res.send('partida removed successfully!');
  } else {
    res.status(404).send('partida not found')
  }
}

const getById = (req, res) => {
  const partida = partidaService.getById(req.params.id)
  if (partida) {
    res.send(partida)
  } else {
    res.status(404).send('partida not found')
  }
}
const getByDat = (req, res) => {
  const atleta = atletaService.getByDat(req.params.data)
  if (atleta) {
    res.send(atleta)
  } else {
    res.status(404).send('atleta not found')
  }
}

const validateFields = (res, partida) => {
  if (!partida.time1 || partida.time1.trim() == '') {
    res.status(400).send('O campo time1 é necessário!!')
    return false
  }
  if (!partida.time2 || partida.time2.trim() == '') {
    res.status(400).send('O campo time2 é necessário!!')
    return false
  }
  if (!partida.data || partida.data.trim() == '') {
    res.status(400).send('O campo data é necessário!!')
    return false
  }
  if (!partida.hora || partida.hora.trim() == '') {
    res.status(400).send('O campo hora é necessário!!')
    return false
  }

  return true
}

module.exports = {
  create,
  listAll,
  update,
  remove,
  getById,
  getByDat
}