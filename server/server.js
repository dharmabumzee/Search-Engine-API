const express = require('express')
const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

app.use(morgan('tiny'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes')(app);

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found');
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message
  })
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(new Date() + ` Express server running on http://localhost:${port} `)
})