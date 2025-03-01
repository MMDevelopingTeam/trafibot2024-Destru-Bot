const mongoose = require('mongoose');

const DB_URL =  `mongodb://0.0.0.0:27017/botDestrubotDataBase`

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URL,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log("error en DB", err);
                }else{
                    console.log("DB conectada correctamente")
                }
            }
        )
    }

    connect();
}