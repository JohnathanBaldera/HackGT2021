if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const port = 3000

app.use(cors());
app.use(express.json());

//Routes

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post("/test", async(req, res) => {
	try {
		const { description } = req.body;
		const newTest = await pool.query(
			"INSERT INTO test (description) VALUES($1) RETURNING *", 
			[description]
		);
		res.json(newTest.rows[0]);

	} catch (err) {
		console.error(err.message);
	}
})

app.get("/test/:id", async(req, res) => {
	try {
		const { id } = req.params;
		const aTest = await pool.query(
			"SELECT * FROM test WHERE id = $1", 
			[id]
		);
		res.json(aTest.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
})


// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})