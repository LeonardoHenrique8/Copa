const selecaoService = require('../service/selecao.service')

const create = (req, res) => {
  if (validateFields(res, req.body)) {
    selecaoService.create(req.body)
    res.status(201).send('selecao create successfully!')
  }
}

const listAll = (req, res) => res.send(selecaoService.listAll())

const update = (req, res) => {
  const selecaoId = req.params.id

  const selecao = selecaoService.getById(selecaoId)
  if (selecao) {
    selecaoService.update(req.params.id, req.body)
    res.send('selecao updated successfully!')
  } else {
    res.status(404).send('selecao not found')
  }
}

const remove = (req, res) => {
  const selecaoId = req.params.id

  const selecao = selecaoService.getById(selecaoId)
  if (selecao) {
    selecaoService.remove(req.params.id)
    res.send('selecao removed successfully!');
  } else {
    res.status(404).send('selecao not found')
  }
}

const getById = (req, res) => {
  const selecao = selecaoService.getById(req.params.id)
  if (selecao) {
    res.send(selecao)
  } else {
    res.status(404).send('selecao not found')
  }
}
const getByParti = (req, res) => {
  const atleta = atletaService.getByParti(req.params.participacoes)
  if (atleta) {
    res.send(atleta)
  } else {
    res.status(404).send('atleta not found')
  }
}

const validateFields = (res, selecao) => {
  if (!selecao.nome || selecao.nome.trim() == '') {
    res.status(400).send('O campo nome é necessário!!')
    return false
  }
  if (!selecao.tecnico || selecao.tecnico.trim() == '') {
    res.status(400).send('O campo tecnico é necessário!!')
    return false
  }
  if (!selecao.capitao || selecao.capitao.trim() == '') {
    res.status(400).send('O campo capitao é necessário!!')
    return false
  }
  if (!selecao.participacoes || selecao.participacoes == '') {
    res.status(400).send('O campo participacoes é necessário!!')
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
  getByParti
}