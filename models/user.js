const mongoose = require('mongoose')

const mongo_uri = process.env.MONGODB_URI || "mongodb://localhost/DB";

mongoose.connect(mongo_uri, {useNewUrlParser: true});
mongoose.connection.once('open', () => console.log("Connected"))
                    .on('error' , ()=> { console.log('Error') })
const userSchema = {
  email: String,
  name: String,
  password : String
};

const User = mongoose.model("User", userSchema);


module.exports = User;
