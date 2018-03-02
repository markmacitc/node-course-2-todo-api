var mongoose = require('mongoose');

                //copy the link from "To connect using a driver via the standard MongoDB URI" section
                //insert db user name and password here
                const REMOTE_MONGO = 'mongodb://todouser:mongodb1.@ds153778.mlab.com:53778/todoapp';
                const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
                const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;

                mongoose.Promise = global.Promise;
                mongoose.connect(MONGO_URI).then(() => {
                    console.log('Connected to Mongo instance.')
                }, (err) => {
                    console.log('Error connecting to Mongo instance: ', err);
                });

                module.export = { mongoose }





module.exports = {mongoose};
