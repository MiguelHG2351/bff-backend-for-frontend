const express = require('express')
const morgan = require('morgan')

// Initialization
const app = express()

// middlewares
app.use(morgan('dev'))

// port 
app.set("port", 3000);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})
