const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const detailsRouter = require('./routes/detailsRouter');
const cors = require('cors');

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(cors());

app.use('/details', detailsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
