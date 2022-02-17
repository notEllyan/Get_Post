//---Express
const express = require("express")
const app = express()
const port = 1313

app.use(express.urlencoded()),
app.use(express.json())

//---Rota
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/html/inicio.html")
})

app.get("/sobreVoce",(req,res)=>{
    res.sendFile(__dirname+"/html/sobreVoce.html")
})

app.post("/final", (req,res)=>{
    
    res.send(`<h2>Mensagem de: ${req.body.name}<h2>
            </br><h2>Email do Remetente: ${req.body.email}</h2>
            </br><h2>Mensagem:</h2><h3>${req.body.mensagem}</h3>`)
})
app.listen(port,()=>{
    console.log('Servidor rodando na url http://localhost:${port}')
})
