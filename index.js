const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const details = require('./data/details.json');


app.get('/', (req, res) => {
    res.send('Course API running');
});


app.get('/courses-categories', (req, res) => {
    res.send(categories);
});


app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const contentDetails = details.find(d => d.id === id);
    res.send(contentDetails);
});


app.get('/courses', (req, res) => {
    res.send(details);
})

app.listen(port, () => {
    console.log('Education tutorial server running on port', port);
})
