const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOBD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log('database is connected')
})

module.exports = mongoose