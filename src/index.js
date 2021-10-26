const express = require('express')
const swaggerUi = require('swagger-ui-express')
const atletaRouter = require('./route/atleta.route')
const partidaRouter = require('./route/partida.route')
const selecaoRouter = require('./route/selecao.route')
const swaggerFile = require('../swagger.json')

const app = express()
app.use(express.json())
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/atletas', atletaRouter)
app.use('/partidas', partidaRouter)
app.use('/selecoes', selecaoRouter)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})