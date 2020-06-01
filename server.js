const express =  require('express')
const app = express()
const data = require('./data.json')

app.use(express.json())

app.get('/apiPerguntas', function(req, res){

    res.json(data.map(re => re.Pergunta))

})

app.get('/apiPerguntas/pergunta/:id', function(req, res){
    const { id } = req.params

    const result = data.map(res => res.Pergunta[id])

    res.json(result)
})

app.get('/apiPerguntas/perguntas', function(req, res){

    const cliente  = data.find(cli => cli.Pergunta)

    res.json(cliente.Pergunta.map(rep => rep.pergunta))
})

app.get('/apiPerguntas/questao/:id', function(req, res){
    const { id }  = req.params
    const cliente  = data.find(cli => cli.id == id)

    if(!cliente) return res.status(204).json()

    res.json(cliente.questao)
})

// app.get('/apiPerguntas/:id', function(req, res){
//     const { id } = req.params
//     const List = data.find(pa => pa.id == id)

//     res.json(List)
// })

app.listen(process.env.PORT || 3000)