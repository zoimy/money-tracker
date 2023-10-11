const express = require('express')
const app = express()
const cors = require('cors')
const Transaction = require('./models/Transaction')
const mongoose  = require('mongoose')

app.use(cors())
app.use(express.json())

app.get('/api/test', (req, res) => {
	res.json('It s test')
})

app.post('/api/transaction',async (req, res) => {
	await mongoose.connect('mongodb+srv://zomy123:zoimy123@cluster0.ewe3ein.mongodb.net/')
	const {name, description, datetime, price} = req.body
	const transaction = await Transaction.create({name, description, datetime, price})
	res.json(transaction)
})

app.get('/api/transactions', async (req, res) => {
	await mongoose.connect('mongodb+srv://zomy123:zoimy123@cluster0.ewe3ein.mongodb.net/')
	const transactions = await Transaction.find()
	res.json(transactions)
})

app.listen(4040, () => {
	console.log('Server is working');
} )
