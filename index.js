const express = require('express');
const app = express();
const config = require('config');

app.use('/api/notes', require('./routes/notes.routes'));

const PORT = config.get('port') || 5000;

app.listen(PORT, () => console.log(`Started server on port ${PORT}...`));
