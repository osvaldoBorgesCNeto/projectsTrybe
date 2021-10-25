const express = require('express');
const bodyParser = require('body-parser');
const erroMiddleware = require('./middlewares/error');
const products = require('./routers/ProductsRouter');
const sales = require('./routers/SalesRouter');

require('dotenv').config();

const app = express();
const NumberPORT = 3000;
const PORT = process.env.PORT || NumberPORT;

app.use(bodyParser.json());

app.use('/products', products);

app.use('/sales', sales);

app.use(erroMiddleware);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Servidor Ligado porta ${PORT}!!!`));
