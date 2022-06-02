const serachSchema = require('../models/model');

const renderPage = (req, res) => {
	res.render('index');
};

const dataFromDb = async (req, res) => {
	const allData = await serachSchema.find({});
	res.send(allData);
};

const dataSearchRender = (req, res) => {
	res.locals.output = false;
	res.render('searchResult');
};

const dataSearch = async (req, res) => {
	const dataFromFrontEnd = req.body.searchValue;
	await serachSchema
		.find({
			Name: { $regex: dataFromFrontEnd, $options: '$i' },
		})
		.then((data) => {
			res.locals.output = data;
			res.render('searchResult');
		});
};

module.exports = { dataFromDb, dataSearch, renderPage, dataSearchRender };
