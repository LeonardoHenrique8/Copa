const atletaService = require('../service/atleta.service')

const create = (req, res) => {
  if (validateFields(res, req.body)) {
    atletaService.create(req.body)
    res.status(201).send('atleta create successfully!')
  }
}

const listAll = (req, res) => res.send(atletaService.listAll())

const update = (req, res) => {
  const atletaId = req.params.id

  const atleta = atletaService.getById(atletaId)
  if (atleta) {
    atletaService.update(req.params.id, req.body)
    res.send('atleta updated successfully!')
  } else {
    res.status(404).send('atleta not found')
  }
}

const remove = (req, res) => {
  const atletaId = req.params.id

  const atleta = atletaService.getById(atletaId)
  if (atleta) {
    atletaService.remove(req.params.id)
    res.send('atleta removed successfully!');
  } else {
    res.status(404).send('atleta not found')
  }
}

const getById = (req, res) => {
  const atleta = atletaService.getById(req.params.id)
  if (atleta) {
    res.send(atleta)
  } else {
    res.status(404).send('atleta not found')
  }
}
const getBySelec = (req, res) => {
  const atleta = atletaService.getBySelec(req.params.selecao)
  if (atleta) {
    res.send(atleta)
  } else {
    res.status(404).send('atleta not found')
  }
}
const getByPosi = (req, res) => {
  const atleta = atletaService.getByPosi(req.params.posicao)
  if (atleta) {
    res.send(atleta)
  } else {
    res.status(404).send('atleta not found')
  }
}
const getByNum = (req, res) => {
  const atleta = atletaService.getByNum(req.params.numero)
  if (atleta) {
    res.send(atleta)
  } else {
    res.status(404).send('atleta not found')
  }
}
const validateFields = (res, atleta) => {
  if (!atleta.nome || atleta.nome.trim() == '') {
    res.status(400).send('O campo nome é necessário!!')
    return false
  }
  if (!atleta.posicao || atleta.posicao.trim() == '') {
    res.status(400).send('O campo posicao é necessário!!')
    return false
  }
  if (!atleta.selecao || atleta.selecao.trim() == '') {
    res.status(400).send('O campo selecao é necessário!!')
    return false
  }
  if (!atleta.numero || atleta.numero == '') {
    res.status(400).send('O campo numero é necessário!!')
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
  getBySelec,
  getByPosi,
  getByNum
  
}