const database = []
let mySequenceId = 1

const create = atleta => {
  atleta.id = mySequenceId++
  database.push(atleta)
}

const listAll = () => database

const update = (atletaId, atleta) => {
  const atletaIndex = database.findIndex(
    atle => atle.id == atletaId
  )

  if (atletaIndex > -1) {
    atleta.id = atletaId
    database[atletaIndex] = atleta
 
  }
}

const remove = atletaId => {
  const atletaIndex = database.findIndex(
    atle => atle.id == atletaId
  )

  if (atletaIndex > -1) {
    database.splice(atletaIndex, 1)
  }
}

const getById = atletaId => {
  const atletaIndex = database.findIndex(
    atle => atle.id == atletaId
  )

  if (atletaIndex > -1) {
    return database[atletaIndex]
  }
  return null
}
const getBySelec = atletaSelecao => {
  const atletaIndex = database.filter(
    atle => atle.selecao == atletaSelecao
  )

  if (atletaIndex) {
    return atletaIndex
  }
  return null
}
const getByPosi = atletaPosicao => {
  const atletaIndex = database.filter(
    atle => atle.posicao == atletaPosicao
  )

  if (atletaIndex) {
    return atletaIndex
  }
  return null
}
const getByNum = atletaNumero => {
  const atletaIndex = database.filter(
    atle => atle.numero == atletaNumero
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
  getBySelec,
  getByPosi,
  getByNum
}