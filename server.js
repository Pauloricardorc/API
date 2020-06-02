const express =  require('express')
const app = express()
const data = require('./data.json')

app.use(express.json())

app.get('/apiPerguntas', function(req, res){
    res.json(data)
})

app.get('/apiPerguntas/questao/', function(req, res){
    const client = data.Quiz.map(ma => ma.PrimeiraTela.map(pe => pe.Questão))
    
    res.json(client)
})

app.get('/apiPerguntas/questao/:id', function(req, res){
    const { id } = req.params
    const client = data.Quiz.map(ma => ma.PrimeiraTela.map(pe => pe.Questão[id]))
    // console.log(client[id])
    res.json(client)
})

app.listen(process.env.PORT || 3000)



    // app.get('/apiPerguntas/pergunta/:id', function(req, res){
    //     const { id } = req.params
        
    //     const resdata = data.Pergunta()
    
    //     res.json(resdata)
    // })
