const express =  require('express')
const app = express()
const data = require('./data.json')

app.use(express.json())

app.get('/apiPerguntas', function(req, res){
    res.json(data)
})

app.get('/apiPerguntas/quiz', function(req, res){

    res.json(data.quiz[1])
})
app.get('/apiPerguntas/list/quiz', function(req, res){
    res.json(data.quiz)
})
app.get('/apiPerguntas/quiz/:id', function(req, res){
    const { id } = req.params
    const quizid = data.quiz[1].find(ma => ma.id == id)
    res.json(quizid)
})


// app.get('/apiPerguntas/pergunta/:id', function(req, res){
//     const { id } = req.params
    
//     const resdata = data.Pergunta()

//     res.json(resdata)
// })
app.get('/apiPerguntas/perguntas', function(req, res){
    const respe = data.quiz1.map(map => map.tema)

    res.json(respe)
})


app.get('/apiPerguntas/questao/', function(req, res){
    const cliente = data.quiz.quiz1.map(re => re.questao)

    res.json(cliente)
})


app.listen(process.env.PORT || 3000)