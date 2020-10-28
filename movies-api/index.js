const express = require('express')
const app = express()
const cors = require('cors');
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
    logErrors,
    errorHandler,
    wrapErrors
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Implementacion de cors
app.use(cors());
//body parser
app.use(express.json());

//routes
moviesApi(app);

//Catch 404
app.use(notFoundHandler);

//Error Middleware
app.use(logErrors);
app.use(wrapErrors)
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`listening http://localhost:${config.port}`)
})