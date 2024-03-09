const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('home/home', { title: 'Home Page' });
});

router.get('/contacts', (req, res) => {
    res.render('home/contacts', { title: 'Contacts Page' });
});

module.exports = router;
