const express = require('express');
const app = express();
const request = require('request');
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/items', (req, response) => {
    let responseValue = {
        author: {},
        categories: [],
        items: []
    }
    const searchValue = req.query.q;
    request(encodeURI('https://api.mercadolibre.com/sites/MLA/search?q=' + searchValue),{ json: true }, (err, res, body) => {
        if (err){
            response.status(500).send('An error has ocurred!');
        } else {
            for (let i = 0; i < 4; i++) {
                const result = body.results[i];
                const item = {
                    id: result.id,
                    title: result.title,
                    price: {
                        currency: result.currency_id,
                        amount: result.price,
                        decimals: null,
                    },
                    address: result.address.city_name,
                    picture: result.thumbnail,
                    condition: result.condition,
                    free_shipping: result.shipping.free_shipping,                    
                }
                responseValue.items.push(item);
            }
            response.status(200).send(responseValue);
 
        }
    });
});
app.get('/items/:id', (req, response) => {
    let responseValue = {
        author: {},
        item: {}
    }
    const idValue = req.params.id;
    request(encodeURI('https://api.mercadolibre.com/items/' + idValue),{ json: true }, (err, res, body) => {
        if (err){
            response.status(500).send('An error has ocurred!');
        } else {
                const item = {
                    id: body.id,
                    title: body.title,
                    price: {
                        currency: body.currency_id,
                        amount: body.price,
                        decimals: null,
                    },
                    picture: body.pictures.length > 0 ? body.pictures[0].url : null,
                    condition: body.condition,
                    free_shipping: body.shipping.free_shipping,
                    sold_quantity: body.sold_quantity,
                    description: body.description                   
                }
                responseValue.item = item;
            response.status(200).send(responseValue);
 
        }
    });
});
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
