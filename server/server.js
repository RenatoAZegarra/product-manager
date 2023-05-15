const express = require('express');
const cors = require('cors')

const app = express();


// middleware
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

// load .env vars
require('dotenv').config()
// access the .env vars
const port = process.env.PORT

// Require / import the file
require("./config/mongoose.config")

// require the routes here to run
require("./routes/product.routes")(app)


app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));