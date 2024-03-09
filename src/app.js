const express = require('express');

const routes = require('./routes');

const port = process.env.PORT || 5000;
const app = express();

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
