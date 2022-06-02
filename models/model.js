const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
	SNo: Number,
	Name: String,
	Current_Market_Price: Number,
	Market_Cap: Number,
	Stock_PE: Number,
	Dividend_Yield: Number,
	ROCE: Number,
	ROE_Previous_Annum: Number,
	Debt_to_Equity: Number,
	EPS: Number,
	Reserves: Number,
	Debt: Number,
});

module.exports = mongoose.model('data', searchSchema);
