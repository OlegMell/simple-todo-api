const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(process.env.MONGO_DB_CONNECTION,
        {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = connect;
