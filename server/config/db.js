const mongoose = require('mongoose')
  
const connect = ()=>{
    return mongoose.connect('mongodb+srv://user:123@cluster0.ags415a.mongodb.net/youtube_db?retryWrites=true&w=majority&appName=Cluster0')
}
module.exports = connect;