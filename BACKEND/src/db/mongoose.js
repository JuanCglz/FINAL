const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-) ok
const connectionURL = 'mongodb+srv://johhny:A00813022@demo-bwqd8.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
