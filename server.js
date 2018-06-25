const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 3000;

const { database } = require('./database');
const  adunits  = require('./AdUnit.router');

const app = express();

// middleware
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static folder
app.use(express.static(path.join(__dirname, 'dist')));

// router
app.use('/adunits', adunits);

// handle all other requests
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/MEAN-ad-unit/index.html')));

app.listen(port, () => console.log(`Server running on port ${port}`));
