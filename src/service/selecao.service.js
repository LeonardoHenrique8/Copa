const database = []
let mySequenceId = 1

const create = selecao => {
  selecao.id = mySequenceId++
  database.push(selecao)
}

const listAll = () => database

const update = (selecaoId, selecao) => {
  const selecaoIndex = database.findIndex(
    sele => sele.id == selecaoId
  )

  if (selecaoIndex > -1) {
    selecao.id = selecaoId
    database[selecaoIndex] = selecao
  }
}

const remove = selecaoId => {
  const selecaoIndex = database.findIndex(
    sele => sele.id == selecaoId
  )

  if (selecaoIndex > -1) {
    database.splice(selecaoIndex, 1)
  }
}

const getById = selecaoId => {
  const selecaoIndex = database.findIndex(
    sele => sele.id == selecaoId
  )

  if (selecaoIndex > -1) {
    return database[selecaoIndex]
  }
  return null
}
const getByParti = atletaParticipacoes => {
  const atletaIndex = database.filter(
    sele => sele.participacoes == atletaParticipacoes
  )
  if (atletaIndex) {
    return atletaIndex
  }
  return null
}

module.exports = {
  create,
  listAll,
  update,
  remove,
  getById,
  getByParti
}