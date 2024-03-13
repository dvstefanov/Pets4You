const path = require('path');

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const routes = require('./routes');

const port = process.env.PORT || 5000;
const app = express();


// template engine setup
app.set('views', './src/views');
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(expressLayouts);

// static files setup
app.use(express.static(path.resolve(__dirname, 'public')));


app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
