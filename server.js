const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

const initRoutes = require("./routes/index")


connectDB();
app.use(cors());
app.use(express.json({ extended: false }))
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/blog', require('./routes/blog'))

app.use('/', initRoutes);

// error handler


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))