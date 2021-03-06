if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const port = 5000

app.use(cors());
app.use(express.json());

//Routes

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/user/:id', async(req, res) => {
	try {
		const { id } = req.params;
		const retUser = await pool.query(
			'select * from customer where user_id = $1', 
			[id]
		);
		res.json(retUser.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});


app.get('/user/:id/pets', async(req, res) => {
	try {
		const { id } = req.params;
		const ret = await pool.query(
			'select * from pet where user_id = $1',
			[id]
		);
		res.json(ret.rows);
	} catch (err) {
		console.error(err.message);
	}
})

app.post('/verifyuser', async(req, res) => {
	try {
		const { usernameForm, passwordForm } = req.body;

		const expected = await pool.query(
			'select * from customer where username=$1', 
			[usernameForm]
		);
		const user = expected.rows[0];
		const expectedPW = expected.rows[0].password;

		if (passwordForm === expectedPW) {
			const success = true;
			ret = {success, user}
			res.json(ret); 
		} else {
			const success = false;
			res.json({success});
		}

	} catch (err) {
		console.error(err.message);
	}
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})