const express = require('express')
const cors = require('cors');

const routesDose = require('./routes/doseRoutes')
const routesBovino = require('./routes/bovinoRoutes')
const routesVacina = require('./api/routes/vacinaRoutes')
const routeCarteiras = require('./api/routes/carteirasRoutes')

const app = express();
const port = 3001;

app.use(cors());
app.use('/static', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));
    next();
});

app.use(routesDose)
app.use(routesBovino)
app.use(routesVacina)
app.use(routeCarteiras)

app.listen(port, () => {
    console.log('Servidor rodando na porta ', port)
});