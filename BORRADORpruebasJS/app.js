const express = require('express')
var cors = require('cors')
const app = express();
const port = 3000;
// app.use(express.json())
app.use(cors())


const x = 'hola'
const xy = [
    {
        categoria: 'O',
        descatego: 'ORO',
        monto: '$4,420,302.68',
        texto: 'Te faltan $4,420,302.68 para aplicar a Vip ORO',
        mensajes: "(¡Estás cada vez más cerca de ser una Experta Vip!) Continua creciendo tu negocio para disfrutar los beneficios del plan.(¡No te dentengas!) Sigue aumentando las ventas"
    },
    {
        categoria: 'D',
        descatego: 'DIAMANTE',
        monto: '$20,420,302.68',
        texto: 'Te faltan $20,420,302.68 para aplicar a Vip DIAMANTE',
        mensajes: '(¡Estás cada vez más cerca de ser una Experta Vip!) Continua creciendo tu negocio para disfrutar los beneficios del plan.¡No te dentengas! Sigue aumentando las ventas'
    },
    {
        categoria: 'A',
        descatego: 'DIAMANTE AZUL',
        monto: '$40,420,302.68',
        texto: 'Te faltan $40,420,302.68 para aplicar a Vip DIAMANTE AZUL',
        mensajes: '¡No te dentengas! Sigue aumentando las ventas'
    }
]


app.get('/', (req, res) => res.send(xy));

app.listen(port, (err) => console.log(`Example app listening on port ${port}! "http://localhost:${port}/" // error = ${err} `));
