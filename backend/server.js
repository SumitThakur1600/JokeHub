const express = require("express");
const axios = require("axios");
const app = express();
const cors = require('cors');
require('dotenv').config()
app.use(cors());

const api = process.env.API_KEY;

app.get('/', (req, res) => {
    res.send("Server is Ready");
});

app.get('/jokes', (req, res) => {
    axios
        .get(`https://hindi-jokes-api.onrender.com/jokes/50?api_key=${process.env.API_KEY}`)
        .then((response) => {
            console.log(response)
            res.send(response.data);
        })
        .catch((error) => {
            res.status(500).send({ message: 'Error fetching jokes' });
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
