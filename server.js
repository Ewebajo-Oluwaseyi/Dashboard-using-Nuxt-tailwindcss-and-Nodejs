const express = require('express');
const app = express()
const connectDB = require('./config/db')
var cors = require('cors')


connectDB();
app.use(cors());
app.use(express.json({ extended: false }))

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))