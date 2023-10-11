const mongoose = require("mongoose")
const {model, Schema} = mongoose

const TransactionSchema = new Schema({
	name: {type: String, required: true},
	price: {type: Number, required: true},
	description: {type: String, required: true},
	datetime: {type: Date, required: true},
})

const TransactionModel = model('Transaction', TransactionSchema)

module.exports = TransactionModel