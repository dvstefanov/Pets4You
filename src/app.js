const express = require('express');

const port = process.env.PORT || 5000;
const app = express();

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home/home');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
