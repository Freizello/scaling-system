const express = require("express"),
      dotenv = require('dotenv'), 
      bodyParser = require('body-parser'),
      morgan = require("morgan"),
      mongoose = require("mongoose")
      webRoutes = require('./routes/web/index'),
      apiRoutes = require('./routes/api/index');
      
dotenv.config()
const port = (process.env.PORT || 8080)
const app = express()

// database
mongoose.connect(process.env.MONGODB_URL, { 
  useNewUrlParser: true,  
  useUnifiedTopology: true 
  }
).then(() => console.log('DB connected'))
// db conn error
mongoose.connection.on("error", err => {
  console.log(`DB connection error : ${err.message}`)
})

// middleware
app.use(morgan("dev"))

// request body handler
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}))
// parse application/json
app.use(bodyParser.json())

// routes
app.use("/api", apiRoutes)
app.use("/", webRoutes)

// start
app.listen(port, () => console.log(`app listening at http://localhost:${port}`))