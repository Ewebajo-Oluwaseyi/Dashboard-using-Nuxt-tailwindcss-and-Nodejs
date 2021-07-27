const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')

const app = express()

connectDB();
app.use(cors());
app.use(express.json({ extended: false }))

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/blog', require('./routes/blog'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))