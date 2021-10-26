const database = []
let mySequenceId = 1

const create = partida => {
  partida.id = mySequenceId++
  database.push(partida)
}

const listAll = () => database

const update = (partidaId, partida) => {
  const partidaIndex = database.findIndex(
    par => par.id == partidaId
  )

  if (partidaIndex > -1) {
    partida.id = partidaId
    database[partidaIndex] = partida
  }
}

const remove = partidaId => {
  const partidaIndex = database.findIndex(
    par => par.id == partidaId
  )

  if (partidaIndex > -1) {
    database.splice(partidaIndex, 1)
  }
}

const getById = partidaId => {
  const partidaIndex = database.findIndex(
    par => par.id == partidaId
  )

  if (partidaIndex > -1) {
    return database[partidaIndex]
  }
  return null
}
const getByDat = atletaData => {
  const atletaIndex = database.filter(
    par => par.data == atletaData
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
  getByDat
}