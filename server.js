const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { contracts } = require('./api/controllers');

app.get('/contracts', contracts.listAll);
app.get('/contracts/:id(\\d+)', contracts.list);
app.put('/contracts/:id(\\d+)', contracts.update);

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));

module.exports = app;