const express = require('express');
const router = express.Router();
const {
	dataFromDb,
	dataSearch,
	renderPage,
	dataSearchRender,
} = require('../controllers/main');
const { isLoggedIn } = require('../middleware');

router.route('/').get(renderPage);
router.route('/save').get(dataFromDb);
router
	.route('/search')
	.get(isLoggedIn, dataSearchRender)
	.post(isLoggedIn, dataSearch);

module.exports = router;
