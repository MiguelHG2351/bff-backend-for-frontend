const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log('database is connected')
})

module.exports = mongoose