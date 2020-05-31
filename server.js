const express =  require('express')
const app = express()
const data = require('./data.json')

app.use(express.json())

app.get('/apiPerguntas', function(req, res){

    res.json(data)

})

app.get('/apiPerguntas/:id', function(req, res){
    const { id } = req.params
    const Listid = data.find(cli => cli.id == id)

    res.json(Listid)
})

app.get('/apiPerguntas/pergunta/:id', function(req, res){
    const { id }  = req.params
    const cliente  = data.find(cli => cli.id == id)

    if(!cliente) return res.status(204).json()

    res.json(cliente.pergunta)
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

app.listen(3000)