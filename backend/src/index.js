const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(3333); //Ao acessar local host (node), vamos utilizar a porta 3333
