if(process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}
const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const cors = require('cors')
const path = require('path')
require('./database')
console.log(process.env.NODE_ENV)

// Initialization
const app = express()

// setting

app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'))
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, file.originalname)
    }
})
app.use(multer({storage}).single('image'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// routes
app.use("/api/books", require('./routes/index.routes'))

// static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})
