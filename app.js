const express = require("express"),
      dotenv = require('dotenv'), 
      bodyParser = require('body-parser'),
      morgan = require("morgan"),
      webRoutes = require('./routes/web/index'),
      apiRoutes = require('./routes/api/index');
      
dotenv.config()
const port = (process.env.PORT || 8080)

const app = express()

// middleware
app.use(morgan("dev"))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}))
// parse application/json
app.use(bodyParser.json())

// web routes
// app.get('/', webRoute)

// api routes
// app.get('/api', apiRoute)
// app.post('/api', apiRoute)
app.use("/api", apiRoutes)
app.use("/", webRoutes)


// start
app.listen(port, () => console.log(`app listening at http://localhost:${port}`))