const express = require('express')
var cors = require('cors')
const app = express();
const port = 3000;
// app.use(express.json())
app.use(cors())


const x = 'hola'
const xy = [
    {
        category: 'O',
        descriptionCategory: 'ORO',
        amount: '$4,420,302.68',
        text: 'Te faltan $4,420,302.68 para aplicar a Vip ORO',
        messages: "(¡Estás cada vez más cerca de ser una Experta Vip!) Continua creciendo tu negocio para disfrutar los beneficios del plan.(¡No te dentengas!) Sigue aumentando las ventas"
    },
    {
        category: 'D',
        descriptionCategory: 'DIAMANTE',
        amount: '$20,420,302.68',
        text: 'Te faltan $20,420,302.68 para aplicar a Vip DIAMANTE',
        messages: '(¡Estás cada vez más cerca de ser una Experta Vip!) Continua creciendo tu negocio para disfrutar los beneficios del plan.¡No te dentengas! Sigue aumentando las ventas'
    },
    {
        category: 'A',
        descriptionCategory: 'DIAMANTE AZUL',
        amount: '$40,420,302.68',
        text: 'Te faltan $40,420,302.68 para aplicar a Vip DIAMANTE AZUL',
        messages: '¡No te dentengas! Sigue aumentando las ventas'
    }
]


app.get('/', (req, res) => res.send(xy));

app.listen(port, (err) => console.log(`Example app listening on port ${port}! "http://localhost:${port}/" // error = ${err} `));
