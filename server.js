const express = require('express');
const app = express();
const routes = require('./routes');

const cors = require("cors");

const PORT = process.env.PORT || 5000;

require('custom-env').env('local');


// require db connection
require('./models');
app.use(cors());
// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add this line
app.use(express.static('client/build'));
app.use(routes);

// Bootstrap server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});
